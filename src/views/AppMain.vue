<template>
  <main>
    <div class="main">
      <div class="main-top">
        <div class="title">Find Best Place For Living</div>
        <div class="main-search">
          <input
            :value="dong"
            @input="changeDong"
            @keyup.enter="getMap()"
            class="location-search"
            type="text"
            placeholder="지역 검색"
          />
          <img @click="getMap()" src="@/assets/img/search.png" alt="mark" />
        </div>
        <div>
          <button @click="moveMap()" class="btn-show-more">Show more</button>
        </div>
      </div>

      <div class="hot-item">
        <div class="title">
          <div class="content-title">Hot Area</div>
          <div class="line"></div>
        </div>
        <div class="hot-list">
          <div @click="viewMap(0)" class="hot-area-item area-a">
            <div>
              <div class="apt apt-name">{{ dongRank[0].dong }}</div>
              <div class="apt">
                <div class="material-icons">house</div>
                <div>
                  {{ dongRank[0].sidoName + " " + dongRank[0].gugunName + " " + dongRank[0].dong }}
                </div>
              </div>
              <div class="move-map">
                <div class="move-map-link">View Map</div>
              </div>
            </div>
          </div>
          <div @click="viewMap(1)" class="hot-area-item area-b">
            <div>
              <div class="apt apt-name">{{ dongRank[1].dong }}</div>
              <div class="apt">
                <div class="material-icons">house</div>
                <div>
                  {{ dongRank[1].sidoName + " " + dongRank[1].gugunName + " " + dongRank[1].dong }}
                </div>
              </div>
              <div class="move-map">
                <div class="move-map-link">View Map</div>
              </div>
            </div>
          </div>
          <div @click="viewMap(2)" class="hot-area-item area-c">
            <div>
              <div class="apt apt-name">{{ dongRank[2].dong }}</div>
              <div class="apt">
                <div class="material-icons">house</div>
                <div>
                  {{ dongRank[2].sidoName + " " + dongRank[2].gugunName + " " + dongRank[2].dong }}
                </div>
              </div>
              <div class="move-map">
                <div class="move-map-link">View Map</div>
              </div>
            </div>
          </div>
          <div @click="viewMap(3)" class="hot-area-item area-d">
            <div>
              <div class="apt apt-name">{{ dongRank[3].dong }}</div>
              <div class="apt">
                <div class="material-icons">house</div>
                <div>
                  {{ dongRank[3].sidoName + " " + dongRank[3].gugunName + " " + dongRank[3].dong }}
                </div>
              </div>
              <div class="move-map">
                <div class="move-map-link">View Map</div>
              </div>
            </div>
          </div>
          <div @click="viewMap(4)" class="hot-area-item area-e">
            <div>
              <div class="apt apt-name">{{ dongRank[4].dong }}</div>
              <div class="apt">
                <div class="material-icons">house</div>
                <div>
                  {{ dongRank[4].sidoName + " " + dongRank[4].gugunName + " " + dongRank[4].dong }}
                </div>
              </div>
              <div class="move-map">
                <div class="move-map-link">View Map</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="recent-deal">
        <div class="title">
          <div class="line"></div>
          <div class="content-title">recent deal</div>
        </div>
        <div class="recent-deal-list">
          <the-swiper :aptRank="aptRank"></the-swiper>
          <!-- <div v-for="(item, index) in aptRank" :key="index" :aptRank="aptRank" class="deal-item">
            <img :src="aptImg[index]" alt="recent-deal-apt" />
            <div>
              <div class="apt-name">{{ item.apartmentName + " 아파트" }}</div>
              <div>
                <img class="apt-like-icon" src="@/assets/img/apt-icon.png" alt="apt-info" />
                <div>
                  {{ item.sidoName + " " + item.gugunName + " " + item.dong + " " + item.jibun }}
                </div>
              </div>
              <div>
                <a
                  @click.prevent="
                    moveApt(item.aptCode, item.dongCode, item.dong, item.apartmentName)
                  "
                  ><img class="apt-like-icon" src="@/assets/img/plus.png" alt="move-apt" />아파트
                  보러가기</a
                >
              </div>
            </div>
          </div> -->
        </div>
      </div>

      <div class="notice-bar">
        <h2>NOTICE</h2>
        <the-notice></the-notice>
      </div>
    </div>
  </main>
