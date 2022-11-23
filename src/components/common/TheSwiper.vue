<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="deal-item">
        <img :src="aptImg[0]" alt="recent-deal-apt" />
        <div>
          <div class="apt-name">{{ aptList[0].apartmentName + " 아파트" }}</div>
          <div>
            <img class="apt-like-icon" src="@/assets/img/apt-icon.png" alt="apt-info" />
            <div>
              {{
                aptList[0].sidoName +
                " " +
                aptList[0].gugunName +
                " " +
                aptList[0].dong +
                " " +
                aptList[0].jibun
              }}
            </div>
          </div>
          <div>
            <a
              @click.prevent="
                moveApt(
                  aptList[0].aptCode,
                  aptList[0].dongCode,
                  aptList[0].dong,
                  aptList[0].apartmentName
                )
              "
              ><img class="apt-like-icon" src="@/assets/img/plus.png" alt="move-apt" />아파트
              보러가기</a
            >
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      ><div class="deal-item">
        <img :src="aptImg[1]" alt="recent-deal-apt" />
        <div>
          <div class="apt-name">{{ aptList[1].apartmentName + " 아파트" }}</div>
          <div>
            <img class="apt-like-icon" src="@/assets/img/apt-icon.png" alt="apt-info" />
            <div>
              {{
                aptList[1].sidoName +
                " " +
                aptList[1].gugunName +
                " " +
                aptList[1].dong +
                " " +
                aptList[1].jibun
              }}
            </div>
          </div>
          <div>
            <a
              @click.prevent="
                moveApt(
                  aptList[1].aptCode,
                  aptList[1].dongCode,
                  aptList[1].dong,
                  aptList[1].apartmentName
                )
              "
              ><img class="apt-like-icon" src="@/assets/img/plus.png" alt="move-apt" />아파트
              보러가기</a
            >
          </div>
        </div>
      </div></swiper-slide
    >
    <swiper-slide
      ><div class="deal-item">
        <img :src="aptImg[2]" alt="recent-deal-apt" />
        <div>
          <div class="apt-name">{{ aptList[2].apartmentName + " 아파트" }}</div>
          <div>
            <img class="apt-like-icon" src="@/assets/img/apt-icon.png" alt="apt-info" />
            <div>
              {{
                aptList[2].sidoName +
                " " +
                aptList[2].gugunName +
                " " +
                aptList[2].dong +
                " " +
                aptList[2].jibun
              }}
            </div>
          </div>
          <div>
            <a
              @click.prevent="
                moveApt(
                  aptList[2].aptCode,
                  aptList[2].dongCode,
                  aptList[2].dong,
                  aptList[2].apartmentName
                )
              "
              ><img class="apt-like-icon" src="@/assets/img/plus.png" alt="move-apt" />아파트
              보러가기</a
            >
          </div>
        </div>
      </div></swiper-slide
    >
    <swiper-slide
      ><div class="deal-item">
        <img :src="aptImg[3]" alt="recent-deal-apt" />
        <div>
          <div class="apt-name">{{ aptList[3].apartmentName + " 아파트" }}</div>
          <div>
            <img class="apt-like-icon" src="@/assets/img/apt-icon.png" alt="apt-info" />
            <div>
              {{
                aptList[3].sidoName +
                " " +
                aptList[3].gugunName +
                " " +
                aptList[3].dong +
                " " +
                aptList[3].jibun
              }}
            </div>
          </div>
          <div>
            <a
              @click.prevent="
                moveApt(
                  aptList[3].aptCode,
                  aptList[3].dongCode,
                  aptList[3].dong,
                  aptList[3].apartmentName
                )
              "
              ><img class="apt-like-icon" src="@/assets/img/plus.png" alt="move-apt" />아파트
              보러가기</a
            >
          </div>
        </div>
      </div></swiper-slide
    >
    <swiper-slide
      ><div class="deal-item">
        <img :src="aptImg[4]" alt="recent-deal-apt" />
        <div>
          <div class="apt-name">{{ aptList[4].apartmentName + " 아파트" }}</div>
          <div>
            <img class="apt-like-icon" src="@/assets/img/apt-icon.png" alt="apt-info" />
            <div>
              {{
                aptList[4].sidoName +
                " " +
                aptList[4].gugunName +
                " " +
                aptList[4].dong +
                " " +
                aptList[4].jibun
              }}
            </div>
          </div>
          <div>
            <a
              @click.prevent="
                moveApt(
                  aptList[4].aptCode,
                  aptList[4].dongCode,
                  aptList[4].dong,
                  aptList[4].apartmentName
                )
              "
              ><img class="apt-like-icon" src="@/assets/img/plus.png" alt="move-apt" />아파트
              보러가기</a
            >
          </div>
        </div>
      </div></swiper-slide
    >
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "TheSwiper",
  title: "Loop mode / Infinite loop",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    aptRank: Object,
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
      aptList: null,

      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3000, // 5초
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  created() {
    this.aptList = this.aptRank;
    console.log("슬라이드 슬라이드 ", this.aptList);
  },
};
</script>

