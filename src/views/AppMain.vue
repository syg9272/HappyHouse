<template>
  <main>
    <div class="main">
      <div class="main-top">
        <div class="title">Find Best Place For Living</div>
        <input class="location-search" type="text" placeholder="지역 검색" />
        <div>
          <button class="btn-show-more">Show more</button>
          <!-- <button class="btn-hot-item">Hot item</button> -->
        </div>
      </div>

      <div class="recent-deal">
        <div class="title">
          <div class="line back-to-position to-left delay-0"></div>
          <div class="content-title back-to-position to-left delay-1">recent deal</div>
        </div>
        <div class="recent-deal-list scroll-spy">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img :src="aptImg" alt="recent-deal-apt" />
                <div>
                  <div class="apt-name">000 아파트</div>
                  <div>대전광역시 대종로505번길 59</div>
                  <a href="javascript:void(0)" class="move-apt">자세히 보기</a>
                </div>
              </div>
              <div class="swiper-slide">
                <img :src="aptImg" alt="recent-deal-apt" />
                <div>
                  <div class="apt-name">000 아파트</div>
                  <div>대전광역시 대종로505번길 59</div>
                  <a href="javascript:void(0)" class="move-apt">자세히 보기</a>
                </div>
              </div>
              <div class="swiper-slide">
                <img :src="aptImg" alt="recent-deal-apt" />
                <div>
                  <div class="apt-name">000 아파트</div>
                  <div>대전광역시 대종로505번길 59</div>
                  <a href="javascript:void(0)" class="move-apt">자세히 보기</a>
                </div>
              </div>
              <!-- <div class="swiper-slide">
                <img :src="aptImg" alt="recent-deal-apt" />
                <div>
                  <div class="apt-name">000 아파트</div>
                  <div>대전광역시 대종로505번길 59</div>
                  <a href="javascript:void(0)" class="move-apt">자세히 보기</a>
                </div>
              </div>
              <div class="swiper-slide">
                <img :src="aptImg" alt="recent-deal-apt" />
                <div>
                  <div class="apt-name">000 아파트</div>
                  <div>대전광역시 대종로505번길 59</div>
                  <a href="javascript:void(0)" class="move-apt">자세히 보기</a>
                </div>
              </div> -->
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="hot-item scroll-spy">
        <div class="title">
          <div class="content-title back-to-position to-right delay-0">Hot item</div>
          <div class="line back-to-position to-right delay-1"></div>
        </div>
        <div class="recent-deal-list">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div style="background-image: URL(@/assets/img/apt6.jpg)" class="swiper-slide">
                <div>
                  <div class="apt-name">000 아파트</div>
                  <div>
                    <div class="material-icons">house</div>
                    <div>부산광역시 중구 영주동 92</div>
                  </div>
                </div>
              </div>
              <div style="background-image: URL(@/assets/img/apt13.jpg)" class="swiper-slide">
                <div>
                  <div class="apt-name">000 아파트</div>
                  <div>
                    <div class="material-icons">house</div>
                    <div>부산광역시 중구 영주동 92</div>
                  </div>
                </div>
              </div>
              <div style="background-image: URL(@/assets/img/apt8.jpg)" class="swiper-slide">
                <div>
                  <div class="apt-name">000 아파트</div>
                  <div>
                    <div class="material-icons">house</div>
                    <div>부산광역시 중구 영주동 92</div>
                  </div>
                </div>
              </div>
              <div style="background-image: URL(@/assets/img/apt10.jpg)" class="swiper-slide">
                <div>
                  <div class="apt-name">000 아파트</div>
                  <div>
                    <div class="material-icons">house</div>
                    <div>부산광역시 중구 영주동 92</div>
                  </div>
                </div>
              </div>
              <div style="background-image: URL(@/assets/img/apt1.png)" class="swiper-slide">
                <div>
                  <div class="apt-name">000 아파트</div>
                  <div>
                    <div class="material-icons">house</div>
                    <div>부산광역시 중구 영주동 92</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-page">
            <div class="swiper-prev">
              <img src="@/assets/img/swiper-prev.png" alt="prev" />
            </div>
            <div class="swiper-next">
              <img src="@/assets/img/swiper-next.png" alt="next" />
            </div>
          </div>
        </div>
      </div>

      <div class="notice-bar">
        <h2>NOTICE</h2>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:void(0)">버전 업데이트와 시스템 개선 및 점검 안내 </a>
            </div>
            <!-- <div class="swiper-slide">
              <a href="javascript:void(0)">[이벤트] 2022 이벤트</a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:void(0)">애플리케이션 버전 업데이트 안내</a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:void(0)">시스템 개선 및 점검 안내 </a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// import Swiper from "@/components/common/TheSwiper.vue";

// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";

// export default {
// 	name: "slider",
// 	components:	{
//        Swiper,
//        SwiperSlide
// 	},
// }

export default {
  name: "AppMain",
  data() {
    return {
      aptImg: require("../assets/img/apt2.jpg"),
    };
  },
  methods: {
    moveMap() {
      this.$router.push({ name: "map" });
    },
  },
};

// new Swiper(선택자, 옵션)

// new Swiper(".notice-bar .swiper-container", {
//   direction: "vertical",
//   autoplay: true,
//   loop: true,
// });

// new Swiper(".recent-deal .recent-deal-list .swiper-container", {
//   slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
//   spaceBetween: 10, //슬라이드 사이 여백
//   centeredSlides: true, // 1번 슬라이드가 가운데 보이기
//   loop: true,
//   autoplay: {
//     delay: 3000, // 5초
//   },
//   pagination: {
//     el: ".recent-deal .recent-deal-list .swiper-pagination", //페이지 번호 요소 선택자
//     clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
//   },
//   navigation: {
//     // 슬라이드 이전/다음 버튼 사용 여부
//     prevEl: ".swiper-slide-prev", // 이전 버튼 선택자
//     nextEl: ".swiper-slide-next", // 다음 버튼 선택자
//   },
// });

// new Swiper(".hot-item .recent-deal-list .swiper-container", {
//   slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
//   spaceBetween: 10, //슬라이드 사이 여백
//   centeredSlides: true, // 1번 슬라이드가 가운데 보이기
//   loop: true,
//   autoplay: {
//     delay: 4000, // 5초
//   },
//   pagination: {
//     el: ".hot-item .recent-deal-list .swiper-pagination", //페이지 번호 요소 선택자
//     clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
//   },
//   navigation: {
//     // 슬라이드 이전/다음 버튼 사용 여부
//     prevEl: ".swiper-prev", // 이전 버튼 선택자
//     nextEl: ".swiper-next", // 다음 버튼 선택자
//   },
// });

//스크롤매직
// const spyEL1 = document.getElementsByClassName(".hot-item");
// var tween = TWEENmAX.to(".back-to-position", 0.8, {
//   fadeInRight: 1,
// });
// new ScrollMagic.Scene({
//   triggerElement: spyEL1, // 보여짐 여부를 감시할 요소를 지정
//   // triggerHook: 0.8,
//   duration: "100%",
// })
//   // .setClassToggle(spyEL1, "show")
//   .setTween(tween)
//   .addTo(new ScrollMagic.Controller())
//   .addIndicators();
</script>

<style>
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
  animation: fadeInRight 1s;
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
}

.main .main-top > div .btn-hot-item {
  background-color: white;
  color: #0a1151;
}

