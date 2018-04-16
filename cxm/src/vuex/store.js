import Vue from 'vue'
import Vuex from 'vuex'
import api from '../fetch/api'
import { Toast } from 'mint-ui'
import {Indicator} from 'mint-ui'

Vue.use(Vuex)

const state = {
    //验证码初始化
    smsCode: {
        changeNumber: 60,
        changeText: '获取短信验证码',
        disabled: false,
        timer: ''
    },
    findphone: '',   //找回密码手机号
    userInfo: {},   //个人信息
    freebuyId: '',   //玩法页面区分
    mark_show: false,  //控制遮罩
    mark_Reset: 0, //重制赛事数据
    resultList: [],  //赛果列表
    mark_showObj:{   //赛果遮罩
        mark_show_type: 1, //遮罩显示类型
        mark_dateVal: '',  //选中日期值
        matchFinish: '', //全部
        leagueIds: '', //更多条件
        isAlreadyBuyMatch: '', //已购
    },
    matchObj: {},  //赛事列表
    matchSelectedList: [],  //选中赛事处理
    matchSaveInfo: {},   //付款接口数据保存
    mark_playObj: {        //控制上啦遮罩
        mark_playBox: false,
        mark_play: '',
        playtList: [],  //玩法列表控制
        playutText: [],  //串数
        mupNum: '5',   //倍数
        yhList: [],  //优惠券列表
        mybounsId: '',   //默认优惠券id
        bfmatchId: '',  //选中比分的id
        bfIdSaveMap: new Map(), //选取比分id，结果保存
        bfIdSaveMapFlag: 0
    },
    recordTab: '',  //个人中心子页导航
    chushihuaObj: {},  //初始化数据保存
}

const mutations = {
    GETSMSCODE(state,data){
        state.smsCode.disabled = true
        //获取验证码  
        api.SendSmsCode(data)
        .then(res => {
            Toast(res.msg)
        })
        .catch(error => {
            Toast('网络错误')
        })
        state.smsCode.timer = setInterval(()=>{
            state.smsCode.changeNumber--;
            if(state.smsCode.changeNumber<=0){
                state.smsCode.changeText = '重新获取验证码'
              clearInterval(state.smsCode.timer)
              state.smsCode.changeNumber = 60
              state.smsCode.disabled = false
            }else{
                state.smsCode.changeText = state.smsCode.changeNumber+'s后重新获取'
            }
          },1000)
    },
    RESET(state){
        clearInterval(state.smsCode.timer)
        state.smsCode.disabled = false
        state.smsCode.changeNumber = 60
        state.smsCode.changeText = '获取短信验证码'
    },
    MATCHLIST(state,data){
        api.getMatchList(data)
        .then(res => {
            if(res.code==0) {
                console.log(res)
            state.matchObj = res.data
            state.matchObj.hotPlayList.forEach(item => {
                item.selectedNum = 0
                item.selectedList = []
            });
            state.matchObj.playList.forEach(item => {
                for(let i =0 ;i<item.playList.length;i++){
                    item.playList[i].selectedNum = 0
                    item.playList[i].selectedList = []
                }
            });
            state.chushihuaObj = JSON.parse(JSON.stringify(state.matchObj))
            }else{
            Toast(res.msg)
            }
            Indicator.close()
        })
        .catch(error => {
            Toast('网络错误')
        })
    },
    RESULT(state,data){
        api.queryMatchResult(data)
                .then(res => {
                    if(res.code==0) {
                        //console.log(res)
                        state.resultList = res.data
                    }else{
                        Toast(res.msg)
                    }
                    Indicator.close()
                })
                .catch(error => {
                    Toast('网络错误')
            })
    }
}

const actions = {
    getSmsCode({commit}, value) {
        commit("GETSMSCODE",value);
    },
    reset({commit}){
        commit("RESET");
    },
    getMatchList({commit}, value) {
        commit("MATCHLIST",value);
    },
    getResultList({commit}, value) {
        commit("RESULT",value);
    },
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})