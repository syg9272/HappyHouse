<template>
  <footer>
    <div>
      <img class="logo" src="@/assets/img/logo_white.png" alt="logo" />
      <span>© HAPPY HOUSE. All rights reserved.</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {};
  },
};
</script>

<style>
footer {
  height: 6%;
  width: 100%;
  background-color: rgba(10, 17, 81, 1);
  position: fixed;
  bottom: 0;
}

footer div {
  height: 100%;
  margin: auto 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

footer div span {
  margin-left: 20px;
}

footer div span {
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  color: rgba(195, 203, 205, 0.5);
}

footer .logo {
  opacity: 50%;
  width: 60px;
  height: 36px;
}
</style>
