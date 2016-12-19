<template>
  <div class="sign">
    <transition enter-active-class="animated flipInY">
      <Signin v-show="show == 'signin'" v-on:showSignup="showSignup">signin</Signin>
    </transition>
    <transition enter-active-class="animated flipInY">
      <Signup v-show="show == 'signup'" v-on:showSignin="showSignin">signup</Signup>
    </transition>
  </div>
</template>

<script>
// import * as types from '../../store/types'
import Signin from './Signin'
import Signup from './Signup'

export default {
  components: {
    Signin,
    Signup
  },
  data () {
    return {
      show: 'signin'
    }
  },

  methods: {
    showSignin: function () {
      this.show = null
      setTimeout(() => {
        this.show = 'signin'
      }, 10)
      // this.show = 'signin'
    },
    showSignup: function () {
      this.show = 'signup'
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
