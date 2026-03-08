import { instance } from "@/server/request";
import hotTagsData from "./hot-tags.json";

export async function getHotTagsApi() {
    return hotTagsData
    /*
  return await instance({
    method:'post',
    url:'/bnbapp-node-h5/h5/portal/getportalconfig/bnb/v2',
    data:{
        checkInDate: "2026-03-07",
        checkOutDate: "2026-03-08",
        cityId:22
    }
  });
  */
}
