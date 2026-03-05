<template>
    <div class="city-tab">
        <Tabs v-model:active="active" line-height="2px" title-active-color="#ff9854">
            <template v-for="citys in cityArea">
                <Tab :name="citys" :title="cityList[citys].title"></Tab>
            </template>
        </Tabs>
        <div class="content">
            <IndexBar highlight-color="#999" :index-list="indexList" :sticky="false">
                <IndexAnchor class="hot-title" index="#"> 热门城市 </IndexAnchor>
                <Cell>
                    <template #title>
                        <div class="hot-cities">
                            <div class="city-cell" v-for="hotCity in contentData.hotCities" :key="hotCity.cityId">
                                <span class="cityName">{{ hotCity.cityName }}</span>
                                <span v-if="hotCity.hot" class="fire-icon"></span>
                            </div>
                        </div>
                    </template>
                </Cell>

                <template v-for="(city, index) in contentData.cities" :key="city.group">
                    <IndexAnchor :index="city.group" />
                    <template v-for="(item, index) in city.cities" :key="item.cityId">
                        <Cell :title="item.cityName" />
                    </template>
                </template>
            </IndexBar>
        </div>
    </div>
</template>

<script setup>
import { Tab, Tabs, IndexBar, IndexAnchor, Cell } from "vant";
import { computed, onMounted, ref, watch } from "vue";
import { useCityStore } from "@/store/useCityStore/useCityStore";
import { storeToRefs } from "pinia";

//标签栏绑定的数据
const active = ref(null);

// 获取cityStore仓库
const cityStore = useCityStore();
cityStore.getCityList();
const { cityList, cityGroup, cityGroupOverSea } = storeToRefs(cityStore);

// 收集cityArea名字列表
const cityArea = Object.keys(cityList.value).slice(0, 2);

// 初始化active
active.value = cityArea[0];

// content板块内的数据
const contentData = computed(() => {
    return cityList.value[active.value];
});


// index栏的内容
const indexList = computed(() => {
    const cityLetters = contentData.value.cities.map((item) => {
        console.log(contentData.hotCities);
        return item.group;
    });

    return ["#", ...cityLetters];
});

onMounted(() => { });
</script>

<style scoped>
.city-tab {
    --van-tabs-bottom-bar-color: var(--primary-color);
    --van-tabs-line-height: 32px;
    --van-index-anchor-line-height: 42px;

    :deep(.van-tab--active) {
        font-weight: 400;
    }

    :deep(.van-index-bar__index) {
        color: #999;
        font-weight: 400;
    }

    /* 热门城市模块 */
    .content {
        height: calc(100vh - 32px - 44px);
        background-color: #f1f3f6;
        overflow-y: auto;

        /* 组件内的样式 */
        :deep(.hot-title .van-index-anchor) {
            position: relative;
            font-weight: 400;

            &::before {
                position: absolute;
                left: 6px;
                top: 8px;
                width: 3px;
                height: 16px;
                background-color: var(--primary-color);
                content: "";
            }
        }

        /* 热门城市下方的展示列表 */
        .hot-cities {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(6, 1fr);
            justify-content: center;
            align-items: center;
            /* height: 250px; */
            padding: 5px 35px 15px 0px;
            gap: 12px;

            /* 热门城市内的单元格 */
            .city-cell {

                text-align: center;
                width: 68px;
                height: 28px;

                border-radius: 15px;
                font-size: 12px;
                font-weight: 600;
                background-color: var(--tag-hot-color);

                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

                .cityName {
                    line-height: 28px;
                    padding: 0 8px;

                }

                /* white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis; */

                /* 火焰图标 */
                .fire-icon {
                    display: inline-block;
                    vertical-align: sub;
                    width: 10px;
                    height: 15px;
                    background-image: url('@/assets/img/sprite.png');
                    background-repeat: no-repeat;
                    background-size: 130px 115px;
                    background-position: 0px -102px;

                }
            }
        }
    }
}
</style>
