<template>
  <div class="signup">
    <h2 class="text-center">注册</h2>

    <mt-field label="手机号" placeholder="手机号" v-model.number="username" type="number" required></mt-field>
    <mt-field label="验证码" placeholder="手机验证码" v-model="dynamicKey" type="number" required></mt-field>
    <mt-field label="密码" placeholder="密码" v-model="password" type="password" required></mt-field>
    <mt-button @click="register" type="primary">注册</mt-button>
    <div>
      <mt-button @click="$emit('showSignin')" type="primary">去登录</mt-button>
      <mt-button slot="right" @click="$router.go(-1)">取消</mt-button>
    </div>
  </div>
</template>

<script>
// import * as types from '../../store/types'

export default {
  data () {
    return {
      username: '',
      password: '',
      dynamicKey: null
    }
  },
  // 在 `methods` 对象中定义方法
  methods: {
    register: function () {

    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
