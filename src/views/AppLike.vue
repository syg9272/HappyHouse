<template>
  <main>
    <div class="like">
      <div class="title">관심목록</div>
      <div class="like-list">
        <div v-for="item in likeList" :key="item" :likelist="likeList" class="like-item">
          <img src="@/assets/img/apt1.png" alt="apt" />
          <div>
            <div class="apt-title">
              <div class="apt-name">{{ item.apartmentName }}</div>
              <img
                @click="deleteLike(item.aptCode)"
                src="@/assets/img/like-select.png"
                alt="like"
              />
            </div>
            <div>
              <img class="apt-like-icon" src="@/assets/img/apt-icon.png" alt="apt-info" />
              <div>
                {{ item.sidoName + " " + item.gugunName + "" + item.dong + " " + item.jibun }}
              </div>
            </div>
            <div>
              <a @click.prevent="moveApt()"
                ><img class="apt-like-icon" src="@/assets/img/plus.png" alt="move-apt" />아파트
                보러가기</a
              >
            </div>
          </div>
        </div>
        <!-- <div class="like-item">
          <img src="@/assets/img/apt2.jpg" alt="apt" />
          <div>
            <div class="apt-title">
              <div class="apt-name">000 아파트</div>
              <img @click="removeLike()" src="@/assets/img/like-select.png" alt="like" />
            </div>
            <div>
              <img class="apt-like-icon" src="@/assets/img/apt-icon.png" alt="apt-info" />
              <div>부산광역시 중구 영주동 92</div>
            </div>
            <div>
              <a @click.prevent="moveApt()"
                ><img class="apt-like-icon" src="@/assets/img/plus.png" alt="move-apt" />아파트
                보러가기</a
              >
            </div>
          </div>
        </div>
        <div class="like-item">
          <img src="@/assets/img/apt3.jpg" alt="apt" />
          <div>
            <div class="apt-title">
              <div class="apt-name">000 아파트</div>
              <img @click="removeLike()" src="@/assets/img/like-select.png" alt="like" />
            </div>
            <div>
              <img class="apt-like-icon" src="@/assets/img/apt-icon.png" alt="apt-info" />
              <div>부산광역시 중구 영주동 92</div>
            </div>
            <div>
              <a @click.prevent="moveApt()"
                ><img class="apt-like-icon" src="@/assets/img/plus.png" alt="move-apt" />아파트
                보러가기</a
              >
            </div>
          </div>
        </div>
        <div class="like-item">
          <img src="@/assets/img/apt4.jpg" alt="apt" />
          <div>
            <div class="apt-title">
              <div class="apt-name">000 아파트</div>
              <img @click="removeLike()" src="@/assets/img/like-select.png" alt="like" />
            </div>
            <div>
              <img class="apt-like-icon" src="@/assets/img/apt-icon.png" alt="apt-info" />
              <div>부산광역시 중구 영주동 92</div>
            </div>
            <div>
              <a @click.prevent="moveApt()"
                ><img class="apt-like-icon" src="@/assets/img/plus.png" alt="move-apt" />아파트
                보러가기</a
              >
            </div>
          </div>
        </div>
        <div class="like-item">
          <img src="@/assets/img/apt5.jpg" alt="apt" />
          <div>
            <div class="apt-title">
              <div class="apt-name">000 아파트</div>
              <img @click="removeLike()" src="@/assets/img/like-select.png" alt="like" />
            </div>
            <div>
              <img class="apt-like-icon" src="@/assets/img/apt-icon.png" alt="apt-info" />
              <div>부산광역시 중구 영주동 92</div>
            </div>
            <div>
              <a @click.prevent="moveApt()"
                ><img class="apt-like-icon" src="@/assets/img/plus.png" alt="move-apt" />아파트
                보러가기</a
              >
            </div>
          </div>
        </div>
        <div class="like-item">
          <img src="@/assets/img/apt6.jpg" alt="apt" />
          <div>
            <div class="apt-title">
              <div class="apt-name">000 아파트</div>
              <img @click="removeLike()" src="@/assets/img/like-select.png" alt="like" />
            </div>
            <div>
              <img class="apt-like-icon" src="@/assets/img/apt-icon.png" alt="apt-info" />
              <div>부산광역시 중구 영주동 92</div>
            </div>
            <div>
              <a @click.prevent="moveApt()"
                ><img class="apt-like-icon" src="@/assets/img/plus.png" alt="move-apt" />아파트
                보러가기</a
              >
            </div>
          </div>
        </div>
        <div class="like-item">
          <img src="@/assets/img/apt7.jpg" alt="apt" />
          <div>
            <div class="apt-title">
              <div class="apt-name">000 아파트</div>
              <img @click="removeLike()" src="@/assets/img/like-select.png" alt="like" />
            </div>
            <div>
              <img class="apt-like-icon" src="@/assets/img/apt-icon.png" alt="apt-info" />
              <div>부산광역시 중구 영주동 92</div>
            </div>
            <div>
              <a @click.prevent="moveApt()"
                ><img class="apt-like-icon" src="@/assets/img/plus.png" alt="move-apt" />아파트
                보러가기</a
              >
            </div>
          </div>
        </div>
        <div class="like-item">
          <img src="@/assets/img/apt8.jpg" alt="apt" />
          <div>
            <div class="apt-title">
              <div class="apt-name">000 아파트</div>
              <img @click="removeLike()" src="@/assets/img/like-select.png" alt="like" />
            </div>
            <div>
              <img class="apt-like-icon" src="@/assets/img/apt-icon.png" alt="apt-info" />
              <div>부산광역시 중구 영주동 92</div>
            </div>
            <div>
              <a @click.prevent="moveApt()"
                ><img class="apt-like-icon" src="@/assets/img/plus.png" alt="move-apt" />아파트
                보러가기</a
              >
            </div>
          </div>
        </div>
        <div class="like-item">
          <img src="@/assets/img/apt9.jpg" alt="apt" />
          <div>
            <div class="apt-title">
              <div class="apt-name">000 아파트</div>
              <img @click="removeLike()" src="@/assets/img/like-select.png" alt="like" />
            </div>
            <div>
              <img class="apt-like-icon" src="@/assets/img/apt-icon.png" alt="apt-info" />
              <div>부산광역시 중구 영주동 92</div>
            </div>
            <div>
              <a @click.prevent="moveApt()"
                ><img class="apt-like-icon" src="@/assets/img/plus.png" alt="move-apt" />아파트
                보러가기</a
              >
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </main>
</template>

