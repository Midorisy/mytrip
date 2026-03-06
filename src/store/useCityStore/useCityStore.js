import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getCityListApi } from "@/apis/city/getCityListApi";
import tempJsonCity from './tempJson.json'

export const useCityStore = defineStore("cityStore", () => {
  const cityList = ref([]);
  const cityInfo = ref({
    cityName:'北京'
  })

  // 国内(含港澳台)
  const cityGroup = computed(() => {
    return cityList.value.cityGroup ?? [];
  });
  // 海外
  const cityGroupOverSea = computed(() => {

    return cityList.value.cityGroupOverSea ?? [];
  });

  const flowCityIds = computed(() => {
    return cityList.value.flowCityIds ?? [];
  });

  /**
   * 得到城市相关数据的func
   */
  async function getCityList() {
    try {
        const result = tempJsonCity
    //   const result = await getCityListApi();
      cityList.value = result.data
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * 改变单个城市信息的函数
   * @param {object} cityInfo 单个城市信息
   */
  function changeCityInfo(Info) {
    cityInfo.value = Info
  }

  return {
    // 数据
    cityList,
    cityGroup,
    cityGroupOverSea,
    flowCityIds,
    cityInfo,
    // 方法
    getCityList,
    changeCityInfo
  };
});

