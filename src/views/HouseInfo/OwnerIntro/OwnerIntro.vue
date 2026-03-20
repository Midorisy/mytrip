<template>
    <div class="owner-intro">
       <info-layout head-title="房东介绍" :show-footer="true" >
        <div class="content">
            内容
        </div>
        <template #footer >
            <div class="footer">
                查看房东主页 >
            </div>
        </template>
       </info-layout>
    </div>
</template>

<script setup>
    import InfoLayout from '@/components/Common/InfoLayout/InfoLayout.vue';
</script>

<style scoped>
.owner-intro{
    background-color: #fff;
    .content{
        height: 200px;
        background-color: plum;
    }
    .footer{
        text-align: right;
        padding-right: 5px;
    }
}
</style>