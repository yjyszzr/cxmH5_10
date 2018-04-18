import axios from 'axios'
import qs from 'qs'
import { Toast } from 'mint-ui'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://39.106.18.39:8765/api/';

//拦截 token
axios.interceptors.request.use(
    config => {
        if (localStorage.getItem('token')) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.token = `${localStorage.getItem('token')}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
});

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
    // 密码登录
    LoginByPass(params) {
        return fetchPost('member/login/loginByPass', params)
    },
    //短信登录
    loginBySms(params) {
        return fetchPost('member/login/loginBySms', params)
    },
    //注册
    Register(params) {
        return fetchPost('member/user/register', params)
    },
    //验证码
    SendSmsCode(params){
        return fetchPost('member/sms/sendSmsCode',params)
    },
    //校验手机号
    validateMobile(params){
        return fetchPost('member/user/validateMobile',params)
    },
    //修改密码
    updateLoginPass(params){
        return fetchPost('member/user/updateLoginPass',params)
    },
    //退出登录
    logout(params){
        return fetchPost('member/login/logout',params)
    },
    //查询用户个人信息
    userInfoExceptPass(params){
        return fetchPost('member/user/userInfoExceptPass',params)
    },
    //实名认证
    realNameAuth(params){
        return fetchPost('member/user/real/realNameAuth',params)
    },
    //消息中心
    newlist(params){
        return fetchPost('member/user/message/list',params)
    },
    //查询银行卡
    queryUserBankList(params){
        return fetchPost('member/user/bank/queryUserBankList',params)
    },
    //设置默认银行卡
    updateUserBankDefault(params){
        return fetchPost('member/user/bank/updateUserBankDefault',params)
    },
    //删除银行卡
    deleteUserBank(params){
        return fetchPost('member/user/bank/deleteUserBank',params)
    },
    //添加银行卡
    addBankCard(params){
        return fetchPost('member/user/bank/addBankCard',params)
    },
    //账户明细列表
    getUserAccountList(params){
        return fetchPost('member/user/account/getUserAccountList',params)
    },
    //合计
    countMoneyCurrentMonth(params){
        return fetchPost('member/user/account/countMoneyCurrentMonth',params)
    },
    //红包列表
    queryBonusListByStatus(params){
        return fetchPost('member/user/bonus/queryBonusListByStatus',params)
    },
    //查询订单列表状态
    getOrderInfoList(params){
        return fetchPost('order/order/getOrderInfoList',params)
    },
    //查询订单详情
    getOrderDetail(params){
        return fetchPost('order/order/getOrderDetail',params)
    },
    //查询出票方案
    getTicketScheme(params){
        return fetchPost('order/order/getTicketScheme',params)
    },
    //获取大厅数据
    getHallData(params){
        return fetchPost('lottery/lottery/hall/getHallData',params)
    },
    //获取比赛列表
    getMatchList(params){
        return fetchPost('lottery/lottery/match/getMatchList',params)
    },
    //获取筛选条件列表
    filterConditions(params){
        return fetchPost('lottery/lottery/match/filterConditions',params)
    },
    //支付订单
    saveBetInfo(params){
        return fetchPost('lottery/lottery/match/saveBetInfo',params)
    },
    //计算投注信息
    getBetInfo(params){
        return fetchPost('lottery/lottery/match/getBetInfo',params)
    },
    //下单
    app(params){
        return fetchPost('payment/payment/app',params)
    },
    //比赛结果
    queryMatchResult(params){
        return fetchPost('lottery/lottery/match/queryMatchResult',params)
    },
    //赛事详情分析弹窗
    matchTeamInfosSum(params){
        return fetchPost('lottery/lottery/match/matchTeamInfosSum',params)
    }
}
