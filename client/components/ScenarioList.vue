<template>

  <mt-loadmore :top-method="refresh" :bottom-method="loadMore" :bottom-all-loaded="allLoaded" ref="loadmore">
    <ul>
      <li v-for="item in list">
        {{ item.innerName }} - {{item.showDate}}
        <button
          @click="addToDetail(p)">
          去购买
        </button>
      </li>
    </ul>
  </mt-loadmore>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'scenarioList',
  computed: mapGetters({
    list: 'scenarioList'
  }),
  methods: {
    refresh (id) {
      this.$store.dispatch('refresh').then(() => {
        this.$refs.loadmore.onTopLoaded(id)
      })
    },
    loadMore (id) {
      this.$store.dispatch('loadMore').then(() => {
        this.$refs.loadmore.onBottomLoaded(id)
      })
    },
    ...mapActions({
      getScenarios: 'getScenarios'
    })
  },

  created () {
    this.$store.dispatch('getScenarios')
  }
}
</script>
