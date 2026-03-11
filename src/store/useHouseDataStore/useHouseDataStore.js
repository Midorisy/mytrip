import dayjs from "dayjs";
import { defineStore } from "pinia";

export const useHouseDataStore = defineStore("houseStore", {
  state(){
    const moveInDate = dayjs()

    return {
        // 入住日期
       moveInDate,
       // 退房日期
        moveOutDate:moveInDate.add(1,'day')
    }
  },
  getters: {
           

  },
  actions: {

    // 接收传入的被选中时间，修改对应的数据
    setRangeDate(selectInDate,selectOutDate){
        this.moveInDate = dayjs(selectInDate),
        this.moveOutDate = dayjs(selectOutDate)
    }

  },
});
