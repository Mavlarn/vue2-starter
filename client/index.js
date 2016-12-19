import './promise-polyfill'

import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import './constants'
import './directives'
import './filters'

import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './assets/main.styl'

import configurations from './api/configurations'
configurations.configLoading()

Vue.use(MintUI)
sync(store, router)

var Root = Vue.extend({
  template: '<div id="app"><router-view></router-view></div>'
})

const app = new Vue({
  router,
  store,
  render: h => h(Root)
})
app.$mount('#app')