</template>

<script>
import http from "@/api/http";
import TheSwiper from "@/components/common/TheSwiper.vue";
import TheNotice from "@/components/common/TheNotice.vue";

export default {
  name: "AppMain",
  components: {
    TheSwiper,
    TheNotice,
  },
  data() {
    return {
      aptImg: [
        require("@/assets/img/apt1.png"),
        require("@/assets/img/apt2.jpg"),
        require("@/assets/img/apt3.jpg"),
        require("@/assets/img/apt4.jpg"),
        require("@/assets/img/apt5.jpg"),
        require("@/assets/img/apt6.jpg"),
        require("@/assets/img/apt7.jpg"),
        require("@/assets/img/apt8.jpg"),
        require("@/assets/img/apt9.jpg"),
        require("@/assets/img/apt10.jpg"),
        require("@/assets/img/apt11.jpg"),
        require("@/assets/img/apt12.jpg"),
        require("@/assets/img/apt13.jpg"),
      ],
      dong: null,
      dongRank: null,
      aptRank: null,
    };
  },
  methods: {
    moveMap() {
      this.$router.push({ name: "map" });
    },
    viewMap(index) {
      this.$router.push({
        name: "map",
        params: {
          dong: this.dongRank[index].dong,
        },
      });
    },
    changeDong(e) {
      this.dong = e.target.value;
    },
    getMap() {
      this.$router.push({
        name: "map",
        params: {
          dong: this.dong,
        },
      });
    },
  },
  created() {
    http.get("/apt/selectDongRankList").then((data) => {
      console.log("동 랭킹", data.data);
      this.dongRank = data.data;
    });

    http.get("/apt/selectAptRankList").then((data) => {
      console.log("아파트 랭킹", data.data);
      this.aptRank = data.data;
    });
  },
};
</script>

<style lang="scss">
/* main page css */
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.main .main-top {
  width: 100%;
  height: 600px;
  margin: 0 0 50px 0;
  background-image: url(@/assets/img/main.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 200px 0;
}

.main .main-top .main-search {
  margin: 0;
}

.main .main-top > div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 60px 0;
}

.main .main-top .title {
  font-size: 50px;
  font-weight: 600;
  color: white;
  animation: fadeInLeft 1s;
}

.main .main-top img {
  position: relative;
  width: 22px;
  height: 22px;
  top: 13px;
  right: 39%;
  cursor: pointer;
}

.main .main-top > div button {
  width: 180px;
  height: 60px;
  margin: 0 16px;
  border-radius: 10px;
  border: 0px;
  font-size: 16px;
  font-weight: bold;
}

.main .main-top > div .btn-show-more {
  background-color: #0a1151;
  color: white;
  cursor: pointer;
}

.main .main-top > div .btn-hot-item {
  background-color: white;
  color: #0a1151;
}

.main .location-search {
  position: relative;
  width: 500px;
  height: 50px;
  padding: 15px 30px;
  margin: auto;
  outline: none;
  border-radius: 25px;
  border: 0.3px solid rgba(0, 0, 0, 0.5);
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 1);
  font-size: 18px;
  letter-spacing: 1.5px;
}

.main > div {
  margin: 80px;
}

.main .title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
}

.main .recent-deal .title {
  margin-right: 350px;
  animation: fadeInLeft 1s;
}

.main .hot-item .title {
  margin-left: 350px;
  animation: fadeInRight 1s;
}

.main .title .content-title {
  color: #0a1151;
  font-size: 40px;
}

.main .title .line {
  width: 250px;
  border-bottom: 3px solid #0a1151;
  margin: 0 40px;
}

