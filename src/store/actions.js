import{receive_token,receive_user,reset_user,reset_token} from './mutations.js'
import { reqAutoLogin } from '../api'
export default{
  // 保存用户信息
  saveUser ({ commit }, user) {
    // 取出token
    const token = user.token
    // 保存token到vuex中
    commit("receive_token", token)
    // 保存token到localStorage中
    localStorage.setItem('token_key', token)
    // 干掉user中的token
    delete user.token
    // 保存用户信息
    commit("receive_user", user)
  },
   // 重置操作
   resetLogin ({ commit }) {
    // 重置user
    commit("reset_user")
    // 重置token
    commit("reset_token")
    // 干掉localStorage中的token
    localStorage.removeItem('token_key')
  },
  // 自动登录操作
  async autoLogin ({ commit, state }) {
    // 发送请求
    if (state.token) {
      const result = await reqAutoLogin()
      if (result.code === 0) {
        const user = result.data
        commit("receive_user", user)
      }
    }

  }
}