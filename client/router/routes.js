
import AbstractApp from '../pages/AbstractApp'
import Home from '../pages/Home'
import Profile from '../pages/account/Profile'
import activitiesRoutes from './modules/activities'

const routes = [
  { path: '/app', component: AbstractApp,
    children: [
      { path: 'home', component: Home, meta: { hasTabs: true }},
      { path: '/account', component: Profile, meta: { role: true }},
      ...activitiesRoutes
    ]
  },
  // { path: '/test', component: ScenarioList },
  { path: '*', redirect: '/app/home' }
]

export default routes
