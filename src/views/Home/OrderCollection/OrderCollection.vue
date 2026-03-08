<template>
  <div class="order-collection">
    <div class="data-collection">
      <div class="movein" @click="openCalendar" >
        <div class="top">入住</div>
        <div class="text">{{ personStay.moveIn }}</div>
      </div>
      <div class="range">共{{rangeDate}}晚</div>
      <div class="moveout" @click="openCalendar"  >
        <div class="top">离店</div>
        <div class="text">{{ personStay.moveOut }}</div>
      </div>
      <div class="price-range">价格不限</div>
      <div class="person-count">人数不限</div>
      <div class="description">关键字/位置/民宿名</div>
    </div>
    <Calendar
      v-model:show="calendarIsShow"
      :show-title="false"
      :round="false"
      type="range"
      @confirm="onConfirm"
      color="#ff9854"
      class="calendar-style"
      :show-confirm="false"
    >
      <!-- <template #subtitle>标题</template> -->
    </Calendar>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import { dateDiff, outputMMDD } from "@/utils/handleDate";
import { Calendar } from "vant";
import { computed, ref } from "vue";


const calendarIsShow = ref(false);

// 住宿的日期区间
const nowDay = ref(dayjs())
const nextDay = ref(nowDay.value.add(1,'day'))
const personStay=ref({
    moveIn:outputMMDD(nowDay.value),
    moveOut:outputMMDD(nextDay.value)
})
const rangeDate = computed(() => {
    return dateDiff(nowDay.value,nextDay.value,'day')
})


function openCalendar() {
    calendarIsShow.value = true
}

/**
 * 点击确认时输出选中的日期范围
 * @param dataRange 日期范围
 */
function onConfirm(dataRange) {
 const [moveinDate,moveOutDate] = dataRange
 nowDay.value = moveinDate
 nextDay.value = moveOutDate
 personStay.value.moveIn = outputMMDD(moveinDate)
 personStay.value.moveOut = outputMMDD(moveOutDate)
 calendarIsShow.value = false

}
</script>

<style scoped>
.order-collection {
    
  .data-collection {
    /* background-color: pink; */
    padding: 0 20px;
    height: 124px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    color: #999;
    font-size: 14px;
    position: relative;
    border-bottom: 1px solid var(--div-border-color);

    &::before,
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: var(--div-border-color);
      position: absolute;
      top: 40px;
    }

    &::after {
      top: 80px;
    }

    .top,
    .range {
      font-size: 10px;
    }

    .range {
      padding-left: 10px;
    }

    .text {
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

  /* 日期的样式 */
--van-calendar-popup-height:100%;
  .calendar-style {

  }
}
</style>
