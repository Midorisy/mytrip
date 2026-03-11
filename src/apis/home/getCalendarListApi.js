import { instance } from "@/server/request";

/**
 * 
 * @returns 阶段性日期数据
 */
export async function getCalendarListApi() {
    return await instance({
        method:'post',
        url:'/bingo/h5/config/getholiday/bnb',
        data:{

        }
    })

}