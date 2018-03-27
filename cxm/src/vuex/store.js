import Vue from 'vue'
import Vuex from 'vuex'
import api from '../fetch/api'
import { Toast } from 'mint-ui'

Vue.use(Vuex)

const state = {
    //验证码初始化
    smsCode: {
        changeNumber: 60,
        changeText: '获取短信验证码',
        disabled: false,
        timer: ''
    }
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
        state.timer = setInterval(()=>{
            state.smsCode.changeNumber--;
            if(state.smsCode.changeNumber<=0){
                state.smsCode.changeText = '重新获取验证码'
              clearInterval(state.timer)
              state.smsCode.changeNumber = 60
              state.smsCode.disabled = false
            }else{
                state.smsCode.changeText = state.smsCode.changeNumber+'s后重新获取'
            }
          },1000)
    }
}

const actions = {
    getSmsCode({commit}, value) {
        commit("GETSMSCODE",value);
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})