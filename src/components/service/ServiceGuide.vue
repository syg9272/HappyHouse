<template>
  <main>
    <div class="notice">
      <div class="title">고객센터</div>
      <div class="notice-nav">
        <div class="notice-menu">
          <router-link :to="{ name: 'servicenotice' }" class="menu service-notice-list"
            >공지사항</router-link
          >
          <router-link :to="{ name: 'serviceqna' }" class="menu service-qna-list">FQA</router-link>
          <router-link :to="{ name: 'serviceguide' }" class="menu service-now"
            >이용안내</router-link
          >
        </div>
      </div>
      <div class="guide-area">
        <div class="guide-top">
          <div class="guide-title">부동산 조회의 시작과 끝! ‘HAPPY HOUSE’</div>
          <div class="guide-content">
            `HAPPY HOUSE`는 공공 데이터 포탈의 빅데이터를 통해 전국 아파트 부동산 유형별 실거래가
            위치 정보 제공은 물론
            <br />
            검색, 관심목록 등 다양한 정보를 제공하고 있는 '종합 부동산 플랫폼'입니다.
          </div>
        </div>
        <div class="guide-list">
          <div class="guide-menu">실거래가 조회</div>
          <div>
            <img class="guide-img" :src="guideImg" alt="guide-1" />
            <div class="page-img-div">
              <div @click="moveMap()">
                <img class="page-img" :src="mapImg" alt="map" />
                <div>
                  <div class="guide-title">넓은 지도 화면에 강력한 검색 필터 기능</div>
                  <div class="guide-text">넓은 지도 화면에 강력한 검색 기능</div>
                </div>
              </div>
              <div @click="moveMap()">
                <img class="page-img" :src="mapSearch" alt="map" />
                <div>
                  <div class="guide-title">아파트 전체 매물 검색</div>
                  <div class="guide-text">
                    아파트 부동산 전체 매물을 누구나 쉽고 빠르게 검색할 수 있습니다.
                  </div>
                </div>
              </div>
              <div @click="moveMap()">
                <img class="page-img" :src="mapSideBar" alt="map" />
                <div>
                  <div class="guide-title">학군 및 아파트 매물 정보를 한눈에 확인</div>
                  <div class="guide-text">
                    매물과 함께 공공데이터 기반의 학군(초 · 중 · 고)과 주변 인프라 정보를 함께
                    확인할 수 있습니다.
                  </div>
                </div>
              </div>
              <div @click="moveMap()">
                <img class="page-img" :src="mapChart" alt="map" />
                <div>
                  <div class="guide-title">시세/실거래가, 상세한 거래정보</div>
                  <div class="guide-text">
                    아파트 매물에 대한 시세/실거래가 정보와 기타 거래 정보를 매물 기본 정보와 함께
                    제공해 드립니다.
                  </div>
                </div>
              </div>
              <!-- <img class="page-img" :src="mapImg" alt="map" /> -->
              <!-- <img class="page-img" :src="mapImg" alt="map" /> -->
            </div>
          </div>
        </div>

        <div class="guide-list">
          <div class="guide-menu">관심목록 조회</div>
          <div>
            <img class="guide-img" :src="likeImg" alt="guide-1" />
            <div class="page-img-div">
              <div @click="moveLike()">
                <img class="page-img" :src="likeList" alt="map" />
                <div>
                  <div class="guide-title">넓은 지도 화면에 강력한 검색 필터 기능</div>
                  <div class="guide-text">넓은 지도 화면에 강력한 검색 기능</div>
                </div>
              </div>
              <div @click="moveLike()">
                <img class="page-img" :src="likeMove" alt="map" />
                <div>
                  <div class="guide-title">아파트 전체 매물 검색</div>
                  <div class="guide-text">
                    아파트 부동산 전체 매물을 누구나 쉽고 빠르게 검색할 수 있습니다.
                  </div>
                </div>
              </div>
              <!-- <img class="page-img" :src="mapImg" alt="map" /> -->
              <!-- <img class="page-img" :src="mapImg" alt="map" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ServiceGuide",
  data() {
    return {
      guideImg: require("../../assets/img/guide-1.png"),
      mapImg: require("../../assets/img/map-main.png"),
      mapSearch: require("../../assets/img/map-search.png"),
      mapSideBar: require("../../assets/img/map-sideBar.png"),
      mapChart: require("../../assets/img/map-chart.png"),
      likeImg: require("../../assets/img/like-guide.png"),
      likeList: require("../../assets/img/like-list.png"),
      likeMove: require("../../assets/img/like-move.png"),
    };
  },
  methods: {
    moveMap() {
      this.$router.push({ name: "map" });
    },
    moveLike() {
      this.$router.push({ name: "like" });
    },
  },
};
</script>

<style>
/* notice css */
.notice {
  position: absolute;
  width: 100%;
  height: 86%;
}

.notice .no-articles {
  font-size: 20px;
  margin: auto;
  text-align: center;
}

.notice .notice-nav {
  padding: 0 280px 0 430px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.notice .notice-nav .notice-menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.notice .notice-nav .notice-menu .menu {
  padding: 10px 0;
  color: rgba(0, 0, 0, 0.25);
  margin: 0 20px;
  font-size: 18px;
  font-weight: normal;
  border-bottom: 3px solid white;
}

.notice .notice-nav .notice-menu .service-now {
  color: #0a1151;
  font-weight: bold;
  border-bottom: 3px solid #0a1151;
}

/* active 속성 추가 */
.notice .notice-nav .notice-menu .menu:hover {
  color: black;
}

.notice .guide-list {
  margin-bottom: 70px;
}

/* notice item list */
.notice .guide-area {
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  background-color: rgba(10, 17, 81, 0.1);
  min-height: 88%;
  width: 100%;
  padding: 50px 0 50px 0;
}

.notice .guide-area .guide-top {
  background-color: white;
  width: 55%;
  /* height: 110px; */
  border: 0.3px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 20px 40px;
  margin-bottom: 50px;
}

.notice .guide-area .guide-top .guide-title {
  font-size: 15px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
}

.notice .guide-area .guide-top .guide-content {
  font-size: 14px;
  font-weight: normal;
  color: #7a7a7a;
}

.notice .guide-area .guide-list {
  display: flex;
  flex-direction: column;
  width: 55%;
}

.notice .guide-area .guide-menu {
  font-size: 20px;
  font-weight: bold;
  color: #2475d0;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.notice .guide-area .guide-img {
  display: flex;
  flex-direction: column;
  z-index: 999;
  margin: 30px auto;
}

.notice .guide-area .page-img-div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.notice .guide-area .page-img-div > div {
  width: 45%;
  margin: 10px auto;
  cursor: pointer;
}

.notice .guide-area .page-img-div > div > div {
  padding: 20px;
}

.notice .guide-area .page-img-div > div > div .guide-title {
  color: #2475d0;
  font-size: 16px;
  font-weight: bold;
}

.notice .guide-area .page-img-div > div > div .guide-text {
  margin-top: 10px;
  font-size: 14px;
}

.notice .guide-area .page-img {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 1);
}

.notice .guide-area .page-img-div > div:hover {
  transform: scale(105%);
}
</style>
