import Vue from 'vue'
import App from './App.vue'
// 引入elementUI
import ElementUI from 'element-ui'
// 引入样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入路由器并注册
import router from './router'
//  引入store
import store from './store'
//  引入后台数据mock 执行一次
import './mock/mock-serve.js'
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})

