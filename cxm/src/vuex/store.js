import Vue from 'vue'
import Vuex from 'vuex'
import {
    Toast
} from 'mint-ui'
import mutations from './mutations'
import actions from './action'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
    //验证码初始化
    smsCode: {
        changeNumber: 60,
        changeText: '获取短信验证码',
        disabled: false,
        timer: ''
    },
    findphone: '', //找回密码手机号
    userInfo: {}, //个人信息
    freebuyId: '', //玩法页面区分
    mark_show: false, //控制遮罩
    mark_Reset: 0, //重制赛事数据
    resultList: [], //赛果列表
    arrTime: [], //赛事截止时间
    mark_showObj: { //赛果遮罩
        mark_show_type: 1, //遮罩显示类型
        mark_dateVal: '', //选中日期值
        matchFinish: '', //全部
        leagueIds: '', //更多条件
        isAlreadyBuyMatch: '', //已购
    },
    matchObj: {}, //赛事列表
    matchSelectedList: [], //选中赛事处理
    matchSaveInfo: {}, //付款接口数据保存
    mark_playObj: { //控制上啦遮罩
        mark_playBox: false,
        mark_play: '',
        playtList: [], //玩法列表控制
        playutText: [], //串数
        mupNum: '5', //倍数
        yhList: [], //优惠券列表
        mybounsId: '', //默认优惠券id
        bfmatchId: '', //选中比分的id
        bfIdSaveMap: {}, //选取比分id，结果保存
        bfIdSaveMapFlag: 0,
        matchDetailFlag: true
    },
    recordTab: '', //个人中心子页导航
    chushihuaObj: {}, //初始化数据保存
    deleteFlag: false, //收藏删除开关
    zxCollectionFlag: '', //收藏按钮是否选中
    zxDetailObj: '', //资讯详情数据
    findObj:{
        findTab: [],   //发现顶部列表
        findActive: '1' //发现选中参数
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    plugins: [createPersistedState({'key':'issue','paths':['matchObj','matchSelectedList','mark_playObj','findObj'],storage: window.sessionStorage})]
    //strict: true
})