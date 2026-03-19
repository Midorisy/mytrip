<template>
    <div class="house-info">
        <top-bar></top-bar>
        <photo-swipe :photoSwiperData="photoSwiperData " ></photo-swipe>
        <time-banner></time-banner>
        <house-description></house-description>
    </div>
</template>

<script setup>
// 页面组件
import TopBar from '@/components/houseInfo/TopBar.vue'
import PhotoSwipe from '@/components/houseInfo/PhotoSwipe.vue'
import HouseDescription from '@/components/houseInfo/HouseDescription.vue';
import TimeBanner from '@/components/houseInfo/TimeBanner.vue';
// 引入接口函数
import { computed, onMounted, ref } from 'vue';
import { getHouseData } from '@/apis/houseInfo';
import { useRoute } from 'vue-router';
import { useHouseParameter } from '@/store/useHouseParameter/houseParameter';

// 引入仓库
const houseParameterStore = useHouseParameter()

// 得到当前路由
const route = useRoute()
//当刚进入页面时，获取路由参数中的id，传递给仓库
houseParameterStore.setHouseId(route.params.id)

// 得到图片轮播器的数据
const photoSwiperData = ref([])


// 发送请求，获取房屋的详情数据
onMounted(async() => {
   const result = await getHouseData()
   const houseData = result.data.data
   photoSwiperData.value = houseData.mainPart.topModule.housePicture
    console.log(photoSwiperData.value);
})

</script>

<style scoped>
.house-info{
        background-color: #F1F3F5;
        height: 1500px;
}
</style>