<template>
    <div class="guest-reviews">
        <info-layout :headTitle="title" :showRightText="true" :showFooter="false" >
            <div class="content">
                默认内容自己填
            </div>
            <template #rightText >
                全部3525条 >
            </template>
            
        </info-layout>
    </div>
</template>

<script setup>
import InfoLayout from '@/components/Common/InfoLayout/InfoLayout.vue';
import { ref } from 'vue';

const title = ref('房客点评')

</script>

<style scoped>
.guest-reviews{
    background-color: #fff;
    .content{
        height: 245px;
        background-color: aliceblue;
    }
}
</style>