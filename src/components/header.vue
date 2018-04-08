<template>
  <div class="header">
    <el-menu :default-active="$route.path" mode="horizontal" router>
      <el-menu-item v-for="item in nav" :key="item.index" :index="item.index">{{item.text}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HaiHeader extends Vue {
  // data
  nav: Array<object> = [
    {
      text: '列表页',
      index: '/home'
    },
    {
      text: '表单页',
      index: '/form'
    },
    {
      text: '关于',
      index: '/about'
    }
  ]
}
</script>

<style lang="scss">
  .header {
    margin-bottom: 20px;
    .header-item {
      height: 60px;
      line-height: 60px;
      padding: 0 10px;
    }
  }
</style>
