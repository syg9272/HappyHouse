<template>
  <main>
    <div class="title">MYPAGE</div>
    <div class="mypage">
      <b>Personal information</b>
      <div class="mypage-top">
        <div class="mypage-info">
          <div>
            <img class="profile" :src="this.profileImg" alt="profile" />
          </div>
          <label>{{ userInfo.name }}</label>
        </div>
        <div>
          <!-- <input class="file-input" type="file" value="" /> -->
          <button @click="$refs.fileRef.click()" class="profile-change-btn">Change</button>
          <input
            class="file-input"
            value="files"
            type="file"
            @change="changeFile"
            ref="fileRef"
            multiple
          />
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
      img: null,

      fileInfos: null,
    };
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
    ...mapState(memberStore, ["profileImg"]),
  },
  created() {
    // 현재 토큰에 저장되어 있는 user 프로필 여부에 따라 이미지 경로 설정
    if (this.profileImg == null) {
      this.userImg = require("../../assets/img/profile.png");
      // this.img = "profile.png";
    } else {
      this.userImg = this.profileImg;
    }
    console.log(this.userInfo);
  },
  methods: {
    changeFile(e) {
      console.log(e.target.files);
      const fileData = (data) => {
        this.userImg = data;
        this.$store.commit("memberStore/SET_PROFILE_IMG", data);
      };

      // this.fileInfos = e.target.file;
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener(
        "load",
        function () {
          fileData(reader.result);
        },
        false
      );

      console.log(this.userImg);
    },
    removeProfile() {
      // user 프로필 이미지 띄우기
      // this.img = "profile.png";
      // this.userImg = require("../../assets/img/profile.png");
    },
    passwordCheck() {
      // 비밀번호 입력창 두 개가 일치한지 판별
      if (this.passCheck != this.userInfo.pass) {
        this.passMsg = "비밀번호가 일치하지 않습니다";
      } else {
        this.passMsg = null;
      }
    },
    deleteUser() {
      // user 탈퇴처리 후 메인으로 이동
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

<style scoped>
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

.file-input {
  display: none;
}
</style>
