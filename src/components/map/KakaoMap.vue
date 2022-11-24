<template>
  <main>
    <!-- <div class="black-bg">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지내용임</p>
      </div>
    </div> -->
    <div class="map" id="map">
      <input
        @input="findLocation"
        @keyup.enter="searchDongCodeAll()"
        :value="dong"
        class="location-search"
        type="text"
        placeholder="지역 검색"
      />
      <img @click="searchDongCodeAll()" class="search-img" :src="searchImg" alt="search" />
      <div id="map-search" class="map-search">
        <div v-if="!aptList.length">검색 결과가 없습니다.</div>
        <div
          class="search-item"
          v-for="(apt, index) in aptList"
          :key="apt.dong"
          :apt="apt"
          :index="index"
          @click="searchDongCode(index)"
        >
          <img src="@/assets/img/mark.png" alt="mark" />
          <label
            ><b>{{ apt.dong }}</b></label
          >
          <label class="location-name">{{ apt.sidoName + apt.gugunName + apt.dong }}</label>
        </div>
      </div>
    </div>
    <map-side v-if="this.isSide"></map-side>
  </main>
</template>
<script>
// import axios from "axios";
import http from "@/api/http";
import MapSide from "@/components/map/MapSide.vue";
import { mapState } from "vuex";
// import Constant from "../Constant";

