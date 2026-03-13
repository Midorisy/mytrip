<template>
    <div class="house-type">
        <div v-if="true" class="complicated-card">
            <div class="mask"></div>
            <div class="card-top">
                <div class="prefer-pro">优选PRO</div>
                <div class="love-icon">
                </div>
            </div>
            <div class="card-bottom">
                <span class="keyword">整套·1居1床2人 4.9分</span>
                <p class="description">缘居·恋恋时光 春熙路.宽窄巷.文殊院地铁口</p>
                <div class="footer">
                    <div class="star">
                        <Rate v-model="starRate" readonly  allow-half size="10px" color="#fff" ></Rate>
                    </div>
                    <div class="price">￥1??</div>
                </div>
            </div>
        </div>
        <div v-else class="simple-card">
            <div class="card-top">
                <div class="love-icon">
                </div>
                <div class="video-icon"></div>
            </div>
            <div class="card-bottom">
                <p class="description">
                    缘居·恋恋时光 春熙路.宽窄巷.文殊院地铁口
                </p>
                <span class="keyword">
                    整套·1居1床2人 4.9分
                </span>
                <div class="price">
                    $1??
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {Rate } from 'vant'
import { ref } from 'vue';
// 根据传入的某个参数，来决定显示哪个组件
// const {card} =  defineProps({
//     card:{
//         tyoe:Object,
//         default:()=>[]
//     }
// })

const starRate = ref(4)

const card = {
    data: {
        activityInfo:
            "%7B%22peopleCount%22%3A1%2C%22referTraceId%22%3A%22%22%2C%22lowerPriceHouseId%22%3A0%2C%22advertChargingType%22%3A0%2C%22source%22%3A0%2C%22version%22%3A1%7D",
        cityId: 10,
        commentScore: "4.9",
        extendMap: {
            adPosition: "false",
            position: "3",
        },
        featurePictures: [],
        finalPrice: "118",
        finalPriceUnit: "",
        houseAdvert: {
            advertBadge: null,
            advertShowTag: false,
        },
        houseId: 69297287,
        houseName:
            "天府机场地铁免费接送/天府国际机场/世界园艺博览会/免费停车/免费简早餐/独立高速WIFI/独立卫浴",
        iconTag: null,
        image: {
            height: 467,
            url: "https://pic.tujia.com/upload/landlordunit/day_251008/thumb/202510080952452996_700_467.jpg",
            width: 700,
        },
        l2dParameters: {
            navigation: null,
        },
        navigation: "",
        productPrice: "0",
        sellingPoint: "",
        showHouseVideo: true,
        summaryText: "整套·1居1床2人 4.9分",
    },
    discoveryContentType: 3,
};
</script>

<style scoped>
.house-type {
    .complicated-card {
        position: relative;
        break-inside: avoid;
        /* 防止项目被分割 */
        width: 167px;
        height: 223px;
        border-radius: 10px;
        background-color: pink;
        color: #fff;
        margin-bottom: 10px;
        box-sizing: border-box;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

        background-image: url(https://pic.tujia.com/upload/landlordunit/day_241107/thumb/202411071114487439_360_480.jpg);
        background-size: 100%, 100%;

        .mask {
            width: 100%;
            height: 100%;
            margin-bottom: 0;
            border-radius: 10px;
            background-image: linear-gradient(to bottom,
                    rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 50%,
                    rgba(0, 0, 0, 0.7) 100%);
        }

        /* 商品卡片上半部分 */
        .card-top {
            position: absolute;
            display: flex;
            justify-content: space-between;
            align-items: center;
            top: 4px;
            left: 0;
            width: 100%;
            z-index: 1;
            box-sizing: border-box;
            padding: 0 10px;



            .prefer-pro {
                width: 50px;
                height: 16px;
                line-height: 16px;
                padding: 0 4px;
                text-align: center;
                font-size: 11px;
                color: #666;
                border-radius: 15px;
                background-color: #fff;
            }

            .love-icon {
                width: 30px;
                height: 30px;
                background-image: url('@/assets/img/home/like.png');
                background-size: 30px 30px;
                background-position: 0px 0px;
                background-repeat: no-repeat;
            }
        }

        /* 商品卡片下半部分 */
        .card-bottom {
            position: absolute;
            bottom: 8px;
            padding: 0 10px;

            .keyword {
                font-size: 12px;
            }

            .description {
                font-size:14px;
                margin: 5px 0px;

            }

            .footer {
                display: flex;
                justify-content: space-between;
            }
        }


    }

    .simple-card {
        break-inside: avoid;
        /* 防止项目被分割 */
        margin-bottom: 10px;
        width: 167px;
        height: 194px;
        box-sizing: border-box;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

        /* 卡片上方区域 */
        .card-top{
            position: relative;
        background-image: url( "https://pic.tujia.com/upload/landlordunit/day_251008/thumb/202510080952452996_700_467.jpg");
        background-repeat: no-repeat;
        background-size: 100%,100%;
        border-radius: 10px 10px 0 0;
        height: 112px;

            .love-icon {
                position: absolute;
                width: 30px;
                height: 30px;
                right: 8px;
                top: 4px;
                background-image: url('@/assets/img/home/like.png');
                background-size: 30px 30px;
                background-position: 0px 0px;
                background-repeat: no-repeat;
            }
            .video-icon {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 36px;
                height: 36px;
                background-size: 36px,36px;
                background-position: 0px 0px;
                background-repeat: no-repeat;
                background-image: url('@/assets/img/houseCard/video.png');
            }
        }
        /* 卡片下方区域 */
        .card-bottom{
            display: flex;
            flex-direction: column;
            padding: 0 10px;
            .description {
                margin: 2px 0;
                font-size: 14px;
                color: #222;
            }
            .keyword{
                font-size: 10px;
                color: #666;
            }
            .price{
                margin-top: 5px;
                color: var(--primary-color);
            }
        }
    }
}
</style>
