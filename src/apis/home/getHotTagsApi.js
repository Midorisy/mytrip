import { instance } from "@/server/request";

// 引入cityStore
import { useCityStore } from "@/store/useCityStore/useCityStore";
const cityStore = useCityStore()

// 引入houseStore
import { useHouseDataStore } from "@/store/useHouseDataStore/useHouseDataStore";

const houseDataStore = useHouseDataStore()

export async function getHotTagsApi() {

    
  return await instance({
    method:'post',
    url:'/bnbapp-node-h5/h5/portal/getportalconfig/bnb/v2',
    data:{
        checkInDate: houseDataStore.moveInDate.format('YYYY-MM-DD'),
        checkOutDate: houseDataStore.moveOutDate.format('YYYY-MM-DD'),
        cityId:cityStore.cityInfo.cityId,
        feLog:{h5_base_log:""}
    }
  });
  
}
