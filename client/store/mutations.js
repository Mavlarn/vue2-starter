import * as types from './types'

const mutations = {
  [types.SET_TITLE] (state, title) {
    state.title = title
  },
  [types.SET_SELECTED_TAB] (state, tabId) {
    state.selectedTab = tabId
  },
  [types.SET_HAS_TAB] (state, hasTabs = true) {
    state.hasTabs = hasTabs
  },
  [types.SET_SYS_CONFIG] (state, config) {
    state.sysConfig = config
  }
}

export default mutations
