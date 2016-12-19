import Vue from 'vue'
import moment from 'moment'

// 时间
Vue.filter('date', (value) => {
  return moment(value).format('YYYY-MM-DD h:mm')
})
Vue.filter('shotDate', (value) => {
  return moment(value).format('YYYY-MM-DD')
})
Vue.filter('dateTime', (value) => {
  return moment(value).format('YYYY-MM-DD h:mm:ss')
})
Vue.filter('shotDateTime', (value) => {
  return moment(value).format('MM-DD h:mm')
})
