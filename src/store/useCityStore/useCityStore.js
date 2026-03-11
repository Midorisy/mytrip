import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getCityListApi } from "@/apis/city/getCityListApi";

export const useCityStore = defineStore("cityStore", () => {
  // 城市列表
  const cityList = ref([]);
  // 城市信息
  const cityInfo = ref({
    cityName:'西安',
    cityId:17
  })
  // 历史城市列表
  const historyCities =ref({})

  // 国内(含港澳台)
  const cityGroup = computed(() => {
    return cityList.value.cityGroup ?? [];
  });
  // 海外
  const cityGroupOverSea = computed(() => {

    return cityList.value.cityGroupOverSea ?? [];
  });
  // 其他cityid
  const flowCityIds = computed(() => {
    return cityList.value.flowCityIds ?? [];
  });

  /**
   * 处理历史选择城市的函数
   * @param {Object} cityInfo 被选中的城市信息
   * @param {String} country 国内地区或外国地区
   */
  function handleHistoryCity(cityInfo,country) {
    // 如果历史城市内没有，就创建数组
      if (!historyCities.value[country]) {
        historyCities.value[country] = []
      }
        // 1.首先判断是否有重复城市，有的话就找出重复城市的索引
    const repeatIndex = historyCities.value[country].findIndex((item) => {
        return item === cityInfo
    })
    // 如果重复城市存在，就移除
    if (repeatIndex!== -1) {
        historyCities.value[country].splice(repeatIndex,1)
        // 再将城市添加到首位
        historyCities.value[country].unshift(cityInfo)
    } else {
        // 如果没有重复城市，就判断是否长度大于4
        // 如果为真就先移除最后一位再添加第一位
        if (historyCities.value[country].length>=4) {
            historyCities.value[country].pop()
        }
        historyCities.value[country].unshift(cityInfo)
    }
  }

  /**
   * 得到城市相关数据的func
   */
  async function getCityList() {
    try {
      const result = await getCityListApi();
      cityList.value = result.data.data
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * 改变仓库内单个城市信息的函数
   * @param {object} cityInfo 单个城市信息
   */
  function changeCityInfo(Info) {
    cityInfo.value = Info
  }

  /**
   * 清除历史城市列表内的数据
   */
  function clearHistoryList(country) {
    historyCities.value[country] = []
  }

  return {
    // 数据
    cityList,
    cityGroup,
    cityGroupOverSea,
    flowCityIds,
    cityInfo,
    historyCities,
    // 方法
    getCityList,
    changeCityInfo,
    handleHistoryCity,
    clearHistoryList
  };
});

