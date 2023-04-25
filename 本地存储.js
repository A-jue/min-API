const local ={
    //取出JSON字符串
    get(key){
        return JSON.parse(localStorage.getItem(key))
    },
    // 转JSON存本地
    set(key,val){
       return localStorage.setItem(key,JSON.stringify(val))
    },
    // 删除本地固定键值对
    removw(key){
        return localStorage.removeItem(key)
    },
    // 删除所有存储在localStorage对象中的键值
    clear(){
        return localStorage.clear()
    }
}

export default local