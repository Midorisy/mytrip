import axios from "axios"
import { generateFasTraceId } from "@/apis/createTujiaUid"

export const instanceForTencentMap = axios.create({
    baseURL:import.meta.env.VITE_API_TENCENTMAP,
    timeout:10000
})

export const instance = axios.create({
    baseURL:import.meta.env.VITE_MY_TEST_URL,
    // baseURL:import.meta.env.VITE_API_BASE_URL,
    timeout:10000
})

instance.interceptors.request.use((config) => {

    // 如果config.params不存在
    if (!config.params) {
        config.params = {}
    } 
    Object.assign(config.params,generateFasTraceId())

    return config
})