const mapStore = "mapStore";
// import $ from "jquery";
export default {
  name: "KakaoMap",
  components: {
    MapSide,
  },
  data() {
    return {
      map: null,
      markerPositions: [],
      bbang: [],
      markers: [],
      level: 2,
      lng: "127.028461",
      lat: "37.530734",
      dong: null,
      searchImg: require("../../assets/img/search.png"),

      aptList: [],
    };
  },
  created() {
    if (this.$route.params.aptCode != null) {
      console.log("!!!!!!!! 사이드바 열어");
      console.log(this.$route.params);
      var info = {
        aptCode: this.$route.params.aptCode,
        dongCode: this.$route.params.dongCode,
        apartmentName: this.$route.params.apartmentName,
      };
      console.log("infoo!!!!!!!!!", info);
      this.$store.commit("mapStore/SET_APT", info);
      this.$store.commit("mapStore/SET_IS_SIDE");
      // this.$store.commit("mapStore/SET_SCHOOL_LIST", );
    }
    // this.underFive();
    if (this.$route.params.dong != null) {
      console.log("!!!! 아파트 목록만 불러");
      this.dong = this.$route.params.dong;
      http
        .get("/apt/dongList", {
          params: {
            dong: this.dong,
          },
        })
        .then((data) => {
          console.log(data.data);
          this.aptList = data.data;
          console.log(this.aptList);
          http.post("/apt/selectAptList", this.aptList[0]).then((data) => {
            console.log(data.data);
            this.lng = data.data[0].lng;
            this.lat = data.data[0].lat;
            // this.aptList = data.data;
            console.log(this.aptList);
          });
        });
    }
  },
  computed: {
    ...mapState(mapStore, ["apt"]),
    ...mapState(mapStore, ["isSide"]),
    // ...mapState(mapStore, ["schoolList"]),
  },
  watch: {
    level(level) {
      if (level >= 5) {
        this.zoomMap();
        return;
      } else {
        this.loadMap();
        return;
      }
    },
    // eslint-disable-next-line
    lng(lng) {
      if (this.level >= 5) {
        this.zoomMap();
        return;
      } else {
        this.loadMap();
        return;
      }
    },
    // eslint-disable-next-line
    lat(lat) {
      if (this.level >= 5) {
        this.zoomMap();
        return;
      } else {
        this.loadMap();
        return;
      }
    },
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  methods: {
    updateParent() {
      this.$store.commit("mapStore/SET_IS_SIDE");
    },
    searchMap() {
      this.$store.commit("mapStore/SET_IS_SIDE");
    },
    findLocation(e) {
      this.dong = e.target.value;
      http
        .get("/apt/dongList", {
          params: {
            dong: this.dong,
          },
        })
        .then((data) => {
          this.aptList = data.data;
        });
    },
    searchDongCode(index) {
      http.post("/apt/selectAptList", this.aptList[index]).then((data) => {
        this.lng = data.data[0].lng;
        this.lat = data.data[0].lat;
      });
    },
    searchDongCodeAll() {
      http.post("/apt/selectAptList", this.aptList[0]).then((data) => {
        this.lng = data.data[0].lng;
        this.lat = data.data[0].lat;
      });
    },
    loadScript() {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=9cfef1fdc8f75accdbe0ced8e6fa2741&autoload=false&libraries=clusterer";
      script.onload = () => window.kakao.maps.load(this.loadMap);
      document.head.appendChild(script);
    },
    async loadMap() {
      await http
        .post("/apt/selectLowLevelAptList", {
          lng: this.lng,
          lat: this.lat,
        })
        .then((res) => {
          this.markerPositions = res.data;
        });
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(this.lat, this.lng),
        level: this.level,
      };
      this.map = new window.kakao.maps.Map(container, options);

      // console.log(this.markerPositions);
      window.kakao.maps.event.addListener(this.map, "zoom_changed", () => {
        let getLevel = this.map.getLevel();
        this.level = getLevel;
      });

      window.kakao.maps.event.addListener(this.map, "center_changed", () => {
        let latlng = this.map.getCenter();
        if (latlng.getLat() < this.lat - 0.01) this.lat = latlng.getLat();
        if (latlng.getLat() > Number(this.lat) + 0.01) this.lat = latlng.getLat();
        if (latlng.getLng() < this.lng - 0.01) this.lng = latlng.getLng();
        if (latlng.getLng() > Number(this.lng) + 0.01) this.lng = latlng.getLng();
      });
      // 마커 이미지의 이미지 주소입니다
      var imageSrc = require("@/assets/img/apt.png");
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new window.kakao.maps.Size(30, 40);
      console.log(this.markerPositions);
      // 마커 이미지를 생성합니다
      var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
      for (let i = 0; i < this.markerPositions.length; i++) {
        let lat = this.markerPositions[i].lat;
        let lng = this.markerPositions[i].lng;
        let marker = new window.kakao.maps.Marker({
          map: this.map,
          position: new window.kakao.maps.LatLng(lat, lng),
          title: this.markerPositions[i].apartmentName,
          image: markerImage,
          clickable: true,
        });
        window.kakao.maps.event.addListener(marker, "click", () => {
          this.$store.commit("mapStore/SET_APT", this.markerPositions[i]);
          this.$store.commit("mapStore/SET_IS_SIDE");
        });
        const maxAmount = Number(this.markerPositions[i].maxAmount.substr(0, 3));
        const priceAbove40 = "#191D45";
        const priceAbove20 = "#4C549C";
        const pridceUnder10 = "#969BCF";
        let price = `<div className="label" style="padding:8px; border-radius: 10px; color:white; background-color: ${
          maxAmount > 40 ? priceAbove40 : maxAmount > 20 ? priceAbove20 : pridceUnder10
        };">
                    <div className="price-minimum" style="font-weight:bold font-size:10px;">
                     ${this.markerPositions[i].maxAmount}
                    </div>
                    <div className="price-maximum" style="font-size:10px;">
                      ~ ${this.markerPositions[i].minAmount}
                    </div>
                  </div>`;
        let title = `<div className="title">
                    <div className="center" style="padding:5px; border-radius: 5px; background-color: rgba(0,0,0,0.5); color:white; font-size:10px;">
                    ${this.markerPositions[i].apartmentName}
                   </div>
                  </div>`;
        let customOverlayPrice = new window.kakao.maps.CustomOverlay({
          content: price,
          map: this.map,
          position: marker.getPosition(),
          yAnchor: 1.8,
          xAnchor: 0.5,
        });
        let customOverlayTitle = new window.kakao.maps.CustomOverlay({
          content: title,
          map: this.map,
          position: marker.getPosition(),
          yAnchor: -0.1,
          xAnchor: 0.5,
        });

        customOverlayTitle.setMap(this.map);
        customOverlayPrice.setMap(this.map);
      }
      await http.get("/apt/selectBbang").then((res) => {
        this.bbang = res.data;
      });
      console.log(this.bbang);
      var img = require("@/assets/img/bbang.png");
      // 마커 이미지의 이미지 크기 입니다
      var imgSize = new window.kakao.maps.Size(40, 40);
      var markerImg = new window.kakao.maps.MarkerImage(img, imgSize);

      // var iwContent =
      //     '<iframe width="560" height="315" src="https://www.youtube.com/embed/sgQyMzX43y0?start=47" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      // var iwContent = '<div style="padding:5px;">Hello World!</div>',
      //   iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      // // 인포윈도우를 생성합니다
      // var infowindow = new window.kakao.maps.InfoWindow({
      //   content: iwContent,
      //   removable: iwRemoveable,
      // });

      // 마커에 클릭이벤트를 등록합니다

      for (let i = 0; i < this.bbang.length; i++) {
        let lat = this.bbang[i].lat;
        let lng = this.bbang[i].lng;
        let mark = new window.kakao.maps.Marker({
          map: this.map,
          position: new window.kakao.maps.LatLng(lat, lng),
          image: markerImg,
          clickable: true,
        });
        // mark.setMap(this.map);
        var iwContent =
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/sgQyMzX43y0?start=47&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        // 인포윈도우를 생성합니다
        var infowindow = new window.kakao.maps.InfoWindow({
          position: new window.kakao.maps.LatLng(lat, lng),
          content: iwContent,
          removable: iwRemoveable,
        });
        // infowindow.open(this.map, mark);
        window.kakao.maps.event.addListener(mark, "click", () => {
          console.log("!!!!!!!!!!!!!");
          console.log(infowindow);
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.open(this.map, mark);
        });
      }
      this.map.relayout();
    },
    async zoomMap() {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(this.lat, this.lng),
        level: this.level,
      };
      this.map = new window.kakao.maps.Map(container, options);
      window.kakao.maps.event.addListener(this.map, "zoom_changed", () => {
        let getLevel = this.map.getLevel();
        this.level = getLevel;
      });

      if (this.level > 10) {
        await http.get("/apt/selectSidoList").then((res) => {
          this.markerPositions = res.data;
        });
        for (let i = 0; i < this.markerPositions.length; i++) {
          let lat = this.markerPositions[i].lat;
          let lng = this.markerPositions[i].lng;
          let marker = new window.kakao.maps.Marker({
            map: this.map,
            position: new window.kakao.maps.LatLng(lat, lng),
          });
          let price = `<div className="label" style="padding:10px; background-color: #4C549C; border-radius:20px; text-align:center;">
                                        <div className="column-title" style="font-size: 15px; color:white; text-align:center;">
                                             ${this.markerPositions[i].sidoName}
                                        </div>
                                      </div>`;
          let customOverlayPrice = new window.kakao.maps.CustomOverlay({
            content: price,
            map: this.map,
            position: marker.getPosition(),
            yAnchor: 1,
          });
          customOverlayPrice.setMap(this.map);
        }
        this.map.relayout();
      } else if (this.level >= 7) {
        await http
          .post("/apt/selectGugunList", {
            lng: this.lng,
            lat: this.lat,
          })
          .then((res) => {
            this.markerPositions = res.data;
          });
        for (let i = 0; i < this.markerPositions.length; i++) {
          let lat = this.markerPositions[i].lat;
          let lng = this.markerPositions[i].lng;
          let marker = new window.kakao.maps.Marker({
            map: this.map,
            position: new window.kakao.maps.LatLng(lat, lng),
          });
          let price = `<div className="label" style="padding:10px; background-color: #4C549C; border-radius:20px; text-align:center;">
                                        <div className="column-title" style="font-size: 15px; color:white; text-align:center;">
                                             ${this.markerPositions[i].sidoName}
                                        </div>
                                      </div>`;
          let customOverlayPrice = new window.kakao.maps.CustomOverlay({
            content: price,
            map: this.map,
            position: marker.getPosition(),
            yAnchor: 1,
          });
          customOverlayPrice.setMap(this.map);
        }
        this.map.relayout();
      } else if (this.level >= 5) {
        await http
          .post("/apt/selectDongList", {
            lng: this.lng,
            lat: this.lat,
          })
          .then((res) => {
            this.markerPositions = res.data;
          });
        for (let i = 0; i < this.markerPositions.length; i++) {
          let lat = this.markerPositions[i].lat;
          let lng = this.markerPositions[i].lng;
          let marker = new window.kakao.maps.Marker({
            map: this.map,
            position: new window.kakao.maps.LatLng(lat, lng),
          });
          let price = `<div className="label" style="padding:10px; background-color: #4C549C; border-radius:20px; text-align:center;">
                                        <div className="column-title" style="font-size: 15px; color:white; text-align:center;">
                                             ${this.markerPositions[i].dong}
                                        </div>
                                      </div>`;
          let customOverlayPrice = new window.kakao.maps.CustomOverlay({
            content: price,
            map: this.map,
            position: marker.getPosition(),
            yAnchor: 1,
          });
          customOverlayPrice.setMap(this.map);
        }
        this.map.relayout();
      } else if (this.level < 5) {
        await http
          .post("/apt/selectLowLevelAptList", {
            lng: this.lng,
            lat: this.lng,
          })
          .then((res) => {
            this.markerPositions = res.data;
          });

        window.kakao.maps.event.addListener(this.map, "zoom_changed", () => {
          let getLevel = this.map.getLevel();
          this.level = getLevel;
        });
        // 마커 이미지의 이미지 주소입니다
        var imageSrc = require("@/assets/img/apt.png");
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new window.kakao.maps.Size(30, 40);

        // 마커 이미지를 생성합니다
        var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
        for (let i = 0; i < this.markerPositions.length; i++) {
          let lat = this.markerPositions[i].lat;
          let lng = this.markerPositions[i].lng;
          let marker = new window.kakao.maps.Marker({
            map: this.map,
            position: new window.kakao.maps.LatLng(lat, lng),
            title: this.markerPositions[i].apartmentName,
            image: markerImage,
          });
          const maxAmount = Number(this.markerPositions[i].maxAmount.substr(0, 3));
          const priceAbove40 = "#191D45";
          const priceAbove20 = "#4C549C";
          const pridceUnder10 = "#969BCF";
          let price = `<div className="label" style="padding:8px; border-radius: 10px; color:white; background-color: ${
            maxAmount > 40 ? priceAbove40 : maxAmount > 20 ? priceAbove20 : pridceUnder10
          };">
                    <div className="price-minimum" style="font-weight:bold font-size:10px;">
                     ${this.markerPositions[i].maxAmount}
                    </div>
                    <div className="price-maximum" style="font-size:10px;">
                      ~ ${this.markerPositions[i].minAmount}
                    </div>
                  </div>`;
          let title = `<div className="title">
                    <div className="center" style="padding:5px; border-radius: 5px; background-color: rgba(0,0,0,0.5); color:white; font-size:10px;">
                    ${this.markerPositions[i].apartmentName}
                   </div>
                  </div>`;
          let customOverlayPrice = new window.kakao.maps.CustomOverlay({
            content: price,
            map: this.map,
            position: marker.getPosition(),
            yAnchor: 1.8,
            xAnchor: 0.5,
          });
          let customOverlayTitle = new window.kakao.maps.CustomOverlay({
            content: title,
            map: this.map,
            position: marker.getPosition(),
            yAnchor: -0.1,
            xAnchor: 0.5,
          });

          customOverlayTitle.setMap(this.map);
          customOverlayPrice.setMap(this.map);
        }
        this.map.relayout();
      }
    },
  },
};
</script>

