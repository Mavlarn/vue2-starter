<template>
  <div id="abs-root">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    console.log('get global data...')
  }
}
</script>
