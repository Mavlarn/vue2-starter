<template>
  <div class="home">
    <img src="../assets/logo.png">
    <p>{{ msg }}</p>
    <h3>标题</h3>
    <div>
      <ScenarioSearch></ScenarioSearch>
    </div>
  </div>
</template>

<script>
import { ScenarioSearch } from '../components'

export default {
  name: 'home',
  components: {
    ScenarioSearch
  },
  data () {
    return {
      msg: '首发、零元抽、一元抢、二手票、尾票...'
    }
  }
}
</script>
