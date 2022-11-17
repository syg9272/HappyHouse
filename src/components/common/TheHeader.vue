<template>
  <header>
    <nav>
      <div>
        <router-link :to="{ name: 'main' }">
          <img class="logo" :src="require('@/assets/img/logo_navy.png')" alt="logo" />
        </router-link>
        <router-link :to="{ name: 'map' }" class="nav-menu"> MAP </router-link>
        <router-link :to="{ name: 'like' }" class="nav-menu"> LIKE </router-link>
        <router-link :to="{ name: 'service' }" class="nav-menu">SERVICE</router-link>
      </div>
      <div>
        <router-link v-if="!userInfo" :to="{ name: 'login' }" class="nav-menu">SIGN IN</router-link>
        <a v-else @click.prevent="onClickLogout()" :to="{ name: 'main' }" class="nav-menu"
          >LOGOUT</a
        >
        <router-link v-if="!userInfo" :to="{ name: 'register' }" class="nav-menu"
          >SIGN UP</router-link
        >
        <router-link v-else :to="{ name: 'mypage' }" class="nav-menu">MYPAGE</router-link>
        <div class="profile-img">
          <img class="profile" :src="user.img" alt="profile" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
  name: "TheHeader",
  data() {
    return {
      user: {
        img: require("../../assets/img/profile.png"),
      },
    };
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "userInfo"]),
    ...mapGetters(["checkUserInfo"]),
  },
  methods: {
    ...mapActions(memberStore, ["userLogout"]),
    // ...mapMutations(memberStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
    onClickLogout() {
      // this.SET_IS_LOGIN(false);
      // this.SET_USER_INFO(null);
      // sessionStorage.removeItem("access-token");
      // if (this.$route.path != "/") this.$router.push({ name: "main" });
      console.log(this.userInfo.userid);
      //vuex actions에서 userLogout 실행(Backend에 저장 된 리프레시 토큰 없애기
      //+ satate에 isLogin, userInfo 정보 변경)
      // this.$store.dispatch("userLogout", this.userInfo.userid);
      this.userLogout(this.userInfo.userid);
      sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
      sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기
      if (this.$route.path != "/") this.$router.push({ name: "main" });
    },
  },
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

header > nav > div > a {
  cursor: pointer;
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
