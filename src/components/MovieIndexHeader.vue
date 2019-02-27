<template>
  <div class="header">
    <router-link to="/">
      <div class="header_menu">主页</div>
    </router-link>
    <router-link to="/movieList">
      <div class="header_menu">电影</div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100%;
  height: 45px;
  color: #000;
  background-color: #c3bbbb;
}
</style>