/* notice */
.notice-bar {
  margin: 50px 0 !important;
  width: 100%;
  padding: 20px 0;
  background-color: #d1d6e7;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.notice-bar h2 {
  color: #0a1151;
  font-size: 20px;
  font-weight: bold;
}

.main .recent-deal-list,
.main .hot-list {
  transition: height 0.4s;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.main .recent-deal-list.hide {
  height: 0;
}
.main .hot-area-item,
.main .deal-item {
  width: 400px;
  height: 300px;
  opacity: 1;
  transition: opacity 1s;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #edeef2;
  margin: 0 20px;
  cursor: pointer;
}

.main .recent-deal-list .deal-item:hover {
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transform: scale(105%);
  z-index: 1;
}

.main .hot-item .hot-area-item {
  /* height: 400px; */
  background-repeat: no-repeat;
  object-fit: cover;
  margin: 10px;
}

.main .hot-item .hot-area-item:hover {
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transform: scale(105%);
  z-index: 1;
}

.main .hot-item .area-a {
  width: 400px !important;
  height: 250px;
  background-image: url(@/assets/img/hot-area-1.jpg);
  background-size: cover;
}

.main .hot-item .area-a:hover {
  background-image: url(@/assets/img/hot-area-1-hover.png);
  background-size: cover;
}

.main .hot-item .area-b {
  width: 400px !important;
  height: 250px;
  background-image: url(@/assets/img/hot-area-2.jpg);
  background-size: cover;
}

.main .hot-item .area-b:hover {
  background-image: url(@/assets/img/hot-area-2-hover.png);
  background-size: cover;
}

.main .hot-item .area-c {
  width: 400px !important;
  height: 250px;
  background-image: url(@/assets/img/hot-area-3.jpg);
  background-size: cover;
}

.main .hot-item .area-c:hover {
  background-image: url(@/assets/img/hot-area-3-hover.png);
  background-size: cover;
}

.main .hot-item .area-d {
  width: 840px !important;
  height: 250px;
  background-image: url(@/assets/img/hot-area-4.png);
  background-size: cover;
}

.main .hot-item .area-d:hover {
  background-image: url(@/assets/img/hot-area-4-hover.png);
  background-size: cover;
}

.main .hot-item .area-e {
  width: 400px !important;
  height: 250px;
  background-image: url(@/assets/img/hot-area-5.jpg);
  background-size: cover;
}

.main .hot-item .area-e:hover {
  background-image: url(@/assets/img/hot-area-5-hover.png);
  background-size: cover;
}

.main .hot-item .hot-area-item:hover .apt {
  visibility: hidden;
}

.main .hot-item .hot-area-item:hover .move-map-link {
  visibility: visible;
  z-index: 999;
}

.main .hot-item .hot-area-item .apt-name {
  font-size: 16px;
  font-weight: bold;
}

.main .hot-item .hot-area-item > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* height: 70px; */
  font-size: 12px;
  color: white;
  padding: 20px;
  z-index: 99;
}

.main .hot-item .hot-area-item > div .material-icons {
  margin-right: 10px;
}

.main .hot-item .hot-area-item > div > div {
  color: white;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  margin: 5px;
}

.main .hot-item .move-map {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
}

.main .hot-item .move-map-link {
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: 2px solid white;
  margin: 10px auto;
  visibility: hidden;
}

// .main .recent-deal-list .deal-list {
//   transform: translate3d;
// }

.main .recent-deal-list .deal-item > img {
  width: 400px;
  height: 190px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.main .recent-deal-list .deal-item .apt-name {
  font-weight: bold;
  color: #0a1151;
  font-size: 14px;
}

.main .recent-deal-list .deal-item > div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 110px;
  padding: 10px 30px;
}

.main .recent-deal-list .deal-item > div > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
}

.main .recent-deal-list .deal-item > div > div > a {
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: 0.5;
}

.main .recent-deal-list .deal-item > div > div > a:hover {
  color: #1a73e8;
  opacity: 1;
}

.main .recent-deal-list .deal-item > div img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.swiper-page {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 0;
}

.swiper-page div {
  margin: 0 20px;
}
</style>
