

export const defaultToken = '00000000-0000-0000-0000-000000000000'

/**
 * 输出类似：1772607500113h2rahqbb_ddmxatzns0z0gjk3sadfrce7rckm
 * 生成 _fasTraceId和_apitsp
 * 格式：13位时间戳 + 随机字符串
 */
export function generateFasTraceId() {
    // 1. 获取13位时间戳
    const timestamp = Date.now()
    
    // 2. 生成随机字符串（包含大小写字母、数字、下划线）
    const randomStr = Math.random().toString(36).substring(2) + 
                      Math.random().toString(36).substring(2) + 
                      Math.random().toString(36).substring(2)
    
    // 3. 组合
    return {
        _apitsp:timestamp,
        _fasTraceId:`${timestamp}${randomStr}`
    }

}