<script>
import http from "@/api/http";
import { mapState } from "vuex";

const memberStore = "memberStore";

export default {
  name: "AppLike",
  data() {
    return {
      likeList: [],
    };
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    deleteLike(data) {
      if (confirm("관심목록에서 제외하시겠습니까?")) {
        http
          .delete("/apt/deleteLikeApt", {
            params: {
              id: this.userInfo.id,
              aptCode: data,
            },
          })
          .then((data) => {
            console.log(data);
          });
      }
      this.$router.go(0);
    },
  },
  created() {
    http
      .get("/apt/seleteLikeApt", {
        params: {
          id: this.userInfo.id,
        },
      })
      .then((data) => {
        this.likeList = data.data;
        console.log(this.likeList);
      });
  },
};
</script>

<style>
.like {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.like .like-list {
  padding: 70px 260px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

.like .like-list .like-item {
  margin: 20px;
  width: 400px;
  height: 300px;
  border-radius: 16px;
  border: 1px solid #edeef2;
  display: flex;
  flex-direction: column;
}

.like .like-list .like-item:hover {
  transform: scale(110%);
}

.like .like-list .like-item > div {
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 30px;
  font-size: 12px;
}

.like .like-list .like-item > div > .apt-title {
  justify-content: space-between;
}

.like .like-list .like-item > div > .apt-title div {
  font-weight: bold;
  color: #0a1151;
  font-size: 14px;
}

.like .like-list .like-item > div .apt-like-icon {
  margin-right: 10px;
}

.like .like-list .like-item .apt-title a {
  opacity: 100%;
}

.like .like-list .like-item .apt-title img {
  cursor: pointer;
}

.like .like-list .like-item > div a {
  opacity: 50%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
}

.like .like-list .like-item > div a:hover {
  opacity: 100%;
  color: #1a73e8;
}

.like .like-list .like-item > img {
  width: 400px;
  height: 190px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
}

.like .like-list .like-item > div > div {
  display: flex;
  flex-direction: row;
}

.like .like-list .like-item > div img {
  width: 20px;
  height: 20px;
}
</style>
