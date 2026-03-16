<template>
    <div class="fixed-search">
        <Search class="search" placeholder="关键字/位置/民宿名">
            <template #left-icon></template>
            <template #left>
                <div class="dateSelect">
                    <div class="checkin"><span>住</span> {{ moveInDate.format('MM.DD') }}</div>
                    <div class="checkout"><span>离</span> {{ moveOutDate.format('MM.DD') }}</div>
                </div>
            </template>
            <template #right-icon>
                <Icon class="search-icon" name="search" />
            </template>
        </Search>
    </div>
</template>

<script setup>
import { Search, Icon } from 'vant';
import { useHouseDataStore } from '@/store/useHouseDataStore/useHouseDataStore';
import { storeToRefs } from 'pinia';
const {moveInDate,moveOutDate} = storeToRefs(useHouseDataStore());
</script>

<style scoped>
.fixed-search {
    --van-search-padding: 5px 15px 5px 30px;
    --van-search-input-height: 45px;
    --van-field-placeholder-text-color: #999;
    width: 100%;
    .van-search.search {
        width: 100%;
        height: 71px;

        /* input搜索框前面的日期选择 */
        .dateSelect {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 45px;
            background-color: #f7f8fa;
            padding: 0 5px;
            font-size: 10px;
            color: #333;
            border-radius: 5px 0 0 5px;
            border-right: 2px solid #fff;

            span {
                color: #999;
            }

            &::after {
                content: '';
                position: absolute;
                top: 27px;
                right: 0px;
                width: 0;
                height: 0;
                border-left: 3px solid transparent;
                border-right: 3px solid #999;
                border-top: 3px solid transparent;
                border-bottom: 3px solid #999;
            }
        }
        .search-icon{
            color: #999;
            font-size: 24px;
        }
    }
}
</style>