import Vue from 'vue'
import { Indicator } from 'mint-ui'

const config = {
  configDefaultAuth: () => {
    Vue.http.options.root = '/api'
    Vue.http.options.timeout = 15 * 1000 // ten seconds
    Vue.http.headers.common['version'] = 'v1'
  },
  configLoading: () => {
    Vue.http.interceptors.push((request, next) => {
      Indicator.open()
      next((response) => {
        console.log('request done, ${response.status} ' + new Date())
        setTimeout(() => {
          Indicator.close()
          console.log(`Close Indicator` + new Date())
        }, 1000)

        if (response.ok) {
          console.log(`success handler ` + new Date())
        } else {
          console.warn(`error handler ` + new Date())
        }

        return response // to success callback or error callback
      })
    })
  }
}
export default config
