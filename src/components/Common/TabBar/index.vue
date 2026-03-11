<template>
    <div class="tabbar">
        <Tabbar v-model="currentIndex">
            <template v-for="(item, index) in tabbarList" :key="index" >
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
import { ref } from 'vue';



const currentIndex = ref(1)



</script>

<style scoped>
/* 导航栏 */
.tabbar {
    --van-tabbar-item-active-color: #ff9854;

    img {
        height: 24px;
    }

    .text {
        font-size: 14px;
    }

}
</style>