<template>
    <div class="top-bar">
        <NavBar left-arrow left-text="黑马" @click-left="onClickLeft" title="房屋详情" >
            <template #right>
                <img class="right-menu" src="@/assets/img/home/icon-right-menu.png" alt="" srcset="">
            </template>

        </NavBar>
    </div>
</template>

<script setup>
import { NavBar } from 'vant';
import { useRouter } from 'vue-router';
const router = useRouter()

function onClickLeft() {
    router.back()
}

</script>

<style scoped>
.top-bar{
    --van-nav-bar-height:44px;
    --van-nav-bar-arrow-size:22px;
    --van-nav-bar-icon-color:var(--primary-color);
    --van-nav-bar-text-color:var(--primary-color);

    /* 样式穿透部分 */
    &:deep(.van-nav-bar){
        .van-nav-bar__title{
            font-weight: 400;
            font-size: 15px;
        }
    }


    /* 图片大小 */
    .right-menu{
        width: 20px;
        height: 16px;
    }
}

</style>