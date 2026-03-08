<template>
    <div class="hot-tags">
        <div class="tag-cell">
            甄选民宿
        </div>
        <div class="tag-cell">
            今夜特价
        </div>
        <div class="tag-cell">
            解放碑/洪崖洞
        </div>
        <div class="tag-cell">
            甄选民宿
        </div>
        <div class="tag-cell">
            今夜特价
        </div>
        <div class="tag-cell">
            解放碑/洪崖洞
        </div>
         <div class="tag-cell">
            甄选民宿
        </div>
        <div class="tag-cell">
            今夜特价
        </div>
        <div class="tag-cell">
            解放碑/洪崖洞
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    /* 热门区域模块 */
    .hot-tags{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        padding: 10px 20px;
        /* background-color: pink; */
        height: 172px;
        border-bottom: 1px solid #f2f2f2;
        
        /* 每一个tag */
        .tag-cell{
            background-color: var(--light-background-color);
            font-size: 12px;
            color: #3f4954;
            padding: 0 10px;
            margin: 2px 2px;
            height: 22px;
            line-height: 22px;
            border-radius: 15px;
        }
    }
</style>