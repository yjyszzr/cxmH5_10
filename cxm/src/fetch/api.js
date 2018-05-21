import axios from 'axios'
import qs from 'qs'
import {
    Toast
} from 'mint-ui'
import {
    Indicator
} from 'mint-ui'
import router from '../router/index'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://api.caixiaomi.net/api';
//  axios.defaults.baseURL = 'http://39.106.18.39:8765/api';
//console.log(window)

//拦截 token
axios.interceptors.request.use(
    config => {
        if (localStorage.getItem('token')) { // 判断是否存在token，如果存在的话，则每个http header都加上token
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
//返回状态错误处理
axios.interceptors.response.use((res) => {
    if (res.request.responseURL.indexOf('payment/query') == -1) {
        if (res.data.code >= 30000 && res.data.code <= 310000) {
            Toast(res.data.msg)
        } else if (res.data.code == 600) {
            localStorage.clear()
            router.replace({
                path: '/user/sms',
            })
        }
        Indicator.close()
    }
    return res;
}, (error) => {
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '请求错误'
                break

            case 401:
                error.message = '未授权，请登录'
                break

            case 403:
                error.message = '拒绝访问'
                break

            case 404:
                error.message = `请求地址出错: ${error.response.config.url}`
                break

            case 408:
                error.message = '请求超时'
                break

            case 500:
                error.message = '服务器内部错误'
                break

            case 501:
                error.message = '服务未实现'
                break

            case 502:
                error.message = '网关错误'
                break

            case 503:
                error.message = '服务不可用'
                break

            case 504:
                error.message = '网关超时'
                break

            case 505:
                error.message = 'HTTP版本不受支持'
                break

            default:
                '请求超时'
        }
        setTimeout(() => {
            Indicator.close()
            Toast('出问题了程序猿小哥哥正在修复');
        }, 3000)
    } else {
        Toast('网络错误,请重试');
        Indicator.close()
    }

    return Promise.reject(error);
});

//设备信息
const device = {
    plat: 'h5',
    apiv: 1,
    appv: '1.0.0',
    appid: '',
    mac: '',
    w: window.screen.availWidth,
    h: window.screen.availHeight,
    os: '',
    mid: '',
    brand: '',
    build: '',
    channel: '',
    net: '',
    token: ''
}

export function fetchPost(url, body) {
    return new Promise((resolve, reject) => {
        axios.post(url, {
                device,
                body
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

// export function fetchGet(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.get(url, {
//                 params : params
//             })
//             .then(response => {
//                 resolve(response.data);
//             }, err => {
//                 reject(err);
//             })
//             .catch((error) => {
//                reject(error)
//             })
//     })
// }

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
    SendSmsCode(params) {
        return fetchPost('member/sms/sendSmsCode', params)
    },
    //校验手机号
    validateMobile(params) {
        return fetchPost('member/user/validateMobile', params)
    },
    //修改密码
    updateLoginPass(params) {
        return fetchPost('member/user/updateLoginPass', params)
    },
    //退出登录
    logout(params) {
        return fetchPost('member/login/logout', params)
    },
    //查询用户个人信息
    userInfoExceptPass(params) {
        return fetchPost('member/user/userInfoExceptPass', params)
    },
    //实名认证
    realNameAuth(params) {
        return fetchPost('member/user/real/realNameAuth', params)
    },
    //消息中心
    newlist(params) {
        return fetchPost('member/user/message/list', params)
    },
    //查询银行卡
    queryUserBankList(params) {
        return fetchPost('member/user/bank/queryUserBankList', params)
    },
    //设置默认银行卡
    updateUserBankDefault(params) {
        return fetchPost('member/user/bank/updateUserBankDefault', params)
    },
    //删除银行卡
    deleteUserBank(params) {
        return fetchPost('member/user/bank/deleteUserBank', params)
    },
    //添加银行卡
    addBankCard(params) {
        return fetchPost('member/user/bank/addBankCard', params)
    },
    //提现界面数据
    queryWithDrawShow(params) {
        return fetchPost('member/user/bank/queryWithDrawShow', params)
    },
    //账户明细列表
    getUserAccountList(params) {
        return fetchPost('member/user/account/getUserAccountList', params)
    },
    //合计
    countMoneyCurrentMonth(params) {
        return fetchPost('member/user/account/countMoneyCurrentMonth', params)
    },
    //红包列表
    queryBonusListByStatus(params) {
        return fetchPost('member/user/bonus/queryBonusListByStatus', params)
    },
    //查询订单列表状态
    getOrderInfoList(params) {
        return fetchPost('order/order/getOrderInfoList', params)
    },
    //查询订单详情
    getOrderDetail(params) {
        return fetchPost('order/order/getOrderDetail', params)
    },
    //查询出票方案
    getTicketScheme(params) {
        return fetchPost('order/order/getTicketScheme', params)
    },
    //获取大厅数据
    getHallData(params) {
        return fetchPost('lottery/lottery/hall/getHallData', params)
    },
    //获取比赛列表
    getMatchList(params) {
        return fetchPost('lottery/lottery/match/getMatchList', params)
    },
    //获取筛选条件列表
    filterConditions(params) {
        return fetchPost('lottery/lottery/match/filterConditions', params)
    },
    //支付订单
    saveBetInfo(params) {
        return fetchPost('lottery/lottery/match/saveBetInfo', params)
    },
    //计算投注信息
    getBetInfo(params) {
        return fetchPost('lottery/lottery/match/getBetInfo', params)
    },
    //下单
    app(params) {
        return fetchPost('payment/payment/app', params)
    },
    //比赛结果
    queryMatchResult(params) {
        return fetchPost('lottery/lottery/match/queryMatchResult', params)
    },
    //赛事详情分析弹窗
    matchTeamInfosSum(params) {
        return fetchPost('lottery/lottery/match/matchTeamInfosSum', params)
    },
    //球队分析详情信息
    matchTeamInfos(params) {
        return fetchPost('lottery/lottery/match/matchTeamInfos', params)
    },
    //资讯首页
    dllist(params) {
        return fetchPost('lottery/dl/article/list', params)
    },
    //资讯详情
    articleDetail(params) {
        return fetchPost('lottery/dl/article/detail', params)
    },
    //收藏列表
    collectList(params) {
        return fetchPost('member/user/collect/list', params)
    },
    //删除列表
    collectdelete(params) {
        return fetchPost('member/user/collect/delete', params)
    },
    //添加收藏
    collectAdd(params) {
        return fetchPost('member/user/collect/add', params)
    },
    //资讯列表,查看更多
    relatedArticles(params) {
        return fetchPost('lottery/dl/article/relatedArticles', params)
    },
    //系统可用第三方支付
    allPayment(params) {
        return fetchPost('payment/payment/allPayment', params)
    },
    //轮回查询
    query(params) {
        return fetchPost('payment/payment/query', params)
    },
    //投诉建议
    complainAdd(params) {
        return fetchPost('member/dl/complain/add', params)
    },
    //提现
    withdraw(params) {
        return fetchPost('payment/cash/withdraw', params)
    },
    //充值
    recharge(params) {
        return fetchPost('payment/payment/recharge', params)
    },
    //提现进程
    withdrawList(params) {
        return fetchPost('/payment/payment/withdraw/list', params)
    },
    //赛事结果筛选
    getFilterConditionsSomeDay(params) {
        return fetchPost('/lottery/lottery/match/getFilterConditionsSomeDay', params)
    },
}