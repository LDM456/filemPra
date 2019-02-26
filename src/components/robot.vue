<template>
  <div id="">
    <p>
      提问:
      <input type="text" v-model="question">
    </p>
    <p>{{answer}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      question:'', //初始化问题
      answer:'你还没问我问题呢！！！！'
    }
  },
  watch:{
    question(){
      this.answer = '等待发问哦！！'
      this.getAnswer()
    }
  },
  methods: {
    getAnswer(){
      // 先去判断是否结束提问，已？为标志
      if(this.question.indexOf('？') !== -1){
        this.$axios.post('http://robottest.uneedzf.com/api/talk2Robot',{
          token:'2238679aaa76c7018f1fb1580f2f1334',
          message:this.question
        }).then((res) => {
          if(res.data.data !== 0){
            this.answer = res.data.data
          }else{
            this.answer = res.data.message
          }
        }).catch((err) => {
          console.log(err);
        });
      }else{
        this.answer = '一个问题一般由？结尾哦！！';
        return
      }
    }
  }
}
</script>

<style>

</style>
