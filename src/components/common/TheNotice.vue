<template>
  <swiper class="swiper-container" :options="swiperOption">
    <!-- <swiper-wrapper class="swiper-wrapper"> -->
    <swiper-slide
      v-for="(item, index) in noticeList"
      :key="index"
      :noticeList="noticeList"
      class="swiper-slide"
    >
      <a @click.prevent="moveNotice(item.articleNo)">{{ item.subject }}</a>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "TheNotice",
  props: {
    notice: Object,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  created() {
    this.noticeList = this.notice;
  },
  data() {
    return {
      noticeList: null,
      swiperOption: {
        direction: "vertical",
        heigth: 50,
        autoplay: true,
        loop: true,
      },
    };
  },
  methods: {
    moveNotice(data) {
      this.$router.push({
        name: "serviceview",
        params: {
          articleno: data,
          pgno: 1,
          key: "",
          word: "",
          move: false,
        },
      });
    },
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
  cursor: pointer;
}

.swiper-container .swiper-slide a:hover {
  text-decoration: underline;
}
</style>
