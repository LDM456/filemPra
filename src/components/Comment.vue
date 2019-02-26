<template>
  <!-- 评论的相关html -->
  <div>
    <label>评论</label>
    <hr>
    <div>
      <li v-for="item in items" :key="item">XX 评论 : XXX</li>
    </div>
    <div style="padding:5px">
        <textarea v-model="context" style="width:80%; height:50px" placeholder="内容"></textarea>
    </div>
    <div style="padding-top: 10px">
        <button v-on:click="send_comment">评论</button>
    </div>
  </div>
</template>
// 获取所有评论，并且可以回复怕评论，对于文章详情也可使用
<script>
export default {};
</script>

<style>
</style>
