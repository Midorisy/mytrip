<template>
    <div class="tabbar">
        <Tabbar>

            <TabbarItem>123</TabbarItem>
            <TabbarItem>123</TabbarItem>
        </Tabbar>
        <!-- <template v-for="(item, index) in tabbarList" :key="item.path">
            <div class="tab-bar-item" :class="{ isActive: index === currentIndex }" @click="clickTabItem(index, item)">
                <img :src="getImageUrl(item[index !== currentIndex ? 'img' : 'imageActive'])">
                <span>{{ item.text }}</span>
            </div>
        </template> -->

    </div>
</template>

<script setup>
import { Tabbar, TabbarItem } from 'vant';
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const currentIndex = ref(0)



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
    height: 50px;
    border-top: 2px solid #ccc;
    width: 100%;
    position: fixed;
    top: auto;
    bottom: 0;
    left: auto;
    right: auto;
    display: flex;
    justify-content: space-around;

    /* 导航栏内部的每一个按钮 */
    .tab-bar-item {
        font-size: 14px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &.isActive {
            color: var(--primary-color);
        }

        img {
            height: 26px;
        }
    }
}
</style>