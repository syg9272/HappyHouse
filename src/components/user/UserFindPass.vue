<template>
  <main>
    <div class="login find-pass">
      <div class="title">FIND PASSWORD</div>
      <div class="login-input">
        <label>ID</label>
        <input v-model="user.id" type="text" />
      </div>
      <div class="login-input">
        <label>EMAIL</label>
        <input v-model="user.email" type="text" />
      </div>
      <div class="login-input find-pass">
        <button @click="moveLogin()" class="signup-btn">CANCEL</button>
        <button @click="findPass()" class="signin-btn">FIND</button>
      </div>
    </div>
  </main>
</template>

<script>
import http from "@/api/http";

export default {
  name: "UserFindPass",
  data() {
    return {
      user: {
        id: null,
        email: null,
      },
    };
  },
  methods: {
    moveLogin() {
      this.$router.push({ name: "login" });
    },
    findPass() {
      http.post("/member/sendEmail", this.user).then((data) => {
        console.log(data.data);
      });
      alert("입력한 이메일로 임시 비밀번호가 전송되었습니다.");
      this.$router.push({ name: "login" });
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
