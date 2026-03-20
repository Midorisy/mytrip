<template>
    <div class="house-fitment">
        <info-layout headTitle="房屋/设施" :show-right-text="true" >
            <div class="content">
                <div class="section">
                    <div class="name">基础</div>
                    <div class="items">
                        <div class="item">无限网路</div>
                        <div class="item">电梯</div>
                        <div class="item">暖气</div>
                    </div>
                </div>
                <div class="section" v-for="(item,index) in 2" :key="index" >
                    <div class="name">卫浴</div>
                    <div class="items">
                        <div class="item">无限网路</div>
                        <div class="item">电梯</div>
                        <div class="item">暖气</div>
                        <div class="item">无限网路</div>
                        <div class="item">电梯</div>
                        <div class="item">暖气</div>
                    </div>
                </div>
            </div>
            <template #rightText >
                全部设施>
            </template>
        </info-layout>
    </div>
</template>

<script setup>
import InfoLayout from '@/components/Common/InfoLayout/InfoLayout.vue';
</script>

<style scoped>
    .house-fitment{
        background-color: #fff;
        .content{
            .section{
                display: flex;
                padding: 20px 0;
                border-bottom: 1px solid #eee;
                &:last-child{
                    border-bottom:none
                }
                .name{
                    width: 64px;
                    font-weight: 600;
                    font-size: 15px;
                }
                .items{
                    display: grid;
                    flex: 1;
                    font-size: 12px;
                    gap: 15px;
                    grid-template-columns:repeat(3,1fr);
                }
            }
        }
    }
</style>