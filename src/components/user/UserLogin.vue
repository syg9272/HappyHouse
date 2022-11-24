<template>
  <main>
    <div class="login user-login">
      <div class="title">SIGN IN</div>
      <div class="login-input">
        <label>ID</label>
        <input v-model="user.id" type="text" />
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
        <div>
          <a @click.prevent="moveFindPass()">Forget your password?</a>
          <div>
            <div class="save-id">save id</div>
            <div class="save-check">
              <input v-model="checkedValues" type="checkbox" value="true" />
            </div>
          </div>
        </div>
      </div>
      <div class="login-input find-pass">
        <button @click="moveRegister()" class="signup-btn">Create an account</button>
        <button @click="login()" class="signin-btn">Sign in</button>
      </div>
    </div>
  </main>
</template>

<script>
// import axios from "axios";
// import http from "@/api/http";
import Cookies from "js-cookie";
import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
  name: "UserLogin",
  data() {
    return {
      checkedValues: [],
      hide: true,
      user: {
        id: null,
        pass: null,
        saveid: false,
      },
    };
  },
  created() {
    if (Cookies.get("userId") != null) {
      this.user.id = Cookies.get("userId");
      this.user.saveid = "true";
      this.checkedValues = true;
    }
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
  },
  methods: {
    ...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
    changePass() {
      console.log(this.checkedValues);
      console.log(this.hide);
      if (this.hide) {
        this.hide = !this.hide;
        document.getElementsByName("pass")[0].type = "text";
      } else {
        this.hide = !this.hide;
        document.getElementsByName("pass")[0].type = "password";
      }
    },
    moveFindPass() {
      this.$router.push({ name: "findpass" });
    },
    moveRegister() {
      this.$router.push({ name: "register" });
    },
    async login() {
      if (this.checkedValues.length > 0) {
        this.user.saveid = "true";
      }
      await this.userConfirm(this.user);
      let token = sessionStorage.getItem("access-token");
      // console.log("1. confirm() token >> " + token);
      if (this.isLogin) {
        await this.getUserInfo(token);
        console.log("유저 정보정보", this.userInfo);
        console.log(this.user.saveid);
        if (this.checkedValues == "true") Cookies.set("userId", this.user.id, { expires: 7 });
        else Cookies.remove("userId");

        // console.log("4. confirm() userInfo :: ", this.userInfo);
        this.$router.push({ name: "main" });
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
  /* align-items: center; */
}

main .user-login {
  padding-top: 100px;
}

main .title {
  text-align: center;
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
  font-size: 18px;
  padding: 13px 30px;
  border-radius: 12px;
  border: 1px solid #666666;
}
main .login-input button {
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  padding: 15px;
  border: 1px solid #0a1151;
  border-radius: 40px;
  margin: 5px 0;
}

main .login-input label {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

main .login .save-id {
  color: rgba(10, 17, 81, 1);
}

main .login .save-check {
  padding-top: 2px;
  margin-left: 5px;
  cursor: pointer;
}

main .login .save-check input {
  cursor: pointer;
}

main .login .signup-btn {
  background: #ffffff;
}

main .login .signin-btn {
  background: #0a1151;
  color: #ffffff;
  margin-top: 20px;
}

main .login-input .login-pass > div {
  display: flex;
  flex-direction: row;
  align-items: center;
}

main .login-input .login-pass a {
  cursor: pointer;
  padding-top: 3px;
  margin-right: 5px;
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
  cursor: pointer;
}

main > .find-pass {
  padding-top: 150px;
}

main .login .find-pass {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0;
  /* align-items: center; */
}

main .login .find-pass button {
  width: 48%;
  height: 60px;
  margin: 0;
  border-radius: 10px;
  /* align-items: center; */
}
</style>
