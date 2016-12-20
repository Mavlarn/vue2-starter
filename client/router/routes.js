
import AbstractApp from '../pages/AbstractApp'
import Home from '../pages/Home'
import Sign from '../pages/account/Sign'
import Profile from '../pages/account/Profile'
import activitiesRoutes from './modules/activities'

const routes = [
  { path: '/app', component: AbstractApp,
    children: [
      { path: 'home', component: Home, meta: { hasTabs: true, title: '首页' }},
      { name: 'signin', path: 'signin', component: Sign },
      { path: 'account', component: Profile, meta: { role: true, title: '我的' }},
      ...activitiesRoutes
    ]
  },
  // { path: '/test', component: ScenarioList },
  { path: '*', redirect: '/app/home' }
]

export default routes
