<template>
    <div v-show="globalLoading" @click="closePop" class="loading-pop"
    @wheel.prevent  @touchmove.prevent 
      >
        <div class="loading-content">
            <img src="@/assets/img/home/full-screen-loading.gif" alt="" srcset="">
        </div>
    </div>
</template>

<script setup>
import { useLoading } from '@/hooks/useLoading';
import { onMounted } from 'vue';

const { globalLoading, close } = useLoading()

onMounted(() => {
    console.log(globalLoading.value);
})


function closePop() {
    console.log('触发一次点击事件');
}

</script>

<style scoped>
.loading-pop {
    position: relative;
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #ddd;
    z-index: 999;

    /* loading内容 */
    .loading-content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 56px;
            height: 56px;
        }
    }
}

</style>