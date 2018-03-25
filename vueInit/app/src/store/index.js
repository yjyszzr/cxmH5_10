import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import plist from './plist'
Vue.use(Vuex);


export default new Vuex.Store({
    state,
    plist
})