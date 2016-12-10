import Vue from 'vue'

const account = {
  get: Vue.resource('/api/user/customer/account'),
  signin: Vue.resource('/api/user/customer/authenticate'),
  changePassword: Vue.resource('/api/user/customer/change_password')
}

export default account
