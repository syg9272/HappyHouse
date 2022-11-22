<template>
  <div class="side-bar" v-if="this.isSide">
    <div>
      <!-- <div id="roadview" class="apt-img"></div> -->
      <map-load-view :aptInfo="aptInfo"></map-load-view>
      <div class="close-side-bar">
        <img @click="closeSide()" src="@/assets/img/close-side-bar.png" alt="close-side-bar" />
      </div>
    </div>
    <div class="detail-info">
      <div class="detail-title">
        <div>{{ apt.apartmentName }}</div>
        <img
          v-if="!isLike"
          @click="insertLike()"
          class="heart"
          src="@/assets/img/like.png"
          alt="like"
        />
        <img
          v-else
          @click="deleteLike()"
          class="heart"
          src="@/assets/img/like-select.png"
          alt="like"
        />
      </div>
      <div class="apt-rank">
        <!-- <div class="apt-rank-title">인기 순위</div> -->
        <div class="apt-rank-list">
          <span>{{ deal[0].dong }}</span>
          <div>
            <animated-number :value="aptRank" :duration="2000" :formatValue="formatToPrice">
            </animated-number>
          </div>
          <span>위</span>
          <span class="apt-rank-content">거래량 {{ deal.length }} 회</span>
        </div>
      </div>
      <div class="info-title">학군 정보</div>
      <div class="school-info">
        <div class="school-type">
          <div @click="selectEle()" :class="{ isSelected: isElement }">초등학교</div>
          <div @click="selectMiddle()" :class="{ isSelected: isMiddle }">중학교</div>
          <div @click="selectHigh()" :class="{ isSelected: isHigh }">고등학교</div>
        </div>
        <div v-if="isElement">
          <div class="list-item" v-for="item in elementList" :key="item" :elementList="elementList">
            <div class="school-name">
              {{ item.schoolName }}
            </div>
            <div class="school-distance">
              {{ item.distance }}
            </div>
          </div>
        </div>
        <div v-if="isMiddle">
          <div class="list-item" v-for="item in middleList" :key="item" :middleList="middleList">
            <div class="school-name">
              {{ item.schoolName }}
            </div>
            <div class="school-distance">
              {{ item.distance }}
            </div>
          </div>
        </div>
        <div v-if="isHigh">
          <div class="list-item" v-for="item in highList" :key="item" :highList="highList">
            <div class="school-name">
              {{ item.schoolName }}
            </div>
            <div class="school-distance">
              {{ item.distance }}
            </div>
          </div>
        </div>
      </div>
      <div class="info-title">아파트 정보</div>
      <div class="apt-info">
        <table class="apt-info-table">
          <tr>
            <th>건물 명</th>
            <td>{{ apt.apartmentName }}</td>
          </tr>
          <tr>
            <th>법정동</th>
            <td>{{ deal[0].dong }}</td>
          </tr>
          <tr>
            <th>지번 주소</th>
            <td>
              {{
                deal[0].sidoName +
                " " +
                deal[0].gugunName +
                " " +
                deal[0].dong +
                " " +
                deal[0].jibun
              }}
            </td>
          </tr>
          <tr>
            <th>건축 년도</th>
            <td>{{ deal[0].buildYear }} 년도</td>
          </tr>
        </table>
      </div>
      <div class="info-title">거래 정보</div>
      <div class="deal-table">
        <table>
          <thead>
            <th>거래일자</th>
            <th>거래금액</th>
            <th>전용 면적</th>
            <th>층</th>
          </thead>
          <tbody>
            <tr v-for="item in deal" :key="item" :deal="deal">
              <td>
                {{
                  item.dealYear +
                  "-" +
                  (item.dealMonth < 10 ? "0" + item.dealMonth : item.dealMonth) +
                  "-" +
                  (item.dealDay < 10 ? "0" + item.dealDay : item.dealDay)
                }}
              </td>
              <td>{{ item.dealAmount }}</td>
              <td>{{ item.area }} 평</td>
              <td>{{ item.floor }} 층</td>
            </tr>
          </tbody>
        </table>
      </div>
      <map-chart :apt="apt"></map-chart>
      <div class="review-title">
        <div class="score">3.5</div>
        <div>
          <a href="">
            <img src="@/assets/img/fullStar.png" alt="star1" />
            <img src="@/assets/img/fullStar.png" alt="star2" />
            <img src="@/assets/img/fullStar.png" alt="star3" />
            <img src="@/assets/img/falfStar.png" alt="star4" />
            <img src="@/assets/img/star.png" alt="star5" />
          </a>
        </div>
        <div class="count">리뷰 2개</div>
      </div>
      <div class="review-content">
        <div class="review">
          대형마트, 백화점도 근교에 있고요. 용산 가족 공원도 도보로 갈 수 있어서 환경은 만족하고
          있습니다. 교통도 ...
        </div>
        <div class="review">
          대형마트, 백화점도 근교에 있고요. 용산 가족 공원도 도보로 갈 수 있어서 환경은 만족하고
          있습니다. 교통도 ...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/api/http";
