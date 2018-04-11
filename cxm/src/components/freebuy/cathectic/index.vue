<style lang='scss' src='./style.scss'>

</style>

<template>
    <div class="wrap cathectic">
        <section>
            <p class="match">已选{{$store.state.matchSelectedList.length}}场比赛&nbsp;&nbsp;&nbsp;投注截止时间：<span>{{arrTime.length==0?'00-00 00:00':datep(arrTime[0])}}</span></p>
        </section>
        <div style="padding-bottom: 3.2rem;">
            <span style="display:none;">
                {{danNUm}}
            </span>
            <section class="section" v-for="(item,i) in $store.state.matchSelectedList" :key='i'>
                <img src="../../../assets/img/freebuy_img/Singlefield@2x.png" alt="" class="dan_icon" v-show="item.matchPlays[0].single=='1'">
                <div class="cont">
                    <p class="cont_p">{{item.leagueAddr}} {{item.changci}} 截止{{datePd(item.matchTime)}}</p>
                    <div class="mat_cen" :id='item.matchId'>
                        <div @click="deleteList(item.matchId,i)">
                            <img src="../../../assets/img/sut.png">
                        </div>
                        <ul>
                            <li :class="item.myspf.indexOf(3)!=-1?'cont_cur':''"><p @click="selectedClick($event)"></p><span>{{item.homeTeamAbbr}}</span><span>主胜{{item.matchPlays[0].homeCell.cellOdds}}</span></li>
                            <li :class="item.myspf.indexOf(1)!=-1?'cont_cur':''"><p @click="selectedClick($event)"></p><span>vs</span><span>平{{item.matchPlays[0].flatCell.cellOdds}}</span></li>
                            <li :class="item.myspf.indexOf(0)!=-1?'cont_cur':''"><p @click="selectedClick($event)"></p><span>{{item.visitingTeamAbbr}}</span><span>客胜{{item.matchPlays[0].visitingCell.cellOdds}}</span></li>
                        </ul>
                        <button :disabled='item.isDan' :class="item.isDan?'isdan':''" @click="danClick(item,$event)">胆</button>
                    </div>
                </div>
            </section>
        </div>
        <!--底部-->
        <section class="fixed">
            <small>页面盘口，赔率仅供参考，请以出票盘口赔率为准</small>
            <ul>
                <li>
                    <button @click="cgClick()" v-show="disable==false">
                        <p v-show='$store.state.matchSelectedList.length!=1||$store.state.matchSelectedList[0].single!="1"'>串关&nbsp;&nbsp;<span v-for="(item,i) in $store.state.mark_playObj.playutText" :key='i'>{{item.split('&')[0]}}串{{item.split('&')[1]}}</span><i></i></p>
                        <p v-show='$store.state.matchSelectedList.length==1&&$store.state.matchSelectedList[0].single=="1"'>单关</p>
                    </button>
                    <button disabled='true' v-show="disable==true">
                        请重新选择比赛
                    </button>
                </li>
                <li>
                    <button @click='mupClick()'>
                        倍数&nbsp;&nbsp;{{$store.state.mark_playObj.mupNum}}倍<i></i>
                    </button>
                </li>
            </ul>
            <div class="clearfix">
                <div class="left">
                    <p>{{betObj.betNum}}注{{betObj.times}}倍&nbsp;&nbsp;共需：<span>￥{{betObj.money}}</span></p><br/>预测奖金：<span>{{betObj.minBonus}}-{{betObj.maxBonus}}</span>
                </div>
                <a class="right">确定</a>
            </div>
        </section>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>