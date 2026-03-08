<template>
    <div class="home">
        <nav-bar></nav-bar>
        <home-banner></home-banner>
        <home-location></home-location>
        <order-collection></order-collection>
        <hot-tags></hot-tags>
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
import NavBar from './NavBar/NavBar.vue';
import HomeBanner from './HomeBanner/HomeBanner.vue';
import HomeLocation from './HomeLocation/HomeLocation.vue';
import OrderCollection from './OrderCollection/OrderCollection.vue';
import HotTags from './Hot-Tags/HotTags.vue';
</script>

<style scoped>
.home{
.home-search {
    text-align: center;
    padding: 0 20px;

    .search-button{
        border: none;
        background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
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