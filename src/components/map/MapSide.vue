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
    </div>
  </div>
</template>

<script>
import http from "@/api/http";
import { mapState } from "vuex";

import MapChart from "@/components/map/MapChart.vue";
import MapLoadView from "@/components/map/MapLoadView.vue";

const memberStore = "memberStore";
const mapStore = "mapStore";

export default {
  name: "MapSide",
  components: {
    MapChart,
    MapLoadView,
  },
  data() {
    return {
      aptInfo: null,
      deal: null,
      isLike: false,
      chartInfo: null,
    };
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
    ...mapState(mapStore, ["apt"]),
    ...mapState(mapStore, ["isSide"]),
    ...mapState(mapStore, ["year"]),
    ...mapState(mapStore, ["avgAmount"]),
  },
  methods: {
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
      console.log(this.deal);
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

.side-bar .detail-info .detail-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 20px 20px 40px;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.274);
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

.side-bar .detail-info .apt-info {
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.274);
  overflow: auto;
  /* max-height: 230px; */
}

.side-bar .detail-info .apt-info-table {
  padding: 10px 10px 10px 20px;
  white-space: nowrap;
  /* max-height: 230px; */
  /* overflow: auto; */
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
