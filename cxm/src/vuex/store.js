import Vue from 'vue'
import Vuex from 'vuex'
import api from '../fetch/api'
import {
    Toast
} from 'mint-ui'
import {
    Indicator
} from 'mint-ui'

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
        bfIdSaveMap: new Map(), //选取比分id，结果保存
        bfIdSaveMapFlag: 0,
        matchDetailFlag: true
    },
    recordTab: '', //个人中心子页导航
    chushihuaObj: {}, //初始化数据保存
    deleteFlag: false, //收藏删除开关
    zxCollectionFlag: '', //收藏按钮是否选中
    zxDetailObj: '', //资讯详情数据
}

const mutations = {
    GETSMSCODE(state, data) {
        //获取验证码  
        api.SendSmsCode(data)
            .then(res => {
                //console.log(res)
                if (res.code == '0') {
                    state.smsCode.disabled = true
                    state.smsCode.timer = setInterval(() => {
                        state.smsCode.changeNumber--;
                        if (state.smsCode.changeNumber <= 0) {
                            state.smsCode.changeText = '重新获取验证码'
                            clearInterval(state.smsCode.timer)
                            state.smsCode.changeNumber = 60
                            state.smsCode.disabled = false
                        } else {
                            state.smsCode.changeText = state.smsCode.changeNumber + 's后重新获取'
                        }
                    }, 1000)
                }
                Toast(res.msg)
            })
    },
    RESET(state) {
        clearInterval(state.smsCode.timer)
        state.smsCode.disabled = false
        state.smsCode.changeNumber = 60
        state.smsCode.changeText = '获取短信验证码'
    },
    MATCHLIST(state, data) {
        data.hotPlayList.forEach(item => {
            item.selectedNum = 0
            item.selectedList = []
        });
        data.playList.forEach(item => {
            for (let i = 0; i < item.playList.length; i++) {
                item.playList[i].selectedNum = 0
                item.playList[i].selectedList = []
            }
        });
        state.chushihuaObj = JSON.parse(JSON.stringify(data))
        state.matchObj = data
    },
    RESULT(state, data) {
        state.resultList = data
    },
    FINDPHONE(state, data) {
        state.findphone = data
    },
    USERINFO(state, data) {
        state.userInfo = data
    },
    RECORDTAB(state, data) {
        state.recordTab = data
    },
    MARKDATEVAL(state, data) {
        state.mark_showObj.mark_dateVal = data
    },
    MARKSHOW(state, data) {
        state.mark_show = data
    },
    MARKRESET(state, data) {
        if (data == 0) {
            state.mark_Reset = data
        } else {
            state.mark_Reset++
        }
    },
    MARKSHOWTYPE(state, data) {
        state.mark_showObj.mark_show_type = data
    },
    MATCHFINISH(state, data) {
        state.mark_showObj.matchFinish = data
    },
    LEAGUEIDS(state, data) {
        state.mark_showObj.leagueIds = data
    },
    ISAlREADYBUYMATCH(state, data) {
        state.mark_showObj.isAlreadyBuyMatch = data
    },
    FREEBUYID(state, data) {
        state.freebuyId = data
    },
    MATCHOBJ(state, data) {
        state.matchObj = data
    },
    MATCHSELECTEDLIST(state, data) {
        if (data == []) {
            state.matchSelectedList = []
        } else {
            state.matchSelectedList.push(data)
        }
    },
    MATCHSAVEINFO(state, data) {
        state.matchSaveInfo = data
    },
    MARKPLAYBOX(state, data) {
        state.mark_playObj.mark_playBox = data
    },
    MARKPLAY(state, data) {
        state.mark_playObj.mark_play = data
    },
    PLAYLIST(state, data) {
        state.mark_playObj.playtList = data
    },
    PLAYUTTEXT(state, data) {
        state.mark_playObj.playutText = data
    },
    MUPNUM(state, data) {
        state.mark_playObj.mupNum = data
    },
    YHLIST(state, data) {
        state.mark_playObj.yhList = data
    },
    MYBOUNSID(state, data) {
        state.mark_playObj.mybounsId = data
    },
    BFMATCHID(state, data) {
        state.mark_playObj.bfmatchId = data
    },
    BFIDSAVEMAP(state, data) {
        state.mark_playObj.bfIdSaveMap = data
    },
    BFIDSAVEMAPFLAG(state, data) {
        if (data == 0) {
            state.mark_playObj.bfIdSaveMapFlag = data
        } else {
            state.mark_playObj.bfIdSaveMapFlag++
        }
    },
    MATCHDETAILFLAG(state, data) {
        state.mark_playObj.matchDetailFlag = data
    },
    DELETEFLAG(state, data) {
        state.deleteFlag = data
    },
    ZXCOLLEXCTIONFLAG(state, data) {
        state.zxCollectionFlag = data
    },
    ZXDETAILOBJ(state, data) {
        state.zxDetailObj = data
    },
    ARRTIME(state, data){
        state.arrTime = data
    }
}

