import axios from 'axios'
import qs from 'qs'
import { Toast } from 'mint-ui'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://39.106.18.39:8765/api/';

//POST传参序列化
// axios.interceptors.request.use((config) => {
//     if(config.method  === 'post'){
//         config.data = qs.stringify(config.data);
//     }
//     return config;
// },(error) =>{
//     //  _.toast("错误的传参", 'fail');
//     return Promise.reject(error);
// });

//返回状态判断
// axios.interceptors.response.use((res) =>{
//     if(res.data.code!=0){
//         Toast(res.data.msg);
//         return Promise.reject(res);
//     }
//     return res;
// }, (error) => {
//     Toast("网络异常", 'fail');
//     return Promise.reject(error);
// });

export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}

export function fetchGet(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params : params
            })
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}

export default {
    // 登录
    Login(params) {
        return fetchPost('member/login/loginByPass', params)
    }
}
