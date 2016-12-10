
import { Home, AbstractApp, Profile } from '../pages'
import scenarioRoutes from './scenario'

const enterApp = function (to, from, next) {
  console.log('enter root....')
  setTimeout(next, 5000)
}

const routes = [
  { path: '/app', component: AbstractApp, beforeEnter: enterApp,
    children: [
      { path: '/app/home', component: Home },
      ...scenarioRoutes
    ]
  },
  { path: '/account', component: Profile, meta: { role: true }},
  { path: '*', redirect: '/app/home' }
]

export default routes
