import { defineStore } from "pinia";
import { ref } from "vue";
import { getCityListApi } from "@/apis/city/getCityListApi";

export const useCityStore= defineStore('city',() => {
    const cityList = ref(123)




    function getCityList() {
        getCityListApi()
    }

    return {
        cityList,
        getCityList
    }
})