<template>
    <div class="search-city">
        <Search class="search-inner" placeholder="城市/区域/位置" show-action @cancel="toHomePage" @onSearch="onSearch"
            shape="round">

        </Search>
    </div>
</template>

<script setup>
import { Search } from 'vant';
import { useRouter } from 'vue-router';

const router = useRouter()

function onSearch(params) {

}
/**
 * 点击取消按钮返回首页
 */
function toHomePage() {
    router.push({
        path: '/home'
    })
}
</script>

<style scoped>
.search-city {
    --van-search-left-icon-color: var(--primary-color);
    --van-search-input-height: 28px;
    --van-search-padding: 8px 20px;
    border-bottom: 1px solid #eee;

    :deep(input[class="van-field__control"]::placeholder) {
        color: #999;
    }
}
</style>