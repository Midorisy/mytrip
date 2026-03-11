<script setup>
// TabBar底栏
import TabBar from '@/components/Common/TabBar/index.vue'
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <div class="main">
    <router-view></router-view>
    <!-- 底部导航栏 -->
    <tab-bar v-if="!route.meta.hideTabbar"></tab-bar>
  </div>
</template>

<style scoped></style>
