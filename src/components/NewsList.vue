<template>
  <li class="goods-list">
    <div class="newsList">
      <router-link :to='新闻标题' class="goods-list-link">
        文章标题，时间等····
      </router-link>
    </div>
  </li>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
  .newsList{
    padding: 5px;
    font-size: 10px;
    border-bottom: 1px dashed #ababab;
  }
</style>
