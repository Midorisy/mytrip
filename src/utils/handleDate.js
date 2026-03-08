import dayjs from "dayjs";
// 处理日期的方法函数


/**
 * 根据日期对象输出MM月DD日的函数
 * @param {Date} date 传入的日期对象
 */
export function outputMMDD(date) {
    const formatDate =  dayjs(date)
    
    const MM = formatDate.month()
    const DD = formatDate.date()

    return `${MM+1}月${DD}日`
}

/**
 * 计算时间差的函数，type可传'day'|'month'，不传时默认毫秒差
 * @param {Date} preDate 前一个时间
 * @param {Date} nextDate 后一个时间
 * @param {String} type 要计算的类型
 */
export function dateDiff(preDate,nextDate,type) {
    preDate = dayjs(preDate)
    nextDate = dayjs(nextDate)
    return nextDate.diff(preDate,type??null)
}