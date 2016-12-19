
/*
 * 针对某一个组件或者路由的钩子，
 * 可以参见：http://router.vuejs.org/zh-cn/advanced/navigation-guards.html
 */
import { Toast } from 'mint-ui'
import * as types from '../store/types'

const hooks = (router) => {
  const checkUserLoggedIn = () => {
    return false
  }

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.hasTabs)) {
      router.app.$store.commit(types.SET_HAS_TAB)
    } else {
      router.app.$store.commit(types.SET_HAS_TAB, null, false)
    }

    if (to.matched.some(record => record.meta.role) && !checkUserLoggedIn()) {
      Toast({ message: '请先登陆', position: 'bottom' })
      next({ name: 'signin', query: { redirect: to.fullPath }})
    } else {
      next() // 确保一定要调用 next()
    }
  })
}

export default hooks