<style lang="scss">
.swiper {
  height: 300px;
  width: 80%;
  margin: 80px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    z-index: 99;
  }
}

// .main {
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   overflow: auto;
// }
// .main .main-top {
//   width: 100%;
//   height: 600px;
//   margin: 0 0 50px 0;
//   background-image: url(@/assets/img/main.png);
//   background-repeat: no-repeat;
//   background-size: cover;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 200px 0;
// }

// .main .main-top .main-search {
//   margin: 0;
// }

// .main .main-top > div {
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   margin: 60px 0;
// }

// .main .main-top .title {
//   font-size: 50px;
//   font-weight: 600;
//   color: white;
//   animation: fadeInLeft 1s;
// }

// .main .main-top img {
//   position: relative;
//   width: 22px;
//   height: 22px;
//   top: 13px;
//   right: 39%;
//   cursor: pointer;
// }

// .main .main-top > div button {
//   width: 180px;
//   height: 60px;
//   margin: 0 16px;
//   border-radius: 10px;
//   border: 0px;
//   font-size: 16px;
//   font-weight: bold;
// }

// .main .main-top > div .btn-show-more {
//   background-color: #0a1151;
//   color: white;
//   cursor: pointer;
// }

// .main .main-top > div .btn-hot-item {
//   background-color: white;
//   color: #0a1151;
// }

// .main .location-search {
//   position: relative;
//   width: 500px;
//   height: 50px;
//   padding: 15px 30px;
//   margin: auto;
//   outline: none;
//   border-radius: 25px;
//   border: 0.3px solid rgba(0, 0, 0, 0.5);
//   box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 1);
//   font-size: 18px;
//   letter-spacing: 1.5px;
// }

// .main > div {
//   margin: 80px;
//   min-height: 300px;
// }

// .main .title {
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   margin: 80px 0;
// }

// @keyframes fadeInLeft {
//   0% {
//     opacity: 0;
//     transform: translate3d(-100%, 0, 0);
//   }
//   to {
//     opacity: 1;
//     transform: translateZ(0);
//   }
// }

// @keyframes fadeInRight {
//   0% {
//     opacity: 0;
//     transform: translate3d(100%, 0, 0);
//   }
//   to {
//     opacity: 1;
//     transform: translateZ(0);
//   }
// }

// .main .recent-deal .title {
//   margin-right: 350px;
//   animation: fadeInLeft 1s;
// }

// .hot-item .title {
//   margin-left: 350px;
//   animation: fadeInRight 1s;
// }

// .title .content-title {
//   color: #0a1151;
//   font-size: 40px;
// }

// .title .line {
//   width: 250px;
//   border-bottom: 3px solid #0a1151;
//   margin: 0 40px;
// }

