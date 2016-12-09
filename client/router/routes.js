
import { Home, User } from '../pages'

const routes = [
  { path: '/index', component: Home },
  { path: '/user', component: User, meta: { role: true }},
  { path: '*', redirect: 'index' }
]

export default routes
