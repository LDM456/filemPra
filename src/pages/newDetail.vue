<template>
  <!-- 此页面的需要 -->
  <div class="container">
    <div>
      <!-- 引入头部组件= -->
      <movie-index-header></movie-index-header>
    </div>
    <!-- 中心内容 -->
    <div class="contentMain">
      <h1>文章标题</h1>
      <div>文章的发布时间</div>
      <div class="contentText">文章的内容</div>
    </div>
    <!-- 评论 -->
    <comment></comment>
    <div>
      <!-- 底部组件 -->
      <common-footer></common-footer>
    </div>
  </div>
</template>

<script>
import MovieIndexHeader from '../components/MovieIndexHeader'
import Comment from '../components/Comment'
import CommonFooter from '../components/CommonFooter'

// 定义相关的变量
let article_id = 0;

export default {
  name:'NewDetail',
  data () {
    return {

    }
  },
  components: {
    MovieIndexHeader,
    Comment,
    CommonFooter
  }
}
</script>

<style>
  .container {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .contentMain{
    padding-top: 150px;
  }
  .contentText{
    font-size: 15px;
    padding-top: 20px;
  }
</style>
