<template>
  <div class='fixed-button text-center' @click='action'>{{ text }}</div>
</template>

<script>
export default {
  props: ['action', 'text']
}
</script>

<style lang="stylus">
.fixed-button
  position: fixed
  height: 54px
  line-height: 54px
  left: 0
  right: 0
  bottom: 0
  background-color: #f34956
  color: white
  font-size: 18px
</style>
