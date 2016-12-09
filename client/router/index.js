import Vue from 'vue'
import Router from 'vue-router'

import hooks from './hooks'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes
})

hooks(router)

export default router
