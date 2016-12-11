<template>
  <div class="counter-wrapper">
    <div>
        <mt-field placeholder="搜索感兴趣的演出、赛事"></mt-field>
        <mt-button type="primary" @click="search">搜索</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    search () {
      return this.$store.dispatch('getScenarios').then(() => this.$router.push('/app/scenarios'))
    }
  }
}
</script>

<style lang="stylus">
.counter
  cursor: pointer
  margin: 100px auto
  border-radius: 3px
  width: 200px
  height: 200px
  text-align: center
  line-height: 200px
  font-size: 5rem
  background-color: #f0f0f0
  user-select: none
</style>
