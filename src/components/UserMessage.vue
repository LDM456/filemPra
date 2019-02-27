<template>
  <div class="header_main">
    <router-link to="/loginPage">
      <div class="header_menu">登录</div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header_main {
  width: 100%;
  height: 25px;
  line-height: 25px;
  color: #000;
  background-color: #c3bbbb;
  border-top: 1px solid #000;
}
.header_menu {
  color: #fff;
  font-size: 12px;
  float: right;
}
</style>
