//引入登录Login
import Login from '../pages/Login/Login.vue'
import Lin from '../pages/Lin/Lin.vue'
import Ling from '../pages/Ling/Ling.vue'
//暴露路由配置
export default[
  {
    path:'/login',
    component:Login
  },
  {
    path:'/lin',
    component:Lin
  },
  {
    path:'/ling',
    component:Ling
  },
  {
    path:'/',
    redirect: '/lin'
  }
]