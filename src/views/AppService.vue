<template>
  <main>
    <div class="notice">
      <div class="title">공지사항</div>
      <div class="notice-nav">
        <div class="notice-menu">
          <a href="#">전체</a>
          <a href="#">공지사항</a>
          <a href="#">FQA</a>
        </div>
        <div class="notice-search">
          <button class="select-button">
            선택안함
            <img src="@/assets/img/toggle-open.png" alt="toggle" />
          </button>
          <ul class="select-option">
            <li>
              <button>제목</button>
            </li>
            <li>
              <button>작성자</button>
            </li>
          </ul>
          <input type="text" />
          <a href="#">
            <img src="@/assets/img/search.png" alt="search" />
          </a>
        </div>
      </div>
      <div class="notice-list">
        <div @click="moveView()" class="notice-item">
          <div>
            <div>1</div>
            <div class="notice-type">이벤트</div>
            <div>[공지] 10월 21일 000 이벤트</div>
          </div>
          <div>
            <a href="#">
              <img class="file-img" src="@/assets/img/file.png" alt="file" />
            </a>
            <div>2022. 10. 21</div>
          </div>
        </div>
        <div @click="moveView()" class="notice-item">
          <div>
            <div>1</div>
            <div class="notice-type">이벤트</div>
            <div>[공지] 10월 21일 000 이벤트</div>
          </div>
          <div>
            <a href="#">
              <img class="file-img" src="@/assets/img/file.png" alt="file" />
            </a>
            <div>2022. 10. 21</div>
          </div>
        </div>
        <div @click="moveView()" class="notice-item">
          <div>
            <div>1</div>
            <div class="notice-type">이벤트</div>
            <div>[공지] 10월 21일 000 이벤트</div>
          </div>
          <div>
            <a href="#">
              <img class="file-img" src="@/assets/img/file.png" alt="file" />
            </a>
            <div>2022. 10. 21</div>
          </div>
        </div>
        <div @click="moveView()" class="notice-item">
          <div>
            <div>1</div>
            <div class="notice-type">이벤트</div>
            <div>[공지] 10월 21일 000 이벤트</div>
          </div>
          <div>
            <a href="#">
              <img class="file-img" src="@/assets/img/file.png" alt="file" />
            </a>
            <div>2022. 10. 21</div>
          </div>
        </div>
        <div @click="moveView()" class="notice-item">
          <div>
            <div>1</div>
            <div class="notice-type">이벤트</div>
            <div>[공지] 10월 21일 000 이벤트</div>
          </div>
          <div>
            <a href="#">
              <img class="file-img" src="@/assets/img/file.png" alt="file" />
            </a>
            <div>2022. 10. 21</div>
          </div>
        </div>
        <div @click="moveView()" class="notice-item">
          <div>
            <div>1</div>
            <div class="notice-type">이벤트</div>
            <div>[공지] 10월 21일 000 이벤트</div>
          </div>
          <div>
            <a href="#">
              <img class="file-img" src="@/assets/img/file.png" alt="file" />
            </a>
            <div>2022. 10. 21</div>
          </div>
        </div>
        <div @click="moveView()" class="notice-item">
          <div>
            <div>1</div>
            <div class="notice-type">이벤트</div>
            <div>[공지] 10월 21일 000 이벤트</div>
          </div>
          <div>
            <a href="#">
              <img class="file-img" src="@/assets/img/file.png" alt="file" />
            </a>
            <div>2022. 10. 21</div>
          </div>
        </div>
        <div @click="moveView()" class="notice-item">
          <div>
            <div>1</div>
            <div class="notice-type">이벤트</div>
            <div>[공지] 10월 21일 000 이벤트</div>
          </div>
          <div>
            <a href="#">
              <img class="file-img" src="@/assets/img/file.png" alt="file" />
            </a>
            <div>2022. 10. 21</div>
          </div>
        </div>
        <div @click="moveView()" class="notice-item">
          <div>
            <div>1</div>
            <div class="notice-type">이벤트</div>
            <div>[공지] 10월 21일 000 이벤트</div>
          </div>
          <div>
            <a href="#">
              <img class="file-img" src="@/assets/img/file.png" alt="file" />
            </a>
            <div>2022. 10. 21</div>
          </div>
        </div>
        <div @click="moveView()" class="notice-item">
          <div>
            <div>1</div>
            <div class="notice-type">이벤트</div>
            <div>[공지] 10월 21일 000 이벤트</div>
          </div>
          <div>
            <a href="#">
              <img class="file-img" src="@/assets/img/file.png" alt="file" />
            </a>
            <div>2022. 10. 21</div>
          </div>
        </div>
        <div class="page">
          <a href="#"><img src="@/assets/img/first.png" alt="first" /></a>
          <a href="#"><img src="@/assets/img/before.png" alt="first" /></a>
          <div>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">7</a>
            <a href="#">8</a>
            <a href="#">9</a>
            <a href="#">10</a>
          </div>
          <a href="#"><img src="@/assets/img/next.png" alt="first" /></a>
          <a href="#"><img src="@/assets/img/last.png" alt="first" /></a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import http from "@/api/http";

export default {
  name: "AppService",
  data() {
    return {};
  },
  methods: {
    moveView() {
      this.$router.push({ name: "view" });
    },
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

.notice .notice-nav {
  padding: 0 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.notice .notice-nav .notice-menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.notice .notice-nav .notice-menu a {
  padding: 10px 0;
  color: rgba(0, 0, 0, 0.5);
  margin: 0 20px;
  font-size: 18px;
  font-weight: normal;
  border-bottom: 3px solid white;
}

/* active 속성 추가 */
.notice .notice-nav .notice-menu a:hover {
  color: #0a1151;
  font-weight: bold;
  border-bottom: 3px solid #0a1151;
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

.notice .notice-list {
  background-color: rgba(10, 17, 81, 0.1);
  height: 88%;
  width: 100%;
  padding: 50px 0 0 0;
}

.notice .notice-list .notice-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  width: 65%;
  font-size: 14px;
}

.notice .notice-list .notice-item:hover {
  background-color: white;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.25);
}

.notice .notice-list .notice-item > div {
  display: flex;
  flex-direction: row;
  margin: 15px 50px;
}

.notice .notice-list .notice-item > div > * {
  margin: 0 30px;
}

.notice .notice-list .notice-item a {
  margin-left: 200px;
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

.notice .notice-list .page {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.notice .notice-list .page a {
  margin: 0 10px;
  color: #b4b4b4;
  font-size: 16px;
  font-weight: bold;
}

.notice .notice-list .page div a:hover {
  color: #0a1151;
}
</style>
