<template>

  <h2>Scenario Detail</h2>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'scenarioDetail',
  computed: mapGetters({
    list: 'selectedScenario'
  }),
  methods: {
  },

  created () {
    this.$store.dispatch('getScenarios')
  }
}
</script>
