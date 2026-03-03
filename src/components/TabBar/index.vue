<template>
    <div class="tabbar">
        <Tabbar v-model="currentIndex">
            <template v-for="(item, index) in tabbarList">
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
import tabbarList from '@/assets/data/tabbar';
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const currentIndex = ref(1)



function clickTabItem(index, item) {
    currentIndex.value = index
    router.push({
        path: item.path
    })
    console.log(currentIndex.value);

}

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