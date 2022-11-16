<template>
  <main>
    <div class="login">
      <div class="title">SIGN IN</div>
      <div class="login-input">
        <label>ID</label>
        <input type="text" />
      </div>
      <div class="login-input">
        <div class="login-pass">
          <label>Password</label>
          <div>
            <a href="#">
              <img class="hide" src="@/assets/img/hide.png" alt="hide" />
            </a>
            <label>Hide</label>
          </div>
        </div>
        <input type="password" />
      </div>
      <div class="login-input">
        <div>
          <a href="#">Forget your password?</a>
          <div>
            <div class="save-id">save id</div>
            <input type="checkbox" />
          </div>
        </div>
      </div>
      <div class="login-input">
        <button class="signup-btn">Create an account</button>
      </div>
      <div class="login-input">
        <button class="signin-btn">Sign in</button>
      </div>
    </div>
  </main>
</template>

<script>
// import http from "@/api/http";

export default {
  name: "UserLogin",
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
  font-size: 18px;
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
</style>
