import { ref } from "vue";
import { throttle } from "radash";

/**
 * 获取页面是否已经滚动到了底部
 * @param {number} tolerance - 滚动到底部的容忍度，单位为像素，默认为30
 * @returns {object} 包含isBottom属性的对象，isBottom为一个ref，表示是否滚动到了底部
 */
export function usePageBottom(tolerance = 150) {
    const isBottom = ref(false);

    // 监听页面上方已滚动的距离
    window.addEventListener("scroll", throttle({interval:100}, listenerFunc));

    

    // 再返回一个清理函数，组件卸载时可以调用它来移除事件监听器
    function cleanup() {
        window.removeEventListener("scroll", listenerFunc);
    }

    // 要传入的监听函数
    function listenerFunc() {
    const scrollTop = document.documentElement.scrollTop || 0;
        const clientHeight = document.documentElement.clientHeight || 0;
        const scrollHeight = document.documentElement.scrollHeight || 0;

        // 判断是否滚动到了底部
        isBottom.value = scrollTop + clientHeight >= scrollHeight-tolerance

}

return {
        isBottom,
        cleanup
    }

}