.main .location-search {
  width: 500px;
  height: 50px;
  padding: 15px 30px;
  margin: auto;
  background-image: url("@/assets/img/search.png");
  background-position: 460px;
  background-repeat: no-repeat;
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
  /* height: 100px; */
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
  /* margin-right: 20px; */
}
.notice-bar .swiper-container {
  height: 50px;
  flex-grow: 1;
}
.notice-bar .swiper-container .swiper-slide {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.notice-bar .swiper-container .swiper-slide a {
  color: #0a1151;
}

.notice-bar .swiper-container .swiper-slide a:hover {
  text-decoration: underline;
}

.main .recent-deal-list {
  height: 430px;
  position: relative;
  transition: height 0.4s;
  overflow: hidden;
}
.main .recent-deal-list.hide {
  height: 0;
}
.main .recent-deal-list .swiper-container {
  width: calc(400px * 3 + 120px);
  height: 360px;
  /* 화면 정중앙에 위치시키는 방법 */
  position: absolute;
  padding-top: 30px;
  top: 30px;
  left: 50%;
  margin-left: calc((400px * 3 + 120px) / -2);
}
.main .recent-deal-list .swiper-slide {
  width: 400px;
  height: 300px;
  opacity: 1;
  transition: opacity 1s;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #edeef2;
  margin: 0 20px;
}

.main .recent-deal-list .swiper-slide:hover {
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transform: scale(105%);
  z-index: 1;
}

.main .hot-item .recent-deal-list {
  height: 500px;
}

.main .hot-item .swiper-container {
  padding-top: 0;
  width: calc(300px * 3 + 20px);
  height: 460px;
  margin-left: calc((300px * 3 + 20px) / -2);
  z-index: 999;
}

.main .hot-item .swiper-slide {
  width: 280px !important;
  height: 400px;
  background-repeat: no-repeat;
  object-fit: cover;
  margin: 20px;
}

.main .hot-item .swiper-slide .apt-name {
  font-size: 16px;
}

.main .hot-item .swiper-slide > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70px;
  font-size: 12px;
  color: white;
}

.main .hot-item .swiper-slide > div .material-icons {
  margin-right: 10px;
}

.main .hot-item .swiper-slide > div > div {
  color: white;
}

.main .hot-item .swiper-slide .main .recent-deal-list .swiper-slide .apt-name {
  color: #0a1151;
  font-weight: bold;
}

.main .recent-deal-list .swiper-slide > img {
  width: 400px;
  height: 190px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.main .recent-deal-list .swiper-slide > div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 110px;
  padding: 10px 30px;
}

.main .recent-deal-list .swiper-slide > div > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
}

.main .recent-deal-list .swiper-slide > div > div > a {
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: 0.5;
}

.main .recent-deal-list .swiper-slide > div > div > a:hover {
  color: #1a73e8;
  opacity: 1;
}

.main .recent-deal-list .swiper-slide > div img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.main .recent-deal-list .swiper-slide-active {
  /* 가운데 있는 이미지:active */
  opacity: 1;
  transition: all 0.1s linear;
}

.main .recent-deal-list .swiper-slide-active:hover {
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transform: scale(105%);
  z-index: 1;
}

.main .recent-deal-list .swiper-slide .btn {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.main .recent-deal-list .swiper-pagination {
  height: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.main .recent-deal-list .swiper-pagination .swiper-pagination-bullet {
  background-color: gray;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  outline: none;
}
.main .recent-deal-list .swiper-pagination .swiper-pagination-bullet:last-child {
  margin-right: 0;
}
.main .recent-deal-list .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #0a1151;
}
.main .recent-deal-list .swiper-prev,
.main .recent-deal-list .swiper-next {
  width: 42px;
  height: 42px;
  /* border: 2px solid #333; */
  border-radius: 50%;
  position: absolute;
  top: 45%;
  z-index: 1;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
}
.main .recent-deal-list .swiper-prev {
  left: 50%;
  margin-left: -530px;
}
.main .recent-deal-list .swiper-next {
  right: 50%;
  margin-right: -530px;
}
.main .recent-deal-list .swiper-prev:hover,
.main .recent-deal-list .swiper-next:hover {
  background-color: #0a1151;
  color: #fff;
}
</style>
