<template>
  <main>
    <div class="title">MYPAGE</div>
    <div class="mypage">
      <b>Personal information</b>
      <div class="mypage-top">
        <div class="mypage-info">
          <div>
            <img class="profile" :src="userImg" alt="profile" />
          </div>
          <label>{{ userInfo.name }}</label>
        </div>
        <div>
          <button class="profile-change-btn">Change</button>
          <button @click="removeProfile()" class="profile-remove-btn">Remove</button>
        </div>
      </div>
      <div class="login-input">
        <label>Password</label>
        <input v-model="userInfo.pass" type="password" />
      </div>
      <div class="login-input">
        <label>Password-Check</label>
        <input @keyup="passwordCheck()" v-model="passCheck" type="password" />
        <label v-show="passCheck" class="msg">{{ passMsg }}</label>
      </div>
      <div class="login-input">
        <label>Email</label>
        <input v-model="userInfo.email" type="text" />
      </div>
      <div class="login-input">
        <label>Phone number</label>
        <input v-model="userInfo.phoneNumber" type="text" />
      </div>
      <div class="mypage-btn">
        <button @click="deleteUser()" class="resign-btn">Resign</button>
        <button @click="moveMain()" class="change-btn">Save changes</button>
      </div>
    </div>
  </main>
</template>

<script>
import http from "@/api/http";

import { mapState } from "vuex";

const memberStore = "memberStore";

export default {
  name: "UserPage",
  data() {
    return {
      passCheck: null,
      passMsg: null,
      userImg: null,
      img: "profile.png",
      // user: {
      //   img: require("../../assets/img/profile.png"),
      //   name: null,
      //   pass: null,
      //   email: null,
      //   phoneNumber: null,
      // },
    };
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  created() {
    if (this.userInfo.img == null) {
      this.userImg = require("../../assets/img/profile.png");
    } else {
      this.img = this.userInfo.img;
      this.userImg = `require("../../assets/img/${this.userInfo.img}")`;
    }
    console.log(this.userInfo);
  },
  methods: {
    removeProfile() {
      this.img = "profile.png";
      this.userImg = require("../../assets/img/profile.png");
    },
    passwordCheck() {
      if (this.passCheck != this.userInfo.pass) {
        this.passMsg = "비밀번호가 일치하지 않습니다";
      } else {
        // 아이디가 있는지 체크
        this.passMsg = null;
      }
    },
    deleteUser() {
      http.delete(`/member/quit/${this.userInfo.id}`).then((data) => {
        console.log(data);
      });
      this.$router.push({ name: "main" });
    },
    moveMain() {
      http.put("/member/modify", this.userInfo).then((data) => {
        console.log(data);
      });
      this.$router.push({ name: "main" });
    },
  },
};
</script>

<style>
.mypage {
  width: 400px;
  min-height: 500px;
  border: 1px solid rgba(131, 133, 156, 1);
  border-radius: 16px;
  padding: 20px 20px 0 20px;
  margin: 20px auto;
}

.mypage .mypage-top .mypage-info > div {
  width: 80px;
  height: 80px;
}

.mypage .profile {
  background-color: #d6d6d6;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* pa-right: 20px; */
  padding: 8px 14px 8px 8px;
}

.mypage .mypage-top {
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.mypage .mypage-top .mypage-info {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.mypage .mypage-top button {
  width: 84px;
  height: 44px;
  border-radius: 8px;
  background-color: white;
  margin-right: 10px;
  cursor: pointer;
}

.mypage .mypage-top .profile-change-btn {
  border: 1px solid #4e60ff;
  color: #4e60ff;
}

.mypage .mypage-top .profile-remove-btn {
  border: 1px solid #83859c;
  color: #83859c;
}

.mypage .mypage-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  padding: 20px 10px;
  border-top: 1px solid rgba(131, 133, 156, 1);
}

.mypage .mypage-btn button {
  padding: 10px;
  height: 44px;
  border-radius: 8px;
  cursor: pointer;
}

.mypage .mypage-btn .resign-btn {
  border: 1px solid #ff5c60;
  color: #ff5c60;
  background-color: white;
}

.mypage .mypage-btn .change-btn {
  border: 0px;
  color: white;
  background-color: #4e60ff;
}
</style>
