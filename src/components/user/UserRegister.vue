<template>
  <main>
    <div class="login">
      <div class="title">SIGN UP</div>
      <div class="login-input">
        <label>ID</label>
        <input @keyup="idCheck()" v-model="user.id" type="text" />
        <label v-show="user.id" class="msg">{{ idMsg }}</label>
      </div>
      <div class="login-input">
        <div class="login-pass">
          <label>Password</label>
          <div>
            <a @click.prevent="changePass()">
              <img class="hide" src="@/assets/img/hide.png" alt="hide" />
            </a>
            <label>Hide</label>
          </div>
        </div>
        <input v-model="user.pass" type="password" name="pass" />
      </div>
      <div class="login-input">
        <label>Password-Check</label>
        <input @keyup="passwordCheck()" v-model="passCheck" type="password" name="passCheck" />
        <label v-show="passCheck" class="msg">{{ passMsg }}</label>
      </div>
      <div class="login-input">
        <label>Name</label>
        <input v-model="user.name" type="text" />
      </div>
      <div class="login-input">
        <label>Phone</label>
        <input v-model="user.phoneNumber" type="tel" />
      </div>
      <div class="login-input">
        <label>Email</label>
        <input v-model="user.email" type="email" />
      </div>
      <div class="login-input">
        <button @click="registeUser()" class="signin-btn">Sign Up</button>
      </div>
    </div>
  </main>
</template>

<script>
import http from "@/api/http";

export default {
  name: "UserRegister",
  data() {
    return {
      hide: true,
      passCheck: null,
      idMsg: null,
      passMsg: null,
      user: {
        id: null,
        pass: null,
        name: null,
        phoneNumber: null,
        email: null,
        img: "profile.png",
      },
    };
  },
  methods: {
    registeUser() {
      if (
        this.user.id == null ||
        this.user.pass == null ||
        this.user.name == null ||
        this.user.phoneNumber == null ||
        this.user.email == null
      ) {
        alert("모든 정보를 입력하세요.");
      } else {
        if (this.passCheck == null) {
          alert("비밀번호가 일치하지 않습니다.");
        } else {
          http.post("/member/join", this.user).then((data) => {
            console.log(data);
          });
          this.$router.push({ name: "login" });
        }
      }
    },
    idCheck() {
      if (this.user.id.length < 6 || this.user.id.length > 15) {
        this.idMsg = "아이디는 6자 이상 15자 이하입니다.";
      } else {
        // 아이디가 있는지 체크
        this.idMsg = null;
      }
    },
    passwordCheck() {
      if (this.passCheck != this.user.pass) {
        this.passMsg = "비밀번호가 일치하지 않습니다.";
      } else {
        // 아이디가 있는지 체크
        this.passMsg = null;
      }
    },
    changePass() {
      console.log(this.hide);
      if (this.hide) {
        this.hide = !this.hide;
        document.getElementsByName("pass")[0].type = "text";
        document.getElementsByName("passCheck")[0].type = "text";
      } else {
        this.hide = !this.hide;
        document.getElementsByName("pass")[0].type = "password";
        document.getElementsByName("passCheck")[0].type = "password";
      }
    },
  },
};
</script>

<style>
main .login {
  width: 26%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

main .title {
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: #0a1151;
}

main .login > div {
  margin: 10px 0;
}

main .login-input {
  display: flex;
  flex-direction: column;
}

main .login-input .hide {
  width: 18px;
  height: 16px;
  margin-right: 3px;
}

main .login-input input {
  font-size: 16px;
  letter-spacing: 1.5px;
  padding: 13px 30px;
  border-radius: 12px;
  border: 1px solid #666666;
}
main .login-input button {
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  padding: 15px;
  border: 1px solid #0a1151;
  border-radius: 40px;
  margin: 5px 0;
}

main .login-input label {
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

main .login .save-id {
  color: rgba(10, 17, 81, 1);
}

main .login .signup-btn {
  background: #ffffff;
}

main .login .signin-btn {
  cursor: pointer;
  background: #0a1151;
  color: #ffffff;
  margin-top: 20px;
}

main .login-input .login-pass > div {
  display: flex;
  flex-direction: row;
  align-items: center;
}

main .login-input > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
}

main .login-input > div > div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

main .login-input > div > div > div {
  margin-right: 3px;
}

main .login-input a {
  text-decoration: underline;
}

main .msg {
  font-size: 14px !important;
  color: red;
  padding-left: 10px;
}
</style>
