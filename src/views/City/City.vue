<template>
    <div class="city">
        <!-- 顶部城市区域位置 -->
        <search-city></search-city>

        <!-- 滑动选择城市列表模块 -->
        <keep-alive>
            <city-list></city-list>
        </keep-alive>
    </div>
</template>

<script setup>
import SearchCity from './components/SearchCity/SearchCity.vue';
import CityList from './components/CityList/CityList.vue';
</script>

<style scoped></style>