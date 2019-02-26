<template>
  <div class="container">
    <!-- header组件 -->
    <div>
      <movie-index-header></movie-index-header>
    </div>
      <!-- 引入用户信息组件 -->
    <div class="userMessage">
      <user-message></user-message>
    </div>
    <!-- 展示图片的大图组件 -->
    <div class="contentPic">
      <index-header-pic></index-header-pic>
    </div>
    <div class="contentMain">
        <!-- 左侧电影列表 -->
      <div>
        <ul class="cont-ul">
          <movie-list></movie-list>
        </ul>
      </div>
      <!-- 右侧新闻列表 -->
      <div>
        <div class="contentRight">
          <ul class="cont-ul">
            <new-list></new-list>
          </ul>
        </div>
      </div>
    </div>
    <!-- 底部footer组件 -->
    <common-footer></common-footer>
  </div>
</template>

<script>
import MovieIndexHeader from '../components/MovieIndexHeader'
import UserMessage from '../components/UserMessage'
import IndexHeaderPic from '../components/IndexHeaderPic'
import MovieList from '../components/MovieList'
import NewList from '../components/NewsList'
import CommonFooter from '../components/CommonFooter'
export default {
  data () {
    return {

    }
  },
  components: {
    MovieIndexHeader,
    UserMessage,
    IndexHeaderPic,
    MovieList,
    NewList,
    CommonFooter
  }
}
</script>

<style>

</style>
