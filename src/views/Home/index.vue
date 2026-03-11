<template>
    <div class="home">
        <!-- 顶部标题 -->
        <nav-bar></nav-bar>
        <!-- 图片展示栏 -->
        <home-banner></home-banner>
        <!-- 城市定位模块 -->
        <home-location></home-location>
        <!-- 用户订单收集、入住日期选择模块 -->
        <order-collection></order-collection>
        <!-- 热门标签模块 -->
        <hot-tags></hot-tags>
        <!-- 开始搜索按钮模块 -->
            <div class="home-search">
                <Button 
                type="large"
                round 
                block
                class="search-button"
                >开始搜索</Button>
                <span class="text">民宿预定服务由黑马网提供</span>
            </div>
    </div>
</template>

<script setup>
import { Button } from 'vant';
import NavBar from './components/NavBar/NavBar.vue';
import HomeBanner from './components/HomeBanner/HomeBanner.vue';
import HomeLocation from './components/HomeLocation/HomeLocation.vue';
import OrderCollection from './components/OrderCollection/OrderCollection.vue';
import HotTags from './components/Hot-Tags/HotTags.vue';
</script>

<style scoped>
.home{
.home-search {
    text-align: center;
    padding: 0 20px;

    .search-button{
        border: none;
        background-image: var(--button-linear-gradient);
        font-size: 18px;
        font-weight: 400;
        color: #fff;
    }
    .text {
        font-size:10px;
        color: #999;
    }
}
}

</style>