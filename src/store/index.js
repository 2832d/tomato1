// 引入vue
import Vue from 'vue'
//  引入vuex
import Vuex from 'vuex'
// 引入对象
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 引入模块
import titles from './modules/titles'
// 声明适用
Vue.use(Vuex)
// 暴露对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    titles
  }
})