import { mapState } from "vuex";

// 숫자 오르는 애니메이션 라이브러리
import AnimatedNumber from "animated-number-vue";
// 차트 라이브러리
import MapChart from "@/components/map/MapChart.vue";
import MapLoadView from "@/components/map/MapLoadView.vue";

const memberStore = "memberStore";
const mapStore = "mapStore";

export default {
  name: "MapSide",
  components: {
    MapChart,
    MapLoadView,
    AnimatedNumber,
  },
  data() {
    return {
      aptInfo: null,
      deal: null,
      isLike: false,
      chartInfo: null,

      aptRank: 0,

      isElement: true,
      isMiddle: false,
      isHigh: false,

      elementList: [],
      middleList: [],
      highList: [],
    };
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
    ...mapState(mapStore, ["apt"]),
    ...mapState(mapStore, ["isSide"]),
    ...mapState(mapStore, ["year"]),
    ...mapState(mapStore, ["avgAmount"]),
    ...mapState(mapStore, ["schoolList"]),
  },
  methods: {
    selectEle() {
      this.isElement = true;
      this.isMiddle = false;
      this.isHigh = false;
    },
    selectMiddle() {
      this.isElement = false;
      this.isMiddle = true;
      this.isHigh = false;
    },
    selectHigh() {
      this.isElement = false;
      this.isMiddle = false;
      this.isHigh = true;
    },
    formatToPrice(value) {
      return `${Number(value).toFixed(0)}`;
    },
    closeSide() {
      this.$store.commit("mapStore/SET_IS_SIDE");
      this.$emit("updateParent");
    },
    insertLike() {
      if (confirm("관심목록에 추가하시겠습니까?")) {
        this.isLike = true;
        this.aptInfo.id = this.userInfo.id;
        http.post("/apt/insertLikeApt", this.aptInfo).then((data) => {
          console.log(data);
        });
      }
    },
    deleteLike() {
      if (confirm("관심목록에서 제외하시겠습니까?")) {
        this.isLike = false;
        http
          .delete("/apt/deleteLikeApt", {
            params: {
              id: this.userInfo.id,
              aptCode: this.aptInfo.aptCode,
            },
          })
          .then((data) => {
            console.log(data);
          });
      }
    },
  },
  async created() {
    this.aptInfo = this.apt;
    this.aptInfo.id = this.userInfo.id;
    await http.post("/apt/detailAptList", this.aptInfo).then((data) => {
      console.log("디테일 정보 ~!~!~!~!", data.data);
      console.log("디테일 정보 ~!~!~!~!", data.data.avgList);
      this.$store.commit("mapStore/SET_YEAR", data.data.year);
      this.$store.commit("mapStore/SET_AVG_AMOUNT", data.data.avgAmount);
      this.isLike = data.data.like;
      this.deal = data.data.list;
      this.aptInfo = data.data.list[0];
      console.log("정보정보", data.data);
      this.aptRank = data.data.aptRank.rank;
      this.$store.commit("mapStore/SET_SCHOOL_LIST", data.data.schoolList);
      for (let index = 0; index < this.schoolList.length; index++) {
        const element = this.schoolList[index];
        element.distance += "km";
        if (element.schoolName.includes("초등학교")) {
          this.elementList.push(element);
        } else if (element.schoolName.includes("중학교")) {
          this.middleList.push(element);
        } else {
          this.highList.push(element);
        }
      }
      console.log(this.elementList);
      console.log(this.middleList);
      console.log(this.highList);
    });
    console.log("아파트 정보 ~!!!!", this.aptInfo);
  },
};
</script>

<style scoped>
/* main side bar css */
.side-bar {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: white;
  width: 550px;
  height: 86%;
  overflow-x: hidden;
  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
  z-index: 999;
}

.side-bar .apt-img {
  position: absolute;
  width: 550px;
  height: 400px;
}

