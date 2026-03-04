
import {instance} from "@/server/request";


export function getCityListApi() {

    return instance({
        method:'post',
        url:'/bnbapp-node-h5/h5/city/bnb/',
        data:{
            version:""
        }
    })
}