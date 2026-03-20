<template>
    <div class="current-house">
        <div class="img">
            图片组件
        </div>
        <div class="content">
            城景房
            1张1.5米大床 2人 整套 42㎡
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.current-house{
    display: flex;
    justify-content: space-between;
    height: 124px;
    background-color: rgb(184, 95, 184);
    padding: 10px 16px;

    .img{
        width: 82px;
        height: 104px;
        background-color: antiquewhite;
        border-radius: 10px;
        padding: 10px;
    }
    .content{
        height: 104px;
        /* background-color: antiquewhite; */
        border-radius: 10px;
    }
}
</style>