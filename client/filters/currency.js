import Vue from 'vue'

// 显示钱
Vue.filter('currency', (value) => '¥ ' + (value || 0).toFixed(2))