const actions = {
    getSmsCode({
        commit
    }, value) {
        commit("GETSMSCODE", value);
    },
    reset({
        commit
    }) {
        commit("RESET");
    },
    getMatchList({
        commit
    }, value) {
        api.getMatchList(value)
            .then(res => {
                if (res.code == 0) {
                    //	console.log(res)
                    commit("MATCHLIST", res.data);
                } else {
                    Toast(res.msg)
                }
                Indicator.close()
            })
    },
    getResultList({
        commit
    }, value) {
        api.queryMatchResult(value)
            .then(res => {
                if (res.code == 0) {
                    //console.log(res)
                    commit("RESULT", res.data);
                } else {
                    Toast(res.msg)
                }
                Indicator.close()
            })
    },
    changeFindphone({
        commit
    }, value) {
        commit("FINDPHONE", value);
    },
    changeUserInfo({
        commit
    }, value) {
        commit("USERINFO", value);
    },
    changeRecordTab({
        commit
    }, value) {
        commit("RECORDTAB", value);
    },
    getMarkDateVal({
        commit
    }, value) {
        commit("MARKDATEVAL", value);
    },
    getMarkShow({
        commit
    }, value) {
        commit("MARKSHOW", value);
    },
    getMarkReset({
        commit
    }, value) {
        commit("MARKRESET", value);
    },
    getMarkShowType({
        commit
    }, value) {
        commit("MARKSHOWTYPE", value);
    },
    getMatchFinish({
        commit
    }, value) {
        commit("MATCHFINISH", value);
    },
    getLeagueIds({
        commit
    }, value) {
        commit("LEAGUEIDS", value);
    },
    getisAlreadyBuyMatch({
        commit
    }, value) {
        commit("ISAlREADYBUYMATCH", value);
    },
    getFreebuyId({
        commit
    }, value) {
        commit("FREEBUYID", value);
    },
    getmatchobj({
        commit
    }, value) {
        commit("MATCHOBJ", value);
    },
    getmatchSelectedList({
        commit
    }, value) {
        commit("MATCHSELECTEDLIST", value);
    },
    getmatchSaveInfo({
        commit
    }, value) {
        commit("MATCHSAVEINFO", value);
    },
    getMarkplayBox({
        commit
    }, value) {
        commit("MARKPLAYBOX", value);
    },
    getMarkplay({
        commit
    }, value) {
        commit("MARKPLAY", value);
    },
    getPlayList({
        commit
    }, value) {
        commit("PLAYLIST", value);
    },
    getPlayuText({
        commit
    }, value) {
        commit("PLAYUTTEXT", value);
    },
    changeMupNum({
        commit
    }, value) {
        commit("MUPNUM", value);
    },
    changeYhList({
        commit
    }, value) {
        commit("YHLIST", value);
    },
    getMyBounsId({
        commit
    }, value) {
        commit("MYBOUNSID", value);
    },
    getBfMatchId({
        commit
    }, value) {
        commit("BFMATCHID", value);
    },
    getBfIdSaveMap({
        commit
    }, value) {
        commit("BFIDSAVEMAP", value);
    },
    getBfIdSaveMapFlag({
        commit
    }, value) {
        commit("BFIDSAVEMAPFLAG", value);
    },
    getMatchDetailFlag({
        commit
    }, value) {
        commit("MATCHDETAILFLAG", value);
    },
    deleteMyFlag({
        commit
    }, value) {
        commit("DELETEFLAG", value);
    },
    getCollectionFlag({
        commit
    }, value) {
        commit("ZXCOLLEXCTIONFLAG", value)
    },
    getDetailObj({
        commit
    }, value) {
        api.articleDetail(value)
            .then(res => {
                //console.log(res)
                if (res.code == 0) {
                    commit("ZXDETAILOBJ", res.data)
                } else {
                    Toast(res.msg)
                }
                Indicator.close()
            })
    },
    getArrTime({commit},value){
        commit("ARRTIME", value)
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    //strict: true
})