<style scoped>
main .map {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 86%;
}

main .map .search-img {
  position: relative;
  cursor: pointer;
  top: 24px;
  right: 14px;
  z-index: 999;
}

main .map .location-search {
  cursor: pointer;
  padding: 0 30px;
  width: 457px;
  height: 50px;
  position: relative;
  font-size: 16px;
  top: 20px;
  left: 34px;
  border-radius: 10px;
  border: 0.3px solid rgba(0, 0, 0, 0.5);
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 999;
}

main .map .location-search:focus {
  outline: none;
  border-radius: 10px 10px 0 0;
  z-index: 999;
}

main .map .location-search:focus ~ .map-search {
  visibility: visible;
  z-index: 999;
}

main .map .map-search:hover {
  visibility: visible;
  z-index: 999;
}

main .map .map-search {
  cursor: pointer;
  overflow: auto;
  max-height: 202px;
  width: 457px;
  position: relative;
  visibility: hidden;
  top: 20px;
  left: 34px;
  padding: 15px 20px;
  background-color: white;
  border: 0.3px solid rgba(0, 0, 0, 0.5);
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 10px 10px;
  z-index: 999;
}

main .map .map-search > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 999;
  cursor: pointer;
}

main .map .map-search > div > * {
  margin: 5px 10px;
  z-index: 999;
  cursor: pointer;
}

main .map .map-search > div > .location-name {
  color: #a1a1a1;
  font-size: small;
  z-index: 999;
  cursor: pointer;
}

main .map img {
  width: 22px;
  height: 22px;
  cursor: pointer;
}

/* 모달창 */
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
