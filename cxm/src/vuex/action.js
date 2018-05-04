import api from '../fetch/api'
import {
    Toast
} from 'mint-ui'
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
                    	//console.log(res)
                    commit("MATCHLIST", res.data);
                } else {
                    Toast(res.msg)
                }
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
            })
    },
    getArrTime({commit},value){
        commit("ARRTIME", value)
    }
}

export default actions