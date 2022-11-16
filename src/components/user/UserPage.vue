<template>
  <main>
    <div class="title">MYPAGE</div>
    <div class="mypage">
      <div>Personal information</div>
      <div>
        <div>
          <img class="profile" src="@/assets/img/profile.png" alt="profile" />
          <label>ssafy</label>
        </div>
        <button class="profile-change-btn">Change</button>
        <button class="profile-remove-btn">Remove</button>
      </div>
      <div class="login-input">
        <label>Password</label>
        <input type="text" />
      </div>
      <div class="login-input">
        <label>Password-Check</label>
        <input type="text" />
      </div>
      <div class="login-input">
        <label>Email</label>
        <input type="text" />
      </div>
      <div class="login-input">
        <label>Phone number</label>
        <input type="text" />
      </div>
      <div class="login-input">
        <button class="resign-btn">Resign</button>
      </div>
      <div class="login-input">
        <button class="change-btn">Save changes</button>
      </div>
    </div>
  </main>
</template>

<script>
// import http from "@/api/http";

export default {
  name: "UserPage",
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

.mypage .profile {
  background-color: #d6d6d6;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  padding: 8px;
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
