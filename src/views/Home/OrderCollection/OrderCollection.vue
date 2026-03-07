<template>
    <div class="order-collection">
        <div class="movein">
            <div class="top">入住</div>
            <div class="text">3月7日</div>
        </div>
        <div class="range">共1晚</div>
        <div class="moveout">
            <div class="top">离店</div>
            <div class="text">3月8日</div>
        </div>
        <div class="price-range">
            价格不限
        </div>
        <div class="person-count">
            人数不限
        </div>
        <div class="description">
            关键字/位置/民宿名
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>


.order-collection{
    /* background-color: pink; */
    padding: 0 20px;
    height: 124px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    align-items: center;
    color: #999;
    font-size: 14px;
    position: relative;
    border-bottom: 1px solid var(--div-border-color);


    &::before,&::after{
        content: '';
        width: 100%;
        height: 1px;
        background-color: var(--div-border-color);
        position: absolute;
        top: 40px;
    }

    &::after{
        top: 80px;
    }
    

    .top,.range {
        font-size: 10px;
    }
    .range {
        padding-left: 10px;
    }

    .text{
        color: #333;
    }

    .price-range {
        grid-column: 1/3;
        grid-row: 2/3;
    }

    .description {
        grid-column: 1/4;
        grid-row: 3/4;
    }
    
}


</style>