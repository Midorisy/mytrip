<template>
    <div class="other-type">
        <div class="title">其他房型</div>
        <div class="type" v-for="(item,index) in 2" :key="index" >
            <div class="img">
                图片
            </div>
            <div class="content">
                内容
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.other-type{
    height: 296px;
    background-color: rgb(89, 158, 89);
    margin-top: 10px;
    padding: 10px;

    .type{
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
        .img{
            flex: none;
            width: 82px;
            height: 110px;
            background-color: bisque;
            border-radius: 5px;
            margin-right: 10px;
        }
        .content {
            flex: 1;
            background-color: azure;
        }
    }
}
</style>