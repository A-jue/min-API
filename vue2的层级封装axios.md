## Axios封装

### utils文件夹里面一般创建一个request文件
```js
// 先引入axios
import axios from "axios";
// 因为响应拦截需要用到路由跳转,所以先引入
import router from "@/router";
// 定义一个变量来接收axios的配置
const instance = axios.create({
  baseURL: "这里填请求地址",
});

//请求拦截
//  通过axios变量的interceptors.request.use来拦截请求,然后携带token
instance.interceptors.request.use((req)=>{
  // 取出token
  let token = localStorage.getItem("token")
  // 如果有,就给请求头携带
  if(token){
    req.headers.Authorization="Bearer "+token
  }
  return req
},(error)=>{
  // 失败返回
  return Promise.reject(error)
})


// 响应拦截
instance.interceptors.response.use((req)=>{
  // 取出token
  return req
},(error)=>{
  // 失败返回
  if(error.message.includes("401")){
    // 如果请求报401就跳到登录页面
    router.push("/login")
  }
  return Promise.reject(error)
})
// 导出instance
export default instance;
```

## 现在已经把request封装完了
下一步就是封装get,post,put等请求
在src页面下创建一个文件夹叫api
```js
// 先引入前面封装在utils里面的request文件
import instance from "@/utils/request"
// 封装一个方法用来发送请求
//比如登录请求,一般是post
export function login(data){//单个导出
    return instance({
        url:"/users/Login",
        method:"post",
        data
    })
}
// 如果是数据列表渲染就是get请求
export function getUsersList(params){
    return instance({
        url:"/users/list",
        method:"get",
        params
    })
}
```

## 现在已经封装差不多了
下一步就是发送请求,拿一个事件里面套封装好的方法就可以了
```js
//单独引入
import {getUsersList} from '@/api/user.js'
// 事件触发
 async 点击事件(){
    let res = await getUsersList()
    console.log(res);
}
```
