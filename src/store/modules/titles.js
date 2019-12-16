import { RECEIVE_TITLES } from '../mutation-types.js'
import { reqTitles } from '../../api'
const state = {
  titles: {}
}
const mutations = {
  [RECEIVE_TITLES] (state, { titles }) {
    state.titles = titles
  }
}
const actions = {
  async getTitles ({ commit }) {
    const result = await reqTitles()
    if (result.code === 0) {
      const titles = result.data
      commit(RECEIVE_TITLES, { titles })
    }
  }
}

const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}