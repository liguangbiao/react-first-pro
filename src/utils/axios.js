import axios from 'axios'
// import qs from 'qs'
import { BrowserRouter } from "react-router-dom";
import {Message} from "element-react";

let baseUrl;
switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl = ''
        break;
    case 'production':
        baseUrl = 'https://ksxt.dev.gdy.io'
        break;
    case 'test':
        // baseUrl = 'http://smt.dev.gdy.io'
        break;
    default:
        baseUrl = 'https://ksxt.dev.gdy.io'
}
const instance = axios.create({
    // baseURL:baseUrl,
    headers:{"Content-Type":"application/json",'X-Requested-With':'XMLHttpRequest'},
    // transformRequest: [(data,headers) => {
    //     if (headers['Content-Type'] === 'multipart/form-data') {
    //         return data;
    //     } else if (headers['Content-Type'] === 'application/json') {
    //         data = qs.stringify(data);
    //         return data;
    //     } else {
    //         data = qs.stringify(data);
    //         return data;
    //     }
    // }],
    timeout: 15000
});
instance.interceptors.request.use(
    (config) => {
        // config.headers.token = store.state.user.token;
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
);
instance.interceptors.response.use(
    (response) => {
        switch (response.data.messageCode) {
            case '1001':
                Message('请求失败');
                break;
            case '1002':
                Message('服务器繁忙，操作处理中！');
                break;
            case '1003':
                Message('异常错误！');
                break;
            case '1004':
                Message('异常错误！');
                break;
            case '2000':
                Message(response.data.message);
                break;
            case '3000':
                Message('用户凭证无效！');
                break;
            case '3001':
                Message('你还未登录！');
                const r = new BrowserRouter();
                r.history.push('/login');
                r.history.go(0);
                break;
            case '3002':
                Message('找不到该用户！');
                break;
            case '3003':
                Message('该用户已存在！');
                break;
            case '3004':
                Message('账号或者密码错误！');
                break;
            case '3005':
                Message('密码错误！');
                break
            case '3006':
                Message('你没有该权限！');
                break;
            case '3007':
                Message('该用户被限制！');
                break;
            case '3008':
                Message('错误次数过多！');
                break
        }
        return response
    },
    (error) => {
        return Promise.resolve(error.response)
    }
);
export default instance

