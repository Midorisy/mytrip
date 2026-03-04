<template>
    <div class="home-location">
        <div class="city" @click="toCityView">
            广州
        </div>
        <div class="position" @click="clickMyPosition">
            <div class="mine">
                <span v-if="addressLoading">加载中...</span>
                <span v-else>我的位置</span>
            </div>
            <img src='@/assets/img/home/icon_location.png' alt="">
        </div>
    </div>
</template>

<script setup>
import { tencentPositionServe } from '@/apis/tencentPositionServe';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const address_component = ref(null)
const addressLoading = ref(false)



/**
 * 前往city页面的方法
 */
function toCityView() {
    router.push({
        name: 'City'
    })
}

/**
 * 点击发送经纬度到腾讯地图，并返回位置
 */
async function clickMyPosition() {
    try {
        addressLoading.value = true
        // 向用户发送获取地址请求
        const res = await getMyPosition()

        // 向腾讯地图api发送数据
        const positionRes = await tencentPositionServe(`${res.latitude},${res.longitude}`)
        // 得到返回的地址数据
        const data = positionRes.data.result
        address_component.value = data
        console.log(address_component.value);
        addressLoading.value = false
    } catch (error) {
        addressLoading.value = false
        console.error(error);
    }

}

/**
 * 得到当前经纬度的函数
 */
function getMyPosition() {
    return new Promise((resolve, reject) => {
        // 判断本机是否支持地理定位
        if (!navigator.geolocation) {
            reject(new Error("浏览器不支持地理定位"));
        } else {
            // 进行地理定位，输出经纬度
            navigator.geolocation.getCurrentPosition((success) => {
                const { accuracy, latitude, longitude } = success.coords
                const coords = {
                    accuracy, // 精度（米）
                    latitude, // 纬度
                    longitude // 经度
                }
                resolve(coords)
            }, (fail) => {
                reject(fail)
            }, {
                enableHighAccuracy: true,  // 是否使用高精度模式
                timeout: 10000,             // 超时时间（毫秒）
                maximumAge: 0                // 是否允许使用缓存的位置
            })
        }
    })
}
</script>

<style scoped>
.home-location {
    height: 30px;
    /* background-color: pink; */
    display: flex;
    padding: 0 20px;
    font-size: 15px;
    align-items: center;

    .city {
        flex: 1;
        color: #666;
    }

    .position {
        display: flex;
        align-items: center;
        color: #666;

        img {
            margin-left: 5px;
            width: 15px;
        }
    }
}
</style>