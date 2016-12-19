import API from '../api'
import * as types from './types'

const actions = {
  [types.DO_GET_SYS_CONFIG] ({ commit }) {
    API.SysConfig.get().then(() => {
      commit(types.SET_SYS_CONFIG)
    })
  }
}

export default actions
