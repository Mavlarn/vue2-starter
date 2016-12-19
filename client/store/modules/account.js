import API from '../../api'
import * as types from '../types'

import ApiConfigurations from '../../api/configurations'

const state = {
  account: {}
}

// getters
const getters = {
  account: state => state.account,
  authenticated: state => state.account.id > 0
}

// actions
const actions = {
  [types.DO_SIGNIN] ({ commit, state }, { username, password }) {
    return API.Account.signin({ username, password }).then(response => {
      commit(types.SET_AUTH_TOKEN, response.body)
    })
  },
  [types.DO_GET_ACCOUNT] ({ commit, state }) {
    return API.Account.get().then(response => {
      commit(types.SET_ACCOUNT, response.body)
    })
  },
  [types.DO_GET_ACCOUNT_UPDATE] ({ commit, state }, userDate) {
    return API.Account.update(userDate).then(response => {
      commit(types.SET_ACCOUNT, response.body)
    })
  }
}

// mutations
const mutations = {
  [types.SET_AUTH_TOKEN] (state, res) {
    const { token } = res
    if (token) {
      ApiConfigurations.setToken(token, true)
    }
  },
  [types.SET_ACCOUNT] (state, userData) {
    state.account = userData
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
