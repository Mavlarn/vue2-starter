import Vue from 'vue'
import { Indicator, Toast } from 'mint-ui'

const config = {
  setToken: (token) => {
    Vue.http.headers.common['auth-token'] = token
  },
  configAuthToken: () => {
    Vue.http.options.timeout = global.CONSTANTS.REQUEST_TIMEOUT
    Vue.http.options.root = global.CONSTANTS.API_PREFIX
    Vue.http.headers.common['version'] = global.CONSTANTS.REQUEST_VERSION
  },
  configLoading: () => {
    Vue.http.interceptors.push((request, next) => {
      Indicator.open()
      next((response) => {
        console.log('request done, ${response.status} :' + new Date())
        setTimeout(() => {
          Indicator.close()
          console.log(`Close Indicator:` + new Date())
        }, 1000)

        if (response.ok) {
          console.log(`success handler ` + new Date())
        } else {
          switch (response.status) {
            // 根据不同的错误，处理
            case 401:
              this.setToken() // remove token
              break
            default:
              Toast({ message: '服务器错误，请稍后再试。' })
          }
          console.warn(`error handler ` + new Date())
        }
      })
    })
  }
}
export default config
