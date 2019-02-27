<template>
  <div>
    <div>
      <div>
        <div class="box">
          <label >输入用户名:</label>
          <input  placeholder="用户名">
        </div>
        <div class="box">
          <label >密码:</label>
          <input type="text" placeholder="密码">
        </div>
        <div class="box">
          <button>登录</button>
          <button style="margin-left:10px">注册</button>
          <button style="margin-left:10px">忘记密码</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.box{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
  }
</style>
