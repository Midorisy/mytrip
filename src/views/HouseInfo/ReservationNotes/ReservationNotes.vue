<template>
    <div class="reservation-notes">
        <info-layout head-title="预订须知" >
            <div class="content">
                内容
            </div>
        </info-layout>
    </div>
</template>

<script setup>
import InfoLayout from '@/components/Common/InfoLayout/InfoLayout.vue';

</script>

<style scoped>
.reservation-notes{
    background-color: #fff;
    .content{
        height: 514px;
        background-color: rgb(115, 255, 208);
    }
}
</style>