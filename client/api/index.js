// import Vue from 'vue'

import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import configurations from './configurations'
configurations.configLoading()

export default {
  Scenario: Vue.resource('/api/hunt/scenarios{/type}', {}, {
    inSale: { method: 'GET', url: '/api/hunt/scenarios/inSale' },
    searchByName: { method: 'GET', url: '/api/hunt/scenarios/_search/byNames' },
    detail: { method: 'GET', url: '/api/hunt/scenarios{/id}' }
  }),
  Account: {
    get: Vue.resource('/api/user/customer/account'),
    signin: Vue.resource('/api/user/customer/authenticate'),
    changePassword: Vue.resource('/api/user/customer/change_password{/action}', {}, {
      request: { method: 'POST', url: '/api/user/customer/change_password/request' },
      change: { method: 'POST', url: '/api/user/customer/change_password/finish' }
    })
  }

}
