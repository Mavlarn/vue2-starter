import API from '../../api'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  scenarioList: [],
  selectedScenario: null,
  pageInfo: { page: 0, size: 20 },
  allLoaded: true
}

// getters
const getters = {
  scenarioList: state => state.scenarioList
  // faverateScenarioList: state => {
  //   return state.scenarioList.filter(scenario => scenario.name.contains('周杰伦'))
  // }
}

// actions
const actions = {
  getScenarios ({ commit, state }) {
    return API.Scenario.inSale().then(response => {
      commit(types.SCENARIOS_GET, response.body.content)
    })
  },
  refresh ({ commit, dispatch, state }) {
    state.pageInfo.page = 0
    commit(types.SCENARIOS_RESET)
    return dispatch('getScenarios')
  },
  searchScenarios ({ dispatch, state, commit }, query) {
    commit(types.SCENARIOS_RESET)
    return API.Scenario.searchByName({ query: query }).then(response => {
      commit(types.SCENARIOS_GET, response.body)
    })
  },
  loadMore ({ dispatch, state }) {
    state.pageInfo.page = state.pageInfo.page + 1
    return dispatch('getScenarios')
  }
}

// mutations
const mutations = {
  [types.SCENARIOS_GET] (state, list) {
    state.allLoaded = list.length < state.pageInfo.size
    state.scenarioList = state.scenarioList.concat(list)
  },
  [types.SCENARIOS_RESET] (state) {
    state.scenarioList = []
  },
  [types.SCENARIOS_SELECT] (state, selected) {
    state.selectedScenario = selected
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
