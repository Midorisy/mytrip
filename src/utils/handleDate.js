
// 处理日期的方法函数

/**
 * 计算时间差的函数，type可传'day'|'month'，不传时默认毫秒差
 * @param {Date} preDate 前一个时间
 * @param {Date} nextDate 后一个时间
 * @param {String} type 要计算的类型
 */
export function dateDiff(preDate,nextDate,type) {
    return nextDate.diff(preDate,type??null)
}


/**
 * 把dayjs对象dayjs('2024-03-08')转换为new Date(2010, 0, 1)
 * @param {dayjs} d 
 * @returns 
 */
 export function formatNewDate(d) {
   const tempArg = [d.year(),d.month(),d.date()]
   return new Date(...tempArg)
}

