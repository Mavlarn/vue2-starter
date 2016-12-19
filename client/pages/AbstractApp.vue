<template>
  <div id="abs-root">
    <mt-header v-bind:title="title">
      <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
    </mt-header>

    <router-view></router-view>

    <mt-tabbar v-model="selectedTab" v-if="hasTabs">
      <mt-tab-item id="home" @click.native="selectTab('home')">
        <i slot="icon" class="icon iconfont icon-lg icon-shouye"></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="activities" @click.native="selectTab('activities')">
        <i slot="icon" class="icon iconfont icon-lg icon-huodong"></i>
        活动
      </mt-tab-item>
      <mt-tab-item id="account" @click.native="selectTab('account')">
        <i slot="icon" class="icon iconfont icon-lg icon-20151209tubiaolianxizhuanhuan13"></i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

import * as types from '../store/types'
import store from '../store'

export default {
  beforeRouteEnter (to, from, next) {
    console.log('get global data...')
    setTimeout(next, 100)
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    console.log('get some other data...')
    store.dispatch(types.DO_GET_SYS_CONFIG)
    if (!this.$store.authenticated) {
      console.log('get data based on user.')
    }
  },
  computed: mapGetters({
    selectedTab: 'selectedTab',
    hasTabs: 'hasTabs'
  }),
  methods: {
    selectTab (tabId) {
      this.$store.commit(types.SET_SELECTED_TAB, tabId)
      this.$router.push(tabId)
    }
  }
}
</script>
