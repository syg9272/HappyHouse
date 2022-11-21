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
            <img class="guide-map-img" :src="mapImg" alt="map" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import http from "@/api/http";

export default {
  name: "ServiceGuide",
  data() {
    return {
      guideImg: require("../../assets/img/guide-1.png"),
      mapImg: require("../../assets/img/map.png"),
    };
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
  /* text-align: left; */
  /* justify-content: center; */
  /* align-items: center; */
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

.notice .guide-area .guide-map-img {
  width: 100%;
  object-fit: cover;
  margin: 20px 0 50px 0;
}
</style>
