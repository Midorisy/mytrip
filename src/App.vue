<script setup>
import TabBar from '@/components/TabBar/index.vue'
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <div class="main">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.hideTabbar"></tab-bar>
  </div>
</template>

<style scoped></style>
