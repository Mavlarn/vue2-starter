<template>
  <div class="home">
    <img src="../assets/logo.png">
    <h3>标题</h3>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '欢迎使用Vue...'
    }
  }
}
</script>
