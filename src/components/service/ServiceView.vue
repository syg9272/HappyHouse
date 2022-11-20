<template>
  <main>
    <div class="view">
      <div class="title">공지사항</div>
      <div class="view-header">
        <div>
          <div class="view-type">공지사항</div>
          <div class="view-title">[공지] {{ article.subject }}</div>
        </div>
        <div>
          <div class="view-hit">조회수 : {{ article.hit }}</div>
          <div>{{ article.registerTime.substring(0, 10) }}</div>
        </div>
      </div>
      <div v-if="isAdmin" class="view-edit">
        <a @click="moveModify()">수정</a>
        <a @click="moveDelete()">삭제</a>
      </div>
      <div class="view-content">
        <div class="content">
          {{ article.content }}
        </div>
        <div class="view-file">
          <div>첨부파일 ({{ article.fileInfos.legth }})</div>
          <div class="file-list">
            <a href="#"><img src="@/assets/img/file.png" alt="file" /></a>
            <a href="#">10월 21일 1.6 버전 업데이트 별첨.pdf</a>
          </div>
        </div>
        <button @click="moveService()" class="move-list">목록으로</button>
      </div>
    </div>
  </main>
</template>

<script>
import http from "@/api/http";
import { mapState } from "vuex";

const memberStore = "memberStore";

export default {
  name: "ServiceView",
  data() {
    return {
      article: null,
      isAdmin: false,
      pgno: null,
      key: null,
      word: null,
    };
  },
  methods: {
    moveService() {
      this.$router.push({
        name: "service",
        // params: {
        //   pgno: this.$route.params.pgno,
        // },
      });
    },
    moveModify() {
      this.$router.push({
        name: "servicemodify",
        params: {
          articleno: this.article.articleNo,
          pgno: this.pgno,
          key: this.key,
          word: this.word,
        },
      });
    },
    moveDelete() {
      // console.log(this.article.articleno);
      if (confirm("정말로 삭제하시겠습니까?")) {
        http
          .delete("/notice/delete", {
            params: {
              articleno: this.article.articleNo,
            },
          })
          .then((data) => {
            console.log(data);
            this.$router.push({ name: "service" });
          });
        // this.$router.go(-1);
      }
    },
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  created() {
    // 관리자 여부 파악
    console.log("view!!!");
    if (this.userInfo != null && this.userInfo.id == "admin") this.isAdmin = true;
    else this.isAdmin = false;
    http
      .get("/notice/view", {
        params: {
          articleno: this.$route.params.articleno,
          pgno: this.$route.params.pgno,
          key: this.$route.params.key,
          word: this.$route.params.word,
        },
      })
      .then((data) => {
        this.article = data.data.notice;
        this.pgno = data.data.pgno;
        this.key = data.data.key;
        this.word = data.data.word;
        console.log(this.article);
      });
    // console.log("",)
  },
};
</script>

<style>
.view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.view .view-header {
  margin-top: 20px;
  padding: 15px 400px;
  background-color: rgba(10, 17, 81, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.view .view-header > div {
  display: flex;
  flex-direction: row;
}

.view .view-header .view-type {
  margin-right: 100px;
  font-weight: bold;
  color: #0a1151;
  font-size: 16px;
}

.view .view-header .view-title {
  color: black;
  font-size: 16px;
}

.view .view-header .view-hit {
  margin-right: 50px;
}

.view .view-edit {
  padding: 40px 400px 0 72%;
  display: flex;
  flex-direction: row;
}

.view .view-edit a {
  font-size: 16px;
  font-weight: normal;
  margin-left: 30px;
  width: 40px;
  color: #8e8e8e;
  cursor: pointer;
}

.view .view-edit a:hover {
  color: #0a1151;
  font-weight: bold;
}

.view .view-content {
  padding: 50px 400px;
  display: flex;
  flex-direction: column;
}

.view .view-content .content {
  line-height: 40px;
  font-size: 16px;
  min-height: 330px;
  padding: 0 50px;
}

.view .view-content .view-file {
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid rgba(0, 0, 0, 0.25);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.25);
  margin: 50px 0;
  color: rgba(0, 0, 0, 0.5);
}

.view .view-content .view-file > div {
  padding: 20px;
}

.view .view-content .view-file .file-list {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.view .view-content .view-file .file-list a {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
}

.view .view-content .view-file .file-list a:hover {
  text-decoration: underline;
}

.view .view-content .view-file .file-list img {
  width: 20px;
  height: 20px;
  margin-right: 20px;
  opacity: 50%;
}

.view .view-content .move-list {
  width: 122px;
  height: 50px;
  border: 0px;
  border-radius: 5px;
  background-color: #0a1151;
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin: auto;
}
</style>
