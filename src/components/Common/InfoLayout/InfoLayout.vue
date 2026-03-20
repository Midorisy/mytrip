<template>
  <div class="info-layout">
    <!-- 头部区域 -->
    <div class="head">
      <div class="title">
        {{ headTitle }}
      </div>
      <div class="right-text"  >
        <slot  v-if="showRightText"  name="rightText"> 右侧默认内容> </slot>
      </div>
    </div>
    
    <!-- 内容区域（始终存在） -->
      <div class="content">
        <slot></slot>
      </div>
<!-- 底部区域（可控制） -->
    <div v-if="showFooter" class="footer">
      <slot name="footer"> 底栏 </slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  headTitle: {
    default: "标题",
    type: String,
  },
  showRightText: {
    default: false,
    type: Boolean,
  },
  showFooter: {
    default: false,
    type: Boolean,
  },
});
</script>

<style scoped>
.info-layout {
  margin: 12px 0;
  padding: 10px 10px;
  background-color: #fff;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 54px;
    .title {
      font-size: 20px;
    }
  }
  .footer {
    height: 46px;
    line-height: 46px;
  }
}
</style>
