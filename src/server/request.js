import axios from "axios"
import { generateFasTraceId } from "@/apis/createTujiaUid"
import { useLoading } from "@/hooks/useLoading"

const useLoadingMethods = useLoading()

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

    // 显示加载动画
    useLoadingMethods.open()

    // 如果config.params不存在
    if (!config.params) {
        config.params = {}
    } 
    Object.assign(config.params,generateFasTraceId())

    return config
})

instance.interceptors.response.use((response) => {
    // 隐藏加载动画
    useLoadingMethods.close()
    return response
},(error) => {
    console.error('请求错误:', error)
    // 隐藏加载动画
    useLoadingMethods.close()
    return Promise.reject(error)
})
