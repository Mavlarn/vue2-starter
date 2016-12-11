<template>
  <div>
    <h2>Scenario List</h2>
    <!--<mt-loadmore :top-method="refresh" :bottom-method="loadMore" :bottom-all-loaded="allLoaded" ref="loadmore">-->
      <ul>
        <li v-for="item in list">
          {{ item.innerName }} - {{item.showDate}}
          <button
            @click="goToDetail(item)">
            去购买
          </button>
        </li>
      </ul>
    <!--</mt-loadmore>-->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as types from '../../store/mutation-types'

export default {
  name: 'scenarioList',
  computed: mapGetters({
    list: 'scenarioList',
    allLoaded: 'allLoaded'
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
    goToDetail (item) {
      this.$store.commit(types.SCENARIOS_SELECT)
      this.$router.push('/app/scenarios/' + item.id)
    },
    ...mapActions({
      getScenarios: 'getScenarios'
    })
  },

  created () {
    console.log('scen list created.')
    // this.$store.dispatch('getScenarios')
  }
}
</script>
