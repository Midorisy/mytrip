import { ref } from 'vue'

// 全局状态
const globalLoading = ref(false)

// 新增计数器
let requestCount = 0

export function useLoading() {
    const showLoading = (value) => {
        globalLoading.value = value
    }
    
    const open = () => {
        requestCount++
        if (requestCount==1) {
            globalLoading.value = true
            
        }

    }

    const close = () => {
        requestCount--
        if (requestCount<=0) {
            requestCount = 0
            globalLoading.value = false
        }
        
    }

    return {
        showLoading,
        open,
        close,
        globalLoading
    }

}