import { instance } from "@/server/request";
import { useHouseDataStore } from "@/store/useHouseDataStore/useHouseDataStore";
import { useHouseParameter } from "@/store/useHouseParameter/houseParameter";
import { storeToRefs } from "pinia";

const {graft,houseGuid,houseId,landlordInviteScene,preview} = storeToRefs( useHouseParameter())
const {moveInDate,moveOutDate}   = storeToRefs(useHouseDataStore())

/**
 * 得到房屋日期的函数
 * @returns 
 */
export async function getHouseData() {
    return await instance({
        method:'post',
        url:'/bnbapp-node-h5/h5/house/gethouse/v3/bnb',
        data:{
            houseParameter:{
                graft:graft.value,
                houseGuid:houseGuid.value,
                houseId:houseId.value,
                landlordInviteScene:landlordInviteScene.value,
                preview:preview.value
            },
            paoductParameter:{
                checkInDate:moveInDate.value.format('YYYY-MM-DD'),
                checkOutDate:moveOutDate.value.format('YYYY-MM-DD')
            },
            searchId:''
        }
    })
}