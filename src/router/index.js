import Vue from 'vue'
import Router from 'vue-router'
import Robot from '@/components/robot'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: resolve => require(['../pages/index.vue'],resolve),
      meta:{
        title:'home'
      }
    },
    {
      path:'/robot',
      name:'Robot',
      component: Robot
    },
    {
      path:'/moviesList',
      name:'moviesList',
      component:resolve => require(['../pages/moviesList.vue'],resolve)
    },
    {
      path:'/movieDetail',
      component:resolve => require(['../pages/movieDetail.vue'],resolve)
    }
  ]
})
