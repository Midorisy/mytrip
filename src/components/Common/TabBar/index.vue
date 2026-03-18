<template>
    <div class="tabbar">
        <Tabbar v-model="currentIndex">
            <template v-for="(item, index) in tabbarList" :key="index">
                <TabbarItem :to="item.path">
                    <template v-slot:icon>
                        <img :src="getImageUrl(item[index !== currentIndex ? 'img' : 'imageActive'])">
                    </template>
                    <template v-slot:default>
                        <span class="text">{{ item.text }}</span>
                    </template>
                </TabbarItem>
            </template>
        </Tabbar>
    </div>
</template>

<script setup>
import { Tabbar, TabbarItem } from 'vant';
import { getImageUrl } from '@/utils/getAssetURL'
import tabbarList from '@/assets/jsons/tabbar';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

// 初始path
const currentIndex = ref(0)
const route = useRoute()

// 监听当前页面的path
watch(() => route.path, (newPath) => {
    const nowPathIndex = tabbarList.findIndex((item) => {
        return newPath === item.path
    })
    if (nowPathIndex === -1) {
        return
    }
    // 赋值给当前index
    currentIndex.value = nowPathIndex
})

</script>

<style scoped>
/* 导航栏 */
.tabbar {
    --van-tabbar-item-active-color: #ff9854;
    --van-tabbar-height:55px;
    height: 55px;
    background-color: pink;
    &:deep(.van-tabbar){
        position: static;
    }

    img {
        height: 28px;
    }

    .text {
        font-size: 12px;
    }

}
</style>