.close-side-bar {
  position: relative;
  top: 30px;
  left: 30px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
}

.close-side-bar img {
  position: relative;
  top: 3px;
  left: 6px;
}

/* 아파트 정보 */

.side-bar .detail-info {
  position: relative;
  top: 366px;
  display: flex;
  flex-direction: column;
}

.side-bar .detail-info .info-title {
  border-top: 20px solid rgba(10, 17, 81, 0.1);
  padding: 20px 20px 0 40px;
  font-size: 22px;
  font-weight: bold;
  color: rgba(10, 17, 81, 0.5);
}

.side-bar .detail-info .detail-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 20px 20px 40px;
  /* border-bottom: 0.3px double rgba(0, 0, 0, 0.274); */
}

.side-bar .detail-info .detail-title div {
  font-weight: 500;
  font-size: 22px;
  margin-right: 50px;
}

.side-bar .detail-info .heart {
  width: 27px;
  height: 27px;
  cursor: pointer;
}

/* side-bar apt rank css */
.side-bar .detail-info .apt-rank {
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.274);
  padding: 20px 20px 20px 40px;
}

/* .side-bar .detail-info .apt-rank .apt-rank-title {
  font-size: 18px;
  font-weight: bold;
  color: #1a73e8;
  margin-bottom: 20px;
} */

.side-bar .detail-info .apt-rank .apt-rank-list {
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
}
.side-bar .detail-info .apt-rank .apt-rank-list .apt-rank-content {
  margin-left: 90px;
  color: #666666;
  font-size: 16px;
}
.side-bar .detail-info .apt-rank .apt-rank-list > * {
  margin-right: 10px;
}

.side-bar .detail-info .apt-rank .apt-rank-list div {
  font-size: 24px;
  color: #1a73e8;
  font-weight: bold;
}

/* side-bar apt school css*/
.side-bar .detail-info .school-info {
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.274);
  padding: 20px 20px 20px 40px;
  max-height: 280px;
  overflow: auto;
}

.side-bar .detail-info .school-info .school-type {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top: 0.3px solid rgba(0, 0, 0, 0.274);
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.274);
  cursor: pointer;
}

.side-bar .detail-info .school-info .school-type div {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
}

.side-bar .detail-info .school-info .school-type div:hover {
  font-weight: bold;
}

.side-bar .detail-info .school-info .school-type .isSelected {
  border-bottom: 3px solid black;
  color: #1a73e8;
  font-weight: normal !important;
}

.side-bar .detail-info .school-info .list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 50px;
  margin: auto;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.1);
}

.side-bar .detail-info .school-info .list-item .school-distance {
  font-weight: bold;
}

.side-bar .detail-info .apt-info {
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.274);
}

.side-bar .detail-info .apt-info-table {
  padding: 10px 10px 10px 20px;
  white-space: nowrap;
}

.side-bar .detail-info .apt-info-table th {
  font-weight: 900;
  font-size: 16px;
  text-align: left;
}

.side-bar .detail-info .apt-info-table td {
  font-size: 14px;
  color: #666666;
}

.side-bar .detail-info .apt-info-table th,
.side-bar .detail-info .apt-info-table td {
  padding: 13px 20px;
}

/* 아파트 실거래 정보 */

.side-bar .detail-info .deal-table {
  padding: 20px;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.274);
  max-height: 280px;
  overflow: auto;
}

.side-bar .detail-info .deal-table table {
  margin: 10px auto 15px auto;
  border-collapse: collapse;
  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
}

.side-bar .detail-info .deal-table thead {
  background-color: rgba(217, 217, 217, 0.5);
}

.side-bar .detail-info .deal-table tbody {
  font-weight: 400;
  font-size: 14px;
}

.side-bar .detail-info .deal-table th,
.side-bar .detail-info .deal-table td {
  text-align: center;
  padding: 10px 25px;
}

/* 리뷰 */
.side-bar .review-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px 20px 25px 50px;
  border-bottom: 0.3px dotted rgba(0, 0, 0, 0.274);
}

.side-bar .review-title > div {
  margin: 0 10px;
}

.side-bar .review-title .score {
  color: rgba(0, 0, 0, 0.5);
}

.side-bar .review-title .count {
  color: #1a73e8;
}

.side-bar .review {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  padding: 25px 20px 25px 50px;
  border-bottom: 0.3px dotted rgba(0, 0, 0, 0.274);
}
</style>
