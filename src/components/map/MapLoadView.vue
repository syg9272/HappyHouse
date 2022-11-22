<template>
  <div id="roadview" class="apt-img"></div>
</template>

<script>
export default {
  name: "MapLoadView",
  props: {
    aptInfo: Object,
  },
  methods: {
    async loadView() {
      var roadviewContainer = document.getElementById("roadview"); //로드뷰를 표시할 div
      console.log(this.aptInfo.lat, this.aptInfo.lng);
      console.log(roadviewContainer);
      var roadview = new window.kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
      var roadviewClient = new window.kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체
      var position = new window.kakao.maps.LatLng(this.aptInfo.lat, this.aptInfo.lng);

      // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
      roadviewClient.getNearestPanoId(position, 150, function (panoId) {
        roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
      });
    },
    loadScript() {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=9cfef1fdc8f75accdbe0ced8e6fa2741&autoload=false&libraries=clusterer";
      script.onload = () => window.kakao.maps.load(this.loadMap);
      document.head.appendChild(script);
    },
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadView();
    } else {
      this.loadScript();
    }
  },
};
</script>
