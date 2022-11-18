<template>
  <main>
    <div class="notice">
      <div class="title">고객센터</div>
      <div class="notice-nav">
        <div class="notice-menu">
          <router-link :to="{ name: 'servicenotice' }" class="menu service-notice-list"
            >공지사항</router-link
          >
          <router-link :to="{ name: 'serviceqna' }" class="menu service-qna-list">FQA</router-link>
          <router-link :to="{ name: 'serviceguide' }" class="menu service-guide-list"
            >이용안내</router-link
          >
        </div>
        <div class="notice-search">
          <button @click="selectBtn()" class="select-button">
            {{ key }}
            <img :src="toggleImg" alt="toggle" />
          </button>
          <ul v-if="isSelected" class="select-option">
            <li>
              <button @click="changeKey">선택안함</button>
            </li>
            <li>
              <button @click="changeKey">제목</button>
            </li>
            <li>
              <button @click="changeKey">작성자</button>
            </li>
          </ul>
          <input v-model="word" type="text" />
          <a href="#">
            <img @click="searchList()" src="@/assets/img/search.png" alt="search" />
          </a>
        </div>
      </div>
      <div class="notice-area">
        <div class="notice-write">
          <button @click="writeNotice()" class="write-btn" v-if="isAdmin">글 작성</button>
        </div>
        <div class="notice-list">
          <div class="no-articles" v-if="!articles.length">등록된 공지사항이 없습니다.</div>
          <div
            class="notice-item"
            v-for="article in articles"
            :key="article.articleNo"
            :article="article"
            @click="moveView(article.articleNo)"
          >
            <div>
              <div class="notice-articleNo">{{ article.articleNo }}</div>
              <div class="notice-type">공지</div>
              <div>[공지] {{ article.subject }}</div>
            </div>
            <div>
              <a href="#">
                <img
                  v-if="article.fileInfos"
                  class="file-img"
                  src="@/assets/img/file.png"
                  alt="file"
                />
              </a>
              <div>{{ article.registerTime.substring(0, 10) }}</div>
            </div>
          </div>
        </div>
        <div class="pagenavigation">
          <div class="page">
            <a @click.prevent="changePgno" class="page-link" data-pg="1"
              ><img data-pg="1" src="@/assets/img/first.png" alt="first"
            /></a>
            <a @click.prevent="changePgno" class="page-link" :data-pg="prevPage"
              ><img :data-pg="prevPage" src="@/assets/img/before.png" alt="prev"
            /></a>
            <div>
              <a
                v-for="i in pageNum"
                :key="i"
                :pageNum="pageNum"
                :data-pg="i"
                class="page-link"
                @click.prevent="changePgno"
                >{{ i }}</a
              >
            </div>
            <a @click.prevent="changePgno" class="page-link" :data-pg="nextPage"
              ><img :data-pg="nextPage" src="@/assets/img/next.png" alt="next"
            /></a>
            <a @click.prevent="changePgno" class="page-link" :data-pg="totalPageCount"
              ><img :data-pg="totalPageCount" src="@/assets/img/last.png" alt="last"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import http from "@/api/http";
import { mapState } from "vuex";

const memberStore = "memberStore";

