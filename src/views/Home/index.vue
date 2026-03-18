<template>
  <div class="home">
    <div class="content">
      <!-- 吸顶的搜索工具栏 -->
      <fixed-search class="fixed-search" v-if="searchBarisShow"></fixed-search>
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
        <Button type="large" round block class="search-button">开始搜索</Button>
        <span class="text">民宿预定服务由黑马网提供</span>
      </div>
      <WaterFall></WaterFall>
      <div class="nomore"><span>没有更多了</span></div>
    </div>
    <div class="footer">
      <on-record></on-record>
      <div class="placeholder">占位模块</div>
    </div>
  </div>
</template>

<script setup>
import { Button } from "vant";
import NavBar from "./components/NavBar/NavBar.vue";
import HomeBanner from "./components/HomeBanner/HomeBanner.vue";
import HomeLocation from "./components/HomeLocation/HomeLocation.vue";
import OrderCollection from "./components/OrderCollection/OrderCollection.vue";
import HotTags from "./components/Hot-Tags/HotTags.vue";
import WaterFall from "./components/WaterFall/WaterFall.vue";
import FixedSearch from "@/components/home/FixedSearch.vue";
import onRecord from "@/components/home/OnRecord.vue";
import { throttle } from "radash";
import { onMounted, ref } from "vue";

const searchBarisShow = ref(false);

// 页面需要滚动的距离
const pageScroll = document.documentElement.clientHeight - 250;
// 监听页面滚动事件
window.addEventListener(
  "scroll",
  throttle({ interval: 100 }, () => {
    // 监听页面上方已滚动的距离
    const scrollTop = document.documentElement.scrollTop || 0;
    if (scrollTop > pageScroll) {
      searchBarisShow.value = true;
    } else {
      searchBarisShow.value = false;
    }
  }),
);

onMounted(() => { });
</script>

<style scoped>
.home {
  .content {
    .home-search {
      text-align: center;
      padding: 0 20px;
      background-color: #fff;

      .search-button {
        border: none;
        background-image: var(--button-linear-gradient);
        font-size: 18px;
        font-weight: 400;
        color: #fff;
      }

      .text {
        line-height:30px;
        font-size: 10px;
        color: #ccc;
      }
    }

    .fixed-search {
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 999;
    }

    .nomore {
      text-align: center;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      color: #999;
      background-color: var(--waterFall-background-color);
    }
  }

  .footer {

    /* 占位模块   */
    .placeholder {
      width: 100%;
      height: 55px;
      line-height: 55px;
      background-color: #fff;
    }
  }
}
</style>
