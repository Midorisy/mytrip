<template>
    <div class="city">
        <search-city></search-city>
        <keep-alive>
            <city-tab></city-tab>
        </keep-alive>
    </div>
</template>

<script setup>
import SearchCity from '@/components/SearchCity/SearchCity.vue';
import CityTab from '@/components/CityTab/CityTab.vue';
</script>

<style scoped></style>