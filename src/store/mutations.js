export default {
   // 重置用户信息
   reset_user (state) {
    state.user = {}
  },
 // 更新用户信息
 receive_user (state, user) {
  state.user = user
},
  // 更新token信息
  receive_token (state, token) {
    state.token = token
  },
  // 重置token信息
  reset_token (state) {
    state.token = ''
  }
}