<script setup>
import TabBar from '@/components/TabBar/index.vue'
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
// watch(route, (newVal, oldVal) => {
//   console.log('每次进入新页面都会变化');
// })
console.log('每次进入新页面都会变化')
</script>

<template>
  <div class="main">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.hideTabbar"></tab-bar>
  </div>
</template>

<style scoped></style>
