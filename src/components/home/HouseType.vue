<template>
  <div class="house-type">
    <div
      v-if="card.discoveryContentType === 9"
      class="complicated-card"
      :style="{ backgroundImage: `url(${card.data.image.url})` }"
    >
      <div class="mask"></div>
      <div class="card-top">
        <div class="prefer-pro">优选PRO</div>
        <div class="love-icon"></div>
      </div>
      <div class="card-bottom">
        <span class="keyword">{{ card.data.summaryText }}</span>
        <p class="description">{{ card.data.houseName }}</p>
        <div class="footer">
          <div class="star">
            <Rate
              v-model="starRate"
              readonly
              allow-half
              size="10px"
              color="#fff"
            ></Rate>
          </div>
          <div class="price">￥{{ card.data.finalPrice }}</div>
        </div>
      </div>
    </div>
    <div v-if="card.discoveryContentType === 3" class="simple-card">
      <div class="card-top">
        <div class="love-icon"></div>
        <div class="video-icon"></div>
      </div>
      <div class="card-bottom">
        <p class="description">
          {{ card.data.houseName }}
        </p>
        <span class="keyword">
          {{ card.data.summaryText }}
        </span>
        <div class="price">${{ card.data.finalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Rate } from "vant";
import { ref } from "vue";
// 根据传入的某个参数，来决定显示哪个组件
const { card } = defineProps({
  card: {
    tyoe: Object,
    default: () => [],
  },
});

const starRate = Number(card.data.commentScore);
</script>

<style scoped>
.house-type {
  .complicated-card {
    position: relative;
    break-inside: avoid;
    /* 防止项目被分割 */
    width: 167px;
    height: 223px;
    border-radius: 10px;
    background-color: pink;
    color: #fff;
    margin-bottom: 10px;
    box-sizing: border-box;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    background-image: url(https://pic.tujia.com/upload/landlordunit/day_241107/thumb/202411071114487439_360_480.jpg);
    background-size: 100%, 100%;

    .mask {
      width: 100%;
      height: 100%;
      margin-bottom: 0;
      border-radius: 10px;
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.3) 0%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(0, 0, 0, 0.7) 100%
      );
    }

    /* 商品卡片上半部分 */
    .card-top {
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      top: 4px;
      left: 0;
      width: 100%;
      z-index: 1;
      box-sizing: border-box;
      padding: 0 10px;

      .prefer-pro {
        width: 50px;
        height: 16px;
        line-height: 16px;
        padding: 0 4px;
        text-align: center;
        font-size: 10px;
        color: #666;
        border-radius: 15px;
        background-color: #fff;
      }

      .love-icon {
        width: 30px;
        height: 30px;
        background-image: url("@/assets/img/home/like.png");
        background-size: 30px 30px;
        background-position: 0px 0px;
        background-repeat: no-repeat;
      }
    }

    /* 商品卡片下半部分 */
    .card-bottom {
      position: absolute;
      bottom: 8px;
      padding: 0 10px;

      .keyword {
        font-size: 12px;
      }

      .description {
        font-size: 14px;
        margin: 5px 0px;
        /* 让文字保持两行显示 */
        display: -webkit-box; /* 使用 flexbox 布局 */
        -webkit-line-clamp: 2; /* 限制显示2行 */
        -webkit-box-orient: vertical; /* 设置垂直排列 */

        /* 溢出文字自动变成... */
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .footer {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .simple-card {
    break-inside: avoid;
    /* 防止项目被分割 */
    margin-bottom: 10px;
    width: 167px;
    height: 194px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    /* 卡片上方区域 */
    .card-top {
      position: relative;
      background-image: url("https://pic.tujia.com/upload/landlordunit/day_251008/thumb/202510080952452996_700_467.jpg");
      background-repeat: no-repeat;
      background-size: 100%, 100%;
      border-radius: 10px 10px 0 0;
      height: 112px;

      .love-icon {
        position: absolute;
        width: 30px;
        height: 30px;
        right: 8px;
        top: 4px;
        background-image: url("@/assets/img/home/like.png");
        background-size: 30px 30px;
        background-position: 0px 0px;
        background-repeat: no-repeat;
      }
      .video-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 36px;
        height: 36px;
        background-size: 36px, 36px;
        background-position: 0px 0px;
        background-repeat: no-repeat;
        background-image: url("@/assets/img/houseCard/video.png");
      }
    }
    /* 卡片下方区域 */
    .card-bottom {
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      .description {
        width: 100%;
        margin: 2px 0;
        font-size: 14px;
        color: #222;
        /* 让文字保持两行显示 */
        display: -webkit-box; /* 使用 flexbox 布局 */
        -webkit-line-clamp: 2; /* 限制显示2行 */
        -webkit-box-orient: vertical; /* 设置垂直排列 */

        /* 溢出文字自动变成... */
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .keyword {
        font-size: 10px;
        color: #666;
      }
      .price {
        margin-top: 5px;
        color: var(--primary-color);
      }
    }
  }
}
</style>
