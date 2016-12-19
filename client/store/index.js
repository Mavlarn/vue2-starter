import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import account from './modules/account'

Vue.use(Vuex)

const getters = {
  title: state => state.title,
  selectedTab: state => state.selectedTab,
  hasTabs: state => state.hasTabs
}
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    account
  }
})

export default store
