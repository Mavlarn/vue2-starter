// import Vue from 'vue'

import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import configurations from './configurations'
configurations.configLoading()

export default {
  Account: {
    get: Vue.resource('/api/user/account'),
    signin: Vue.resource('/api/user/authenticate')
  },
  SysConfig: Vue.resource('user/sysConfig'),
  changePassword: Vue.resource('/api/user/change_password{/action}', {}, {
    request: { method: 'POST', url: '/api/user/change_password/request' },
    change: { method: 'POST', url: '/api/user/change_password/finish' }
  })

}
