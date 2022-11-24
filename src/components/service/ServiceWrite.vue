<template>
  <main>
    <div class="view">
      <!-- <form id="view-form" enctype="multipart/form-data"> -->
      <div class="title">공지사항</div>
      <div class="view-header">
        <div>
          <div class="view-type">공지사항</div>
          <input value="subject" v-model="article.subject" class="view-title" />
        </div>
        <div>
          <!-- <div class="view-hit">조회수 : {{ article.hit }}</div> -->
          <!-- <div>{{ article.registerTime.substring(0, 10) }}</div> -->
        </div>
      </div>
      <div class="view-content">
        <div class="content">
          <textarea value="content" v-model="article.content" />
        </div>
        <div class="view-file">
          <div>첨부파일 ({{ fileInfos.length }})</div>
          <div class="file-list">
            <a href="#"
              ><input value="files" type="file" @change="changeFile" multiple="multiple"
            /></a>
            <!-- <a href="#">10월 21일 1.6 버전 업데이트 별첨.pdf</a> -->
          </div>
        </div>
        <div class="modify-btn">
          <button @click="moveList()" class="cancel-modify">취소</button>
          <button @click="registArticle()" class="move-view">등록</button>
        </div>
      </div>
      <!-- </form> -->
    </div>
  </main>
</template>

<script>
import axios from "axios";
// import http from "@/api/http";
// import { mapState } from "vuex";

// const memberStore = "memberStore";

export default {
  name: "ServiceWrite",
  data() {
    return {
      article: {
        id: "admin",
        subject: null,
        content: null,
      },
      fileInfos: [],
    };
  },
  methods: {
    moveList() {
      this.$router.push({ name: "servicenotice" });
    },
    registArticle() {
      console.log("글글글", this.article);
      const formData = new FormData();
      formData.append("id", "admin");
      formData.append("subject", this.article.subject);
      formData.append("content", this.article.content);
      console.log(this.fileInfos.length);
      // formData.append("notice", this.article);
      if (this.fileInfos.length != 0) {
        for (const file of this.fileInfos) {
          formData.append("upfile", file);
        }
        axios
          .post("http://localhost:9999/notice/register", formData, {
            headers: { "context-Type": "muLtipart/form-data" },
          })
          .then((data) => {
            console.log(data);
            this.$router.push({ name: "servicenotice" });
          });
      } else {
        axios.post("http://localhost:9999/notice/register/nofile", this.article).then((data) => {
          console.log(data);
          this.$router.push({ name: "servicenotice" });
        });
      }
      console.log("글들어갔니?", formData.get("id"));
      console.log("글들어갔니?", formData.get("subject"));
      console.log("글들어갔니?", formData.get("content"));
      console.log("파일들어갔니?", formData.get("upfile"));
      // var vo = {
      //   notice: this.article,
      //   upfile: this.fileInfos,
      // };
    },
    changeFile(e) {
      console.log(e.target.files);
      this.fileInfos = e.target.files;
    },
  },
  created() {},
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

.view .view-content button {
  width: 122px;
  height: 50px;
  border: 1px solid #0a1151;
  border-radius: 5px;
  background-color: white;
  color: #0a1151;
  font-weight: bold;
  font-size: 16px;
}

.view .view-content button:hover {
  background-color: #0a1151;
  color: white;
  border: 0px;
}

.view .view-content textarea {
  width: 100%;
  height: 100%;
}

.view .modify-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.view .modify-btn .cancel-modify {
  justify-content: right;
  margin-right: 10px;
}

.view .modify-btn .move-view {
  justify-content: left;
  margin-left: 10px;
}
</style>
