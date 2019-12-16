//引入vue
import Vue from 'vue'
//引入App.vue
import App from './App.vue'
//引入路由
import router from './router'
// 执行一次mock-server
import './mock/mock-server.js'
//去掉提示
Vue.config.productionTip = false


//创建并暴露Vue实例
/* eslint-disable no-new */
new Vue({
  //容器
  el: '#app',
  //组件
  components: { App },
  //模板
  template: '<App/>',
  // 路由
  router
})

