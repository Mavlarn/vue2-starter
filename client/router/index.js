import Vue from 'vue'
import VueRouter from 'vue-router'

import hooks from './hooks'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

hooks(router)

export default router
