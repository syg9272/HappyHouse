<template>
  <main>
    <div class="view">
      <div class="title">공지사항</div>
      <div class="view-header">
        <div>
          <div class="view-type">공지사항</div>
          <input v-model="article.subject" class="view-title" />
        </div>
        <div>{{ article.registerTime.substring(0, 10) }}</div>
      </div>
      <div class="view-content">
        <div class="content">
          <input v-model="article.content" type="textarea" />
        </div>
        <div class="view-file">
          <div>첨부파일 ({{ article.fileInfos.legth }})</div>
          <div class="file-list">
            <a href="#"><input value="파일" type="file" /></a>
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
// import { mapState } from "vuex";

// const memberStore = "memberStore";

export default {
  name: "ServiceModify",
  data() {
    return {
      article: null,
    };
  },
  methods: {
    moveService() {
      this.$router.push({ name: "service" });
    },
  },
  created() {
    http
      .put("/notice/modify", {
        Notice: {
          articleNo: this.$route.params.articleno,
          pgno: this.$route.params.pgno,
          key: this.$route.params.key,
          word: this.$route.params.word,
        },
      })
      .then((data) => {
        this.article = data.data.notice;
        console.log(this.article);
      });
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

.view .view-content {
  padding: 50px 400px;
  display: flex;
  flex-direction: column;
}

.view .view-content .content {
  line-height: 40px;
  font-size: 16px;
  min-height: 330px;
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