// .recent-deal-list,
// .hot-list {
//   transition: height 0.4s;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;
// }
// .main .recent-deal-list.hide {
//   height: 0;
// }
.deal-item {
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

.deal-item:hover {
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transform: scale(105%);
  z-index: 1;
}

// .main .hot-item .hot-area-item {
//   /* height: 400px; */
//   background-repeat: no-repeat;
//   object-fit: cover;
//   margin: 10px;
// }

// .main .hot-item .hot-area-item:hover {
//   box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
//   transform: scale(105%);
//   z-index: 1;
// }

// .main .hot-item .area-a {
//   width: 400px !important;
//   height: 250px;
//   background-image: url(@/assets/img/hot-area-1.jpg);
//   background-size: cover;
// }

// .main .hot-item .area-a:hover {
//   background-image: url(@/assets/img/hot-area-1-hover.png);
//   background-size: cover;
// }

// .main .hot-item .area-b {
//   width: 400px !important;
//   height: 250px;
//   background-image: url(@/assets/img/hot-area-2.jpg);
//   background-size: cover;
// }

// .main .hot-item .area-b:hover {
//   background-image: url(@/assets/img/hot-area-2-hover.png);
//   background-size: cover;
// }

// .main .hot-item .area-c {
//   width: 400px !important;
//   height: 250px;
//   background-image: url(@/assets/img/hot-area-3.jpg);
//   background-size: cover;
// }

// .main .hot-item .area-c:hover {
//   background-image: url(@/assets/img/hot-area-3-hover.png);
//   background-size: cover;
// }

// .main .hot-item .area-d {
//   width: 840px !important;
//   height: 250px;
//   background-image: url(@/assets/img/hot-area-4.png);
//   background-size: cover;
// }

// .main .hot-item .area-d:hover {
//   background-image: url(@/assets/img/hot-area-4-hover.png);
//   background-size: cover;
// }

// .main .hot-item .area-e {
//   width: 400px !important;
//   height: 250px;
//   background-image: url(@/assets/img/hot-area-5.jpg);
//   background-size: cover;
// }

// .main .hot-item .area-e:hover {
//   background-image: url(@/assets/img/hot-area-5-hover.png);
//   background-size: cover;
// }

// .main .hot-item .hot-area-item:hover .apt {
//   visibility: hidden;
// }

// .main .hot-item .hot-area-item:hover .move-map-link {
//   visibility: visible;
//   z-index: 999;
// }

// .main .hot-item .hot-area-item .apt-name {
//   font-size: 16px;
//   font-weight: bold;
// }

// .main .hot-item .hot-area-item > div {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   /* height: 70px; */
//   font-size: 12px;
//   color: white;
//   padding: 20px;
//   z-index: 99;
// }

// .main .hot-item .hot-area-item > div .material-icons {
//   margin-right: 10px;
// }

// .main .hot-item .hot-area-item > div > div {
//   color: white;
//   font-size: 14px;
//   display: flex;
//   flex-direction: row;
//   margin: 5px;
// }

// .main .hot-item .move-map {
//   display: flex;
//   flex-direction: column;
//   margin: 20px auto;
// }

// .main .hot-item .move-map-link {
//   width: 100px;
//   height: 50px;
//   text-align: center;
//   line-height: 50px;
//   border: 2px solid white;
//   margin: 10px auto;
//   visibility: hidden;
// }

// .main .recent-deal-list .deal-list {
//   transform: translate3d;
// }

.deal-item > img {
  width: 400px;
  height: 190px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.deal-item .apt-name {
  font-weight: bold;
  color: #0a1151;
  font-size: 14px;
}

.deal-item > div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 110px;
  padding: 10px 30px;
}

.deal-item > div > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
}

.deal-item > div > div > a {
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: 0.5;
}

.deal-item > div > div > a:hover {
  color: #1a73e8;
  opacity: 1;
}

.deal-item > div img {
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
