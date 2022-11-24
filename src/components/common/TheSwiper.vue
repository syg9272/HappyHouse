<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="deal-item">
        <img :src="aptImg[2]" alt="recent-deal-apt" />
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
        <img :src="aptImg[5]" alt="recent-deal-apt" />
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
      </div>
    </swiper-slide>
    <swiper-slide
      ><div class="deal-item">
        <img :src="aptImg[3]" alt="recent-deal-apt" />
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
        <img :src="aptImg[6]" alt="recent-deal-apt" />
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
        <img :src="aptImg[9]" alt="recent-deal-apt" />
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
      </div>
    </swiper-slide>

    <!-- <div class="swiper-page">
      <div slot="button-prev" class="swiper-prev">
        <img src="@/assets/img/swiper-prev.png" alt="prev" />
      </div>
      <div slot="button-next" class="swiper-next">
        <img src="@/assets/img/swiper-next.png" alt="next" />
      </div>
    </div> -->

    <div class="swiper-pagination" slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
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
          delay: 3000, // 3초
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      },
    };
  },
  methods: {
    moveApt(aptCode, dongCode, dong, apartmentName) {
      console.log(aptCode, dongCode, dong);
      this.$router.push({
        name: "map",
        params: {
          aptCode,
          dongCode,
          dong,
          apartmentName,
        },
      });
    },
  },
  created() {
    this.aptList = this.aptRank;
    console.log("슬라이드 슬라이드 ", this.aptList);
  },
};
</script>

<style lang="scss">
.swiper {
  height: 400px;
  width: 80%;
  margin: 0 30px;

  .swiper-slide {
    opacity: 0.4;
    transition: opacity 1s;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
  }
}

.swiper .swiper-slide-active {
  /* 가운데 있는 이미지:active */
  opacity: 1;
  transition: all 1s linear;
}

.swiper .swiper-slide:hover {
  opacity: 1;
}

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
  transform: scale(105%) 2s;
  // transform: sc;
  z-index: 1;
}

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
