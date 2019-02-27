<template>
  <div class="container">
    <div>
      <!-- 引入头部组件 -->
      <movie-index-header></movie-index-header>
    </div>
    <div class="">
      <!-- 用户登录状态 -->
      <user-message></user-message>
    </div>
    <!-- 用户相关信息 -->
    <div>
      <div class="box">用户名: yonghuming</div>
    </div>
    <div>
      <div class="box">用户邮箱: yonghuyouxiang</div>
    </div>
    <div>
      <div class="box">用户电话: dianhua</div>
    </div>
    <div>
      <div class="box">用户状态: yonghuzhuangtai(封停与否)</div>
    </div>
    <div>
      <button>修改密码</button>
    </div>
    <!-- 这个用于修改用户密码，需要在平常事隐藏 -->
    <div>
      <div class="box">
        <label >输入旧密码:</label>
        <input type="text" placeholder="输入旧密码">
      </div>
      <div class="box">
        <label >输入新密码:</label>
        <input type="text" placeholder="输入新密码">
      </div>
      <div class="box">
        <button>修改密码</button>
      </div>
    </div>
    <div style="padding-top:10px">
      <!-- 需要跳转新的页面中 -->
      <router-link to="/sendEmail">
        <button>发送站内信息</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import MovieIndexHeader from "../components/MovieIndexHeader"
import CommonFooter from "../components/CommonFooter"
import UserMessage from "../components/UserMessage"

export default {
  data () {
    return {

    }
  },
  components: {
    MovieIndexHeader,
    CommonFooter,
    UserMessage
  }
}
</script>

<style>
  .box{
    display: inline-flex;
  }
  .container {
    width: 100%;
    margin: 0 auto;
    text-align:center;
  }
  .userMessage{
    padding-top:60px;
    margin-top:-10px;
    margin-left: -10px;
  }
</style>
