<script setup>
// TabBar底栏
import TabBar from '@/components/Common/TabBar/index.vue'
import LoadingPop from '@/components/Common/LoadingPop/index.vue'
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <div class="main">
    <loading-pop></loading-pop>
    <router-view></router-view>
    <!-- 底部导航栏 -->
    <tab-bar class="tabbar" v-if="!route.meta.hideTabbar"></tab-bar>
  </div>
</template>

<style scoped>
 .main {
  width: 100%;

  .tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99;
  }
 }
</style>
