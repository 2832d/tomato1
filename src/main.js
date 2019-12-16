import Vue from 'vue'
import App from './App.vue'
//引入路由器并注册
import router from './router'
// 引入store
import store from './store'
//引入element组件
Vue.config.productionTip = false
//引入表单验证
import './vee-validate.js'
//引入element-ui组件
import { Message } from 'element-ui';
Vue.component(Message.name, Message);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})

