<template>
  <div id="app">
    <!-- 头部组件 -->
    <LayoutHeader />
    <div class="wrapper">
      <!-- 一级路由组件 -->
      <router-view />
    </div>
    <!-- 尾部组件 -->
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutHeader from '@/components/layout-header'
import LayoutFooter from '@/components/layout-footer'
export default {
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>

<style lang="less">
</style>
