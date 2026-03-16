import { instance } from "@/server/request";

export async function getCardStream(pageIndex = 0) {
  return await instance({
    method: "post",
    url: "/bnbapp-node-h5/h5/portal/getportalfeed/bnb",
    data: {
      condition:
        '{"areaId":0,"areaName":"","areaType":0,"checkInDate":"2026-03-13","checkOutDate":"2026-03-14","cityId":10,"referTraceId":"17734015610442TayJhpJ_XFx9bydaJ9JyQwew1DBFmrG7567C","surrounding":false}',
      pageIndex: pageIndex,
    },
  });
}
