import Vue from 'vue';
import App from './App.vue';
//引入路由器并注册
import router from '../router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//添加vIVewUI
// import ViewUI from 'view-design';
// import VueRouter from 'vue-router';
// import 'view-design/dist/styles/iview.css';
// Vue.use(routers);
// Vue.use(ViewUI);
//--------------vIVewUI结束
Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000
});
// Vue.use(ElementUI);
// Vue.config.productionTip = false
// vi const RouterConfig = {
// router
// vi//routes: router
// };
// vi//const routers = new VueRouter(RouterConfig);
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '</App>',
  render: h => h(App),
  router
});