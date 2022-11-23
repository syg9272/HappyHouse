<template>
  <swiper class="swiper-container" :options="swiperOption">
    <!-- <swiper-wrapper class="swiper-wrapper"> -->
    <swiper-slide class="swiper-slide">
      <a href="javascript:void(0)">버전 업데이트와 시스템 개선 및 점검 안내 </a>
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <a href="javascript:void(0)">[이벤트] 2022 이벤트</a>
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <a href="javascript:void(0)">애플리케이션 버전 업데이트 안내</a>
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <a href="javascript:void(0)">시스템 개선 및 점검 안내 </a>
    </swiper-slide>
    <!-- </swiper-wrapper> -->
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "TheNotice",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        heigth: 50,
        autoplay: true,
        loop: true,
      },
    };
  },
};
</script>

<style scoped>
.swiper-container {
  height: 50px;
  flex-grow: 1;
}
.swiper-container .swiper-slide {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-container .swiper-slide a {
  color: #0a1151;
}

.swiper-container .swiper-slide a:hover {
  text-decoration: underline;
}
</style>
