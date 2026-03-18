<template>
    <div class="nav-bar">
        <div class="title">
            黑马旅途
        </div>
        <div class="right-menu">
            <img src="@/assets/img/home/icon-right-menu.png" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.nav-bar {
    height: 44px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background-color: #fff;

    .title {
        color: var(--primary-color);
        font-weight: 600;
    }
    .right-menu{
        width: 26px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        position: absolute;
        right: 18px;
        top: 10px;
        img {
            width: 20px;
        }
    }
}
</style>