export default {
  name: "ServiceNotice",
  data() {
    return {
      isAdmin: false,

      key: "선택안함",
      word: "",
      pgno: 1,
      articles: [],
      isSelected: false,
      toggleImg: null,

      pageNum: [],
      startPage: 1,
      endPage: 1,
      startRange: false,
      endRange: false,
      totalPageCount: 0,
      pageNavigation: {},
      prevPage: 1,
      nextPage: 1,
    };
  },
  methods: {
    writeNotice() {},
    moveView(data) {
      // 글 상세보기로 이동
      var newKey = "";
      if (this.key == "선택안함") newKey = "";
      else if (this.key == "제목") newKey = "subject";
      else newKey = "userid";
      this.$router.push({
        name: "serviceview",
        params: {
          articleno: data,
          pgno: this.pgno,
          key: newKey,
          word: this.word,
        },
      });
      // this.$router.go(0);
    },
    selectBtn() {
      // 검색조건 선택할 경우 가려져있던 option창 보여주기
      this.isSelected = !this.isSelected;
      if (this.isSelected) this.toggleImg = require("../../assets/img/toggle-close.png");
      else {
        this.toggleImg = require("../../assets/img/toggle-open.png");
      }
    },
    changePgno(event) {
      // 페이지 바꿀 때마다 공지사항 목록 받아오기
      this.pgno = event.target.getAttribute("data-pg");
      // 바뀐 페이지 태그 색상 변경
      var arr = document.getElementsByClassName("page-link");
      console.log("arr : ", this.pgno);
      Array.from(arr).forEach((element) => {
        if (element.getAttribute("data-pg") == this.pgno) {
          element.style.color = "#0a1151";
          console.log("element : ", element);
        } else {
          element.style.color = "#b4b4b4";
        }
      });
      http
        .get("/notice/list", {
          params: {
            key: "",
            word: "",
            pgno: event.target.getAttribute("data-pg"),
          },
        })
        .then((data) => {
          this.articles = data.data.articles;
          this.pageNum = [];
          this.startPage = data.data.startPage;
          this.startRange = data.data.startRange;
          this.endPage = data.data.endPage;
          this.endRange = data.data.endRange;
          this.totalPageCount = data.data.totalPageCount;

          if (this.startRange) this.prevPage = 1;
          else this.prevPage = this.startPage - 1;

          if (this.endRange) this.nextPage = this.endPage;
          else this.nextPage = this.endPage + 1;

          for (var i = this.startPage; i <= this.endPage; i++) {
            this.pageNum.push(i);
            // console.log(i);
          }
        });
    },
    changeKey(event) {
      // select option창 열고 닫기
      this.isSelected = !this.isSelected;
      // select창에 선택된 option 표시
      this.key = event.target.innerText;
      // 토글 이미지 변경
      this.toggleImg = require("../../assets/img/toggle-open.png");
    },
    searchList() {
      // 검색결과 공지사항 목록 받아오기
      var newKey = "";
      if (this.key == "선택안함") newKey = "";
      else if (this.key == "제목") newKey = "subject";
      else newKey = "userid";
      http
        .get("/notice/list", {
          params: {
            key: newKey,
            word: this.word,
            pgno: 1,
          },
        })
        .then((data) => {
          this.articles = data.data.articles;
          this.key = "선택안함";
          this.word = "";

          // 페이징 관련 데이터
          this.pageNum = [];
          this.startPage = data.data.startPage;
          this.startRange = data.data.startRange;
          this.endPage = data.data.endPage;
          this.endRange = data.data.endRange;
          this.totalPageCount = data.data.totalPageCount;

          if (this.startRange) this.prevPage = 1;
          else this.prevPage = this.startPage - 1;

          if (this.endRange) this.nextPage = this.endPage;
          else this.nextPage = this.endPage + 1;

          for (var i = this.startPage; i <= this.endPage; i++) {
            this.pageNum.push(i);
          }
        });
      this.toggleImg = require("../../assets/img/toggle-open.png");
    },
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  created() {
    // 관리자 여부 파악
    if (this.userInfo.id == "admin") this.isAdmin = true;
    else this.isAdmin = false;
    http
      .get("/notice/list", {
        params: {
          key: this.key == "선택안함" ? "" : this.key,
          word: this.word,
          // pgno: this.$route.params.pgno,
          pgno: this.pgno,
        },
      })
      .then((data) => {
        this.articles = data.data.articles;
        this.navigator = data.data.navigator;
        this.key = "선택안함";
        this.word = "";

        // 페이징 관련 데이터
        this.startPage = data.data.startPage;
        this.startRange = data.data.startRange;
        this.endPage = data.data.endPage;
        this.endRange = data.data.endRange;
        this.totalPageCount = data.data.totalPageCount;

        if (this.startRange) this.prevPage = 1;
        else this.prevPage = this.startPage - 1;

        if (this.endRange) this.nextPage = this.endPage;
        else this.nextPage = this.endPage + 1;

        for (var i = this.startPage; i <= this.endPage; i++) {
          this.pageNum.push(i);
        }
      });
    this.toggleImg = require("../../assets/img/toggle-open.png");
  },
  updated() {
    // 현재 페이지 태그 색상 변경
    var arr = document.getElementsByClassName("page-link");
    Array.from(arr).forEach((element) => {
      if (element.getAttribute("data-pg") == this.pgno) {
        element.style.color = "#0a1151";
      } else {
        element.style.color = "#b4b4b4";
      }
    });
  },
};
</script>

<style>
/* notice css */
.notice {
  position: absolute;
  width: 100%;
  height: 86%;
}

.notice .no-articles {
  font-size: 20px;
  margin: auto;
  text-align: center;
}

.notice .notice-nav {
  padding: 0 280px 0 430px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.notice .notice-nav .notice-menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.notice .notice-nav .notice-menu .menu {
  padding: 10px 0;
  color: rgba(0, 0, 0, 0.25);
  margin: 0 20px;
  font-size: 18px;
  font-weight: normal;
  border-bottom: 3px solid white;
}

.notice .notice-nav .notice-menu .service-notice-list {
  color: #0a1151;
  font-weight: bold;
  border-bottom: 3px solid #0a1151;
  /* z-index: 999; */
}

/* active 속성 추가 */
.notice .notice-nav .notice-menu .menu:hover {
  color: black;
  /* z-index: 999; */
}

.notice .notice-nav .notice-search {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.notice .notice-nav .notice-search .select-button,
.notice .notice-nav .notice-search input {
  padding: 5px;
  margin: 0 5px;
  border: 0.3px solid rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  outline: none;
}

.notice .notice-nav .notice-search input {
  padding: 5px 15px;
}

.notice .notice-nav .notice-search .select-button {
  width: 100px;
  background-color: white;
}

.notice .notice-nav .notice-search .select-button img {
  width: 10px;
  height: 10px;
  margin-left: 10px;
}

.notice .notice-nav .notice-search > a > img {
  margin-left: 10px;
  cursor: pointer;
}

.notice .select-option {
  /* display: none; */
  z-index: 9999;
  width: 100px;
  position: absolute;
  top: 45px;
  left: 6px;
  border: 0.3px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: white;
}

.notice .select-option button {
  background-color: white;
  width: 88px;
  text-align: left;
  padding: 5px;
  border: 0px;
  margin: 5px;
  color: rgba(0, 0, 0, 0.5);
}

.notice .select-option button:hover {
  background-color: rgba(10, 17, 81, 0.1);
  font-weight: 500;
  color: #0a1151;
}

/* notice item list */
.notice .notice-area {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(10, 17, 81, 0.1);
  height: 88%;
  width: 100%;
  padding: 50px 0 50px 0;
}

.notice .notice-write {
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: right;
  width: 55%;
  margin: auto;
}

.notice .write-btn {
  margin-left: 90%;
  width: 80px;
  height: 30px;
  border-radius: 10px;
  border: 0px;
  background-color: #0a1151;
  color: white;
  cursor: pointer;
}

.notice .notice-list {
  height: 540px;
}

.notice .notice-list .notice-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  width: 55%;
  font-size: 14px;
  cursor: pointer;
}

.notice .notice-list .notice-articleNo {
  width: 27px;
  text-align: right;
}

.notice .notice-list .notice-item:hover {
  background-color: white;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.25);
}

.notice .notice-list .notice-item > div {
  display: flex;
  flex-direction: row;
  margin: 15px 0;
}

.notice .notice-list .notice-item > div > * {
  margin: 0 30px;
}

.notice .notice-list .notice-item > div .file-img {
  width: 22px;
  height: 22px;
  margin-left: 200px;
}

.notice .notice-list .notice-item .notice-type {
  background-color: white;
  border: 0.5px solid rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 60px;
  text-align: center;
  line-height: 22px;
  font-size: 12px;
}

/* .notice .notice-list .page {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
} */

.notice .pagenavigation {
  /* position: fixed; */
  /* bottom: 100px; */
  /* left: 750px; */
  /* margin: 0 auto; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 99;
}

.notice .pagenavigation .page {
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
}

.page-link {
  margin: 0 10px;
  color: #b4b4b4;
  font-size: 16px;
  font-weight: bold;
}

.page-link:hover {
  color: #0a1151;
  cursor: pointer;
}

.active {
  color: #0a1151 !important;
}
</style>
