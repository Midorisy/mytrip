import { ref } from 'vue'

const gloablLoading = ref(true)

export function useLoading() {
    const showLoading = (value) => {
        gloablLoading.value = value
    }
    
    const open = () => {
        gloablLoading.value = true
    }

    const close = () => {
        gloablLoading.value = false
    }

    return {
        showLoading,
        open,
        close,
        gloablLoading
    }

}