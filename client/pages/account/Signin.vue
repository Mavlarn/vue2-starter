<template>
  <div class="signin">
    <h2 class="text-center">登录</h2>

    <mt-field label="手机号" placeholder="手机号" v-model.number="username" type="number" required></mt-field>
    <mt-field label="密码" placeholder="密码" v-model="password" type="password" required></mt-field>
    <mt-button @click="doSignin" type="primary">登录</mt-button>
    <div>
      <mt-button @click="$emit('showSignup')" type="primary">去注册</mt-button>
      <mt-button slot="right" @click="$router.go(-1)">取消</mt-button>
    </div>
  </div>
</template>

<script>
import * as types from '../../store/types'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  // 在 `methods` 对象中定义方法
  methods: {
    doSignin: function () {
      const { username, password } = this
      this
      .$store.dispatch(types.DO_SIGNIN, { username, password })
      .then(() => { // success
        const { redirect } = this.$router.history.current.query
        const replaceOption = redirect ? { path: redirect } : { name: 'home' }
        this.$router.replace(replaceOption) // 替换，免得后退重新进入登陆页面
      }, (err) => { // error
        console.warn(1, err)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
