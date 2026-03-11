<template>
  <div class="hot-tags">
    <div v-for="item in tagList" :key="item.conditionValue" class="tag-cell">
      {{ item.tagText.text }}
    </div>
  </div>
</template>

<script setup>
import { getHotTagsApi } from "@/apis/home/getHotTagsApi";
import { onMounted, ref } from "vue";

const tagList = ref([]);


onMounted(async() => {
 const result = await  getHotTagsApi()
 tagList.value = result.data.data.otherConfig.hotSuggests;

})
</script>

<style scoped>
/* 热门区域模块 */
.hot-tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 10px 20px;
  /* background-color: pink; */
  height: 172px;
  border-bottom: 1px solid #f2f2f2;

  /* 每一个tag */
  .tag-cell {
    background-color: var(--light-background-color);
    font-size: 12px;
    color: #3f4954;
    padding: 0 8px;
    margin: 2px 2px;
    height: 22px;
    line-height: 22px;
    border-radius: 15px;
  }
}
</style>
