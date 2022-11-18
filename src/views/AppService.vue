<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
// import http from "@/api/http";

export default {
  name: "AppService",
  data() {
    return {};
  },
  created() {},
};
</script>
