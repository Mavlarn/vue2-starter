
import { Home, AbstractApp, Profile } from '../pages'
import scenarioRoutes from './scenario'

const enterApp = function (to, from, next) {
  console.log('enter root....')
  setTimeout(next, 1000)
}

const routes = [
  { path: '/app', component: AbstractApp, beforeEnter: enterApp,
    children: [
      { path: 'home', component: Home },
      { path: '/account', component: Profile, meta: { role: true }},
      ...scenarioRoutes
    ]
  },
  // { path: '/test', component: ScenarioList },
  { path: '*', redirect: '/app/home' }
]

export default routes
