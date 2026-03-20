<template>
    <div class="house-type">
        <div class="type" v-for="(item,index) in 2" :key="index"  >
            无早餐{{ item }}
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.house-type{
   height: 311px;
    margin: 10px 10px 0 10px;
    background-color: rgb(255, 207, 119);
    border-radius: 5px;

    .type{
        height: 134px;
        border-bottom: 1px solid #000;
    }
}
</style>