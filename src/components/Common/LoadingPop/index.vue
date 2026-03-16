<template>
    <div v-if="gloablLoading" @click="closePop" class="loading-pop" @touchmove.prevent @wheel.prevent >
        <div class="loading-content">
            <img src="@/assets/img/home/full-screen-loading.gif" alt="" srcset="">
        </div>
    </div>
</template>

<script setup>
import { useLoading } from '@/hooks/useLoading';

const { gloablLoading, close } = useLoading()

function closePop() {
    console.log('触发一次点击事件');
}

</script>

<style scoped>
.loading-pop {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 20px;
    border-radius: 10px;
    z-index: 999;

    /* loading内容 */
    .loading-content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 70px;
            height: 70px;
        }
    }
}

</style>