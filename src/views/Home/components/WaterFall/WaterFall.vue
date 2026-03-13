<template>
    <div class="water-fall">
        <div class="title">热门精选</div>
        <div class="house-list">
            <div class="first-card">
                <div class="city-name">
                    <!-- <img src="" alt="" class="dot" > -->
                    <div class="name" >{{ firstCardList.title }}</div>
                    <div class="text">{{ firstCardList.subTitle }}</div>
                </div>
                <div class="hot-recommend" v-for="(area) in firstCardList.subLinks" :key="area.textLink.geoPositionId" >
                    <div class="name">{{ area.title }}</div>
                    <div class="user-select">
                        <span class="light" >{{ area.textLink.title }}</span>{{ area.textLink.text }}
                    </div>
                </div>
            </div>
            <house-type class="item-card" :card="card" v-for="(card,index) in cardList" :key="index" ></house-type>
        </div>
    </div>
</template>

<script setup>
import HouseType from '@/components/home/HouseType.vue';
import { getCardStream } from '@/apis/home/getCardStreamApi';
import { computed, onMounted,ref } from 'vue';

const firstCardList = ref({})
const cardList = ref([])

onMounted(async() => {
    const result = await getCardStream()
    
    firstCardList.value = result.data.data.stream[0].data
    cardList.value = result.data.data.stream.slice(1)
    console.log(cardList.value);
})

</script>

<style scoped>
    .water-fall{
        position: relative;
        height: 550px;
        margin-bottom:250px;
        background-color: #fff;
        margin-top: 10px;
        padding: 0 20px;
        padding-top: 60px;

        /* 渐变背景 */
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 50px;
            background: linear-gradient(to bottom , #eee,white);
        }
        /* 热门精选 */
        .title {
            font-size: 18px;
            margin-bottom: 15px;
            height: 30px;
            line-height: 30px;
            background-image: url('@/assets/img/home/header_bg.png');
            background-size: 60px 24px;
            background-repeat: no-repeat;
            background-position: 10px 0px ;
        }
        .house-list{

            column-count: 2;           /* 列数 */
            column-gap: 20px;   


            /* 第一个导航卡片 */
            .first-card {
                color: #333;
            /* break-inside: avoid;       防止项目被分割 */
            margin-bottom: 10px;
            width: 167px;
            height: 238px;
            border-radius: 10px;
            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;

            /* 热门城市和入住地 */
            .city-name{
                display: flex;
                flex-direction: column;
                justify-content: center;
                /* background-color: pink; */
                text-align: center;
                width: 147px;
                height: 50px;
                background-image: url('@/assets/img/houseCard/dot.png');
                background-repeat: no-repeat;
                background-size: 150px 6px;
                background-position: 0 15px;
                .name{
                    font-size: 18px;
                    font-weight: 600;
                }
                .text {
                    font-size: 10px;
                    color: #999;
                }
            }
            /* 推荐区域百分比 */
            .hot-recommend{
                display: flex;
                flex-direction: column;
                justify-content: center;

                background-color: var(--light-background-color);
                text-align: center;
                width: 147px;
                height: 46px;
                border-radius: 120px;
                .name{
                    font-size: 13px;
                    margin-bottom: 2px;
                }
                .user-select{
                    font-size: 10px;
                    color: #999;
                    .light{
                        color: var(--primary-color);
                    }
                }
            }

            }
        }
    }
</style>