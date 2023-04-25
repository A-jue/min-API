export const handleTime = (val) => {
    //使用日期格式处理插件
    // return dayjs(val).format('YYYY-MM-DD HH:mm:ss');

    // 手写日期处理格式
    let date = new Date(val)
    //获取年月日
    let Y = date.getFullYear()
    let M = date.getMonth() + 1
    let D = date.getDate()

    //获取时分秒
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    // 2023 1 11 21 57 16     2023-1-11  21:57:16

    //处理之后的时间
    return zero([Y, M, D], "-") + " " + zero([h, m, s], "-")
}
//补0函数
function zero(arr, s) {
    return arr.map(v => v < 10 ? "0" + v : v).join(s)
}