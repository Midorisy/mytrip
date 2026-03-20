<template>
    <div class="default">
        <div class="explain">
            <div class="title">
                价格说明
            </div>
            <div class="text" :class="{click:showText}" >
                <span>
                    划线价格为参考价，该价格指商品或服务的门市价、服务提供商的指导价、零售价或该商品或服务曾经展示过的销售价等，并非原价；由于产品信息实时更新、市场价格波动等可能会与您预订时展示的不一致，该价格仅供您参考。
未划线价格指商品或服务的实时标价，为划线价基础上计算出的优惠金额。具体成交价格根据商品或服务参加活动，或会员使用优惠券等发生变化，最终以订单结算页价格为准。如有疑问，您可在预订前联系客服进行咨询。
此说明仅当出现价格比较时有效。若服务提供商单独对划线价格进行说明的，以服务提供商的表述为准。
                </span>
                <div class="spread" @click="explainText" >▽</div>
            </div>
        </div>
        <div class="bottom">
            安心订 放心住
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const showText = ref(false)

function explainText() {
    showText.value=true
}
</script>

<style scoped>
.default{
    .explain{
        padding: 16px 12px;
        /* height: 102px; */
        overflow: hidden;
        background-color: #fff;
        .title {
            font-weight: 600;
            margin-bottom: 10px;
        }
        .text{
            position: relative;
            height: 42px;
            overflow: hidden;
            font-size: 12px;
            color: #333;

            .spread{
                position: absolute;
                line-height: 1.1; 
                bottom:0px;
                right: 0px;
                width: 15px;
                height: 18px;
                font-size: 20px;
                background-color: #fff;
            }
        }
        .click{
            height: 100%;
            .spread{
                display: none;
            }
        }
    }
    .bottom{
        margin-top: 10px;
        text-align: center;
        height: 84px;
    }
    &::after {
        content: '占位';
        position: relative;
        display: block;
        height: 60px;
        background-color: pink;
    }
}
</style>