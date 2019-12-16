// 引入路由组件
import Recommend from '../components/Recommend/Recommend.vue'



// 暴露路由组件的位置
export default [
  {
    path: '/recommend ',
    component: Recommend,
    children: [
      {
        path: '/recommend/titles',
        // component: titles
      }]
  },
  {
    path: '/',
    redirect: '/recommend'
  }
]
