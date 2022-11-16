<template>
  <div>
    <swiper-comp
      :slides-per-view="3"
      :space-between="30"
      :loop="false"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="n in 5" :key="n" class="test" :class="{ test_2: true }">
        <div>{{ 29 + n }}</div>
        <img
          :src="getImageUrl(29 + n)"
          width="600"
          height="400"
          class="img-fluid w-100 mx-auto"
          blank="true"
        />
      </swiper-slide>
    </swiper-comp>

    <swiper-comp
      :slides-per-view="3"
      :space-between="30"
      loop
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="n in 5" :key="n" class="test" :class="{ test_2: true }">
        <div>{{ 34 + n }}</div>
        <img
          :src="getImageUrl(34 + n)"
          width="600"
          height="400"
          class="img-fluid w-100 mx-auto"
          blank="true"
        />
      </swiper-slide>
    </swiper-comp>

    <h2>pagination - navigation</h2>
    <swiper-comp
      :slides-per-view="3"
      :space-between="30"
      :loop="false"
      :pagination="true"
      :navigation="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="n in 5" :key="n" class="test" :class="{ test_2: true }">
        <div>{{ 34 + n }}</div>
        <img
          :src="getImageUrl(34 + n)"
          width="600"
          height="400"
          class="img-fluid w-100 mx-auto"
          blank="true"
        />
      </swiper-slide>
    </swiper-comp>
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper";

import { SwiperCore, SwiperComp, SwiperSlide } from "swiper-vue2";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

export default {
  components: {
    SwiperComp,
    SwiperSlide,
  },
  methods: {
    getImageUrl(imageId) {
      return `https://picsum.photos/600/400/?image=${imageId}`;
    },
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>
