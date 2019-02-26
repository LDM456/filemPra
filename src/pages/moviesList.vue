<template>
<!-- 此页面所需的控件 -->
  <div class="container">
    <div>
      <movie-index-header></movie-index-header>
    </div>
    <div class="contebtMain">
      <div>
          <!-- 引入movieList -->
        <div class="contentLeft">
          <ul class="cont-il">
            <movie-list></movie-list>
          </ul>
        </div>
      </div>
    </div>
    <!-- 引入尾控件 -->
    <common-footer></common-footer> 
  </div>
</template>

<script>
import MovieIndexHeader from "@/components/MovieIndexHeader";
import MovieList from "@/components/MovieList";
import CommonFooter from '@/components/CommonFooter'
export default {
  data() {
    return {};
  },
  components: {
    MovieIndexHeader,
    MovieList,
    CommonFooter
  }
};
</script>

<style>
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .contentMain{
    padding-top: 150px;
  }
  .contentText{
    font-size: 15px;
    padding-top: 20px;
  }
</style>
