//引入VUE
import Vue from 'vue'
//引入VueRouter
import VueRouter from 'vue-router'
//声明使用插件
Vue.use(VueRouter)
//引入ROUTERS
import routes from './routes'
//引入VI组件
// import testComponent from 'vue-router'
//暴漏组件
export default new VueRouter({
  mode: 'history',
  routes
  // vi components: {
  // vi   testComponent
  //vi },
  //vi  methods: {},
})
// 去reoutes里面