<template>
  <header>
    <nav>
      <div>
        <router-link :to="{ name: 'main' }">
          <img class="logo" :src="require('@/assets/img/logo_navy.png')" alt="logo" />
        </router-link>
        <router-link :to="{ name: 'map' }" class="nav-menu"> MAP </router-link>
        <router-link :to="{ name: 'like' }" class="nav-menu"> LIKE </router-link>
        <a class="nav-menu" href="#">SERVICE</a>
      </div>
      <div>
        <router-link :to="{ name: 'login' }" class="nav-menu">SIGN IN</router-link>
        <router-link :to="{ name: 'register' }" class="nav-menu">SIGN UP</router-link>
        <router-link :to="{ name: 'mypage' }" class="nav-menu">MYPAGE</router-link>
        <div class="profile-img">
          <img class="profile" src="@/assets/img/profile.png" alt="profile" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {};
  },
  // created 에서 로그인 상태면 logout mypage로 변경
};
</script>

<style>
header .logo {
  width: 80px;
  height: 50px;
}

header {
  height: 8%;
}

header > nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 30px;
  padding: 10px;
}

header > nav > div {
  display: flex;
  flex-direction: row;
  align-items: center;
}

header > nav > div > a,
header > nav > div > img {
  margin: 0 20px;
}

header > nav > div > a:hover {
  font-weight: 900;
}

header .nav-menu {
  font-size: 16px;
  font-weight: 500;
  text-align: left;
}

header .profile-img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

header .profile {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
</style>
