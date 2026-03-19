<template>
  <div class="photo-swipe">
    <Swipe ref="swipe" class="swiper">
      <template v-for="(photo, index) in showPhotoList" :key="index">
        <!-- 两种swipeItem，一种渲染视频，一种渲染图片 -->
        <SwipeItem v-if="photo.houseVideoURL">
          <img :src="photo.defaultPictureURL" />
        </SwipeItem>
        <!-- 渲染图片的swipe -->
        <SwipeItem v-else>
          <img :src="photo.albumUrl" />
        </SwipeItem>
      </template>

      <template #indicator="{ active, total }">
        <div class="play" @click="onPlayClick" >
            <img src="@/assets/img/houseCard/ndetail_play.png" alt="" srcset="">
        </div>
        <!-- play的遮罩层 -->
        <div v-if="active!==0" class="play-mask" @click="onPlayClick" ></div>
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </Swipe>
    <div class="top-right-icon">
      <div class="like">心</div>
      <div class="share">分</div>
      <div class="comment">评</div>
    </div>
  </div>
</template>

<script setup>
import { Swipe, SwipeItem } from "vant";
import { computed, onMounted, ref, watch } from "vue";
const { photoSwiperData } = defineProps({
  photoSwiperData: {
    type: Object,
    default: () => ({}),
  },
});

// 获取swipe实例
const swipe = ref(null)

const showPhotoList = ref([]);

/**
 * 点击play或者是遮罩层触发的函数
 * 用来返回第一张视频页
 */
function onPlayClick() {
    swipe.value.swipeTo(0)
    console.log('已出发');

}

watch(
  () => photoSwiperData,
  (newVal) => {
    // 处理传入数据里的housePics数组
    newVal.housePics.forEach((item) => {
      showPhotoList.value[item.orderIndex] = item;
    });
    showPhotoList.value[0] = newVal.houseVideos[0];
    console.log(showPhotoList.value);
    // console.log(newVal.);
  },
  {
    deep: true,
  },
);

onMounted(() => {
  // 处理传入的图片列表
});
</script>

<style scoped>
.photo-swipe {
  position: relative;
  height: 250px;
  /* 样式穿透到组件里 */
  &:deep(.van-swipe.swiper) {
    width: 100%;
    height: 250px;
    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    .play{
        width: 20px;
        height: 20px;
        line-height: 25px;
        position: absolute;
        right: 45px;
        bottom: 15px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        text-align: center;
        img {
            width:15px;
            height: 15px;
            object-fit: contain;
        }
    }
    .play-mask{
        width: 20px;
        height: 20px;
        line-height: 25px;
        position: absolute;
        right: 45px;
        bottom: 15px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        text-align: center;
    }
    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 13px;
      padding: 5px 5px;
      border-radius: 10px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.3);
    }
  }


  /* 右上角三个小组件 */
  .top-right-icon {
    position: absolute;
    color: white;
    top: 10px;
    right: 10px;
    display: flex;
    width: 60px;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
