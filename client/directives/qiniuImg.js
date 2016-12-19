import Vue from 'vue'

// 图片服务路径
Vue.directive('qiniu-img', {
  bind: function (el, binding, vnode, oldVnode) {
    if (vnode.data.attrs.src) {
      el.setAttribute('src', global.CONSTANTS.STORAGE_SERVER + vnode.data.attrs.src)
    }
  }
})
