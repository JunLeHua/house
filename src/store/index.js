import Vue from 'vue'
import Vuex from 'vuex'

import { setItem, getItem } from '@/utils/storage'

Vue.use(Vuex)
const USER_TOKEN = 'USER_TOKEN'
export default new Vuex.Store({
  state: {
    user: getItem(USER_TOKEN) || []
  },
  getters: {
  },
  mutations: {
    userToke (state, payload) {
      state.user = payload
      setItem(USER_TOKEN, payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
