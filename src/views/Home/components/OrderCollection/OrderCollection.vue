<template>
  <div class="order-collection">
    <div class="data-collection">
      <div class="movein" @click="openCalendar" >
        <div class="top">入住</div>
        <div class="text">{{ formatMoveIn }}</div>
      </div>
      <div class="range">共{{rangeDate}}晚</div>
      <div class="moveout" @click="openCalendar"  >
        <div class="top">离店</div>
        <div class="text">{{ formatMoveOut }}</div>
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
      :formatter="formatter"
      :min-date="minDate"
      :max-date="maxDate"
    >
    <template #title> 自定义标题</template>
    </Calendar>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import { dateDiff,formatNewDate } from "@/utils/handleDate";
import { Calendar } from "vant";
import { computed, onMounted, ref } from "vue";
import {getCalendarListApi} from '@/apis/home/getCalendarListApi'
import { useHouseDataStore } from "@/store/useHouseDataStore/useHouseDataStore";
import { storeToRefs } from "pinia";

// 显示与隐藏日历
const calendarIsShow = ref(false);

// 引入仓库
const houseDataStore = useHouseDataStore()

// 解构订单入住与离开时间
const {moveInDate,moveOutDate} = storeToRefs(houseDataStore)

// 模板中显示的日期
// 入住
const formatMoveIn = computed(() => {
  return moveInDate.value.format('MM月DD日')
})
// 退房
const formatMoveOut = computed(() => {
  return moveOutDate.value.format('MM月DD日')
})

// 总入住天数
const rangeDate = computed(() => {
    return dateDiff(moveInDate.value,moveOutDate.value,'day')
})

// 自定义默认日期范围 格式：new Date(2010, 0, 1)
const minDate = ref(formatNewDate(moveInDate.value))
const maxDate = ref(formatNewDate(moveOutDate.value.add(5,'month')))

// 自定义节假日
const holidayVo = ref([])

// 从外部接口里获取的节假日

onMounted(async() => {
    const result = await getCalendarListApi()
  
    holidayVo.value = result.data.data.holidayVo
  

})

// 自定义日期文案
function formatter(day) {
  const month = day.date.getMonth() + 1;
      const date = day.date.getDate();
      // console.log(day);
      // 遍历节假日列表，设置每一天的显示
      if (holidayVo.value.length !== 0) {
        holidayVo.value.forEach((item) => {
          
          if (dayjs(item.holidayDate).isSame(day.date)) {
            // console.log(day);

            // 设置休息日
            if (item.reset) {
              day.topInfo = item.reset
              
              // 设置节假日
              if (item.holiday) {
                day.topInfo= item.holiday
              }

            }

          }

        })
      }


      // 设置入住和离店
     if (day.type === 'start') {
        day.bottomInfo = '入住';
      } else if (day.type === 'end') {
        day.bottomInfo = '离店';
      }
  
      // 设置节假日显示


      return day
}

/**
 * 点击时修改calendarIsShow，弹出日历
 */
function openCalendar() {
    calendarIsShow.value = true
}

/**
 * 点击确认时输出选中的日期范围
 * @param dataRange 日期范围
 */
function onConfirm(dataRange) {
  // 得到选择的标准时间
 const [selectInDate,selectOutDate] = dataRange
  // 更改store里共享的订单时间
  houseDataStore.setRangeDate(selectInDate,selectOutDate)
  // 关闭弹框
 calendarIsShow.value = false

}
</script>

<style scoped>
.order-collection {
    background-color: #fff;
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



}

  :deep(.van-calendar__day){
    font-weight: 600;
     :deep(.van-calendar__top-info){
      font-size: 14px;
     }
  }

</style>
