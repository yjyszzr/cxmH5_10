<style lang='scss' src='./style.scss'>

</style>

<template>
    <div class="wrap cathectic">
        <section>
            <p class="match">已选{{$store.state.matchSelectedList.length}}场比赛&nbsp;&nbsp;&nbsp;投注截止时间：<span>{{arrTime.length==0?'00-00 00:00':datep(arrTime[0])}}</span></p>
        </section>
        <div style="padding-bottom: 3.2rem;">
            <section class="section" v-for="(item,i) in $store.state.matchSelectedList" :key='i'>
                <div class="cont">
                    <p class="cont_p">{{item.leagueAddr}} {{item.changci}} 截止{{datePd(item.matchTime)}}</p>
                    <div class="mat_cen" :id='item.matchId'>
                        <div @click="deleteList(item.matchId,i)">
                            <img src="../../../assets/img/sut.png">
                        </div>
                        <ul>
                            <li :class="item.myspf.indexOf(3)!=-1?'cont_cur':''"><p @click="selectedClick($event)"></p><span>{{item.homeTeamAbbr}}</span><span>主胜{{item.homeCell.cellOdds}}</span></li>
                            <li :class="item.myspf.indexOf(1)!=-1?'cont_cur':''"><p @click="selectedClick($event)"></p><span>vs</span><span>平{{item.flatCell.cellOdds}}</span></li>
                            <li :class="item.myspf.indexOf(0)!=-1?'cont_cur':''"><p @click="selectedClick($event)"></p><span>{{item.visitingTeamAbbr}}</span><span>客胜{{item.visitingCell.cellOdds}}</span></li>
                        </ul>
                        <p>胆</p>
                    </div>
                </div>
            </section>
        </div>
        <!--底部-->
        <section class="fixed">
            <small>页面盘口，赔率仅供参考，请以出票盘口赔率为准</small>
            <ul>
                <li @click="cgClick()">串关&nbsp;&nbsp;<span v-for="(item,i) in $store.state.mark_playObj.playutText" :key='i'>{{item.split('&')[0]}}串{{item.split('&')[1]}}</span><i></i></li>
                <li>倍数&nbsp;&nbsp;{{mupNum}}倍<i></i></li>
            </ul>
            <div class="clearfix">
                <div class="left">
                    <p>{{betObj.betNum}}注{{betObj.times}}倍&nbsp;&nbsp;共需：<span>￥{{betObj.money}}</span></p><br/>预测奖金：<span>{{betObj.minBonus}}-{{betObj.maxBonus}}</span>
                </div>
                <a class="right">确定</a>
            </div>
        </section>
        <!--弹窗-->
        <section>
            <div class="popup clearfix">
                <div class="box clearfix">
                    <img src="../../../assets/img/Jump.png">
                    <div>
                        倍数<p>5</p>
                    </div>
                </div>
                <ul class="list clearfix">
                   <li>5倍</li>
                   <li>5倍</li>
                   <li>5倍</li>
                   <li>5倍</li>
                   <li>5倍</li>
                </ul>
                <div class="box1 clearfix">
                    <ul class="clearfix">
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div class="select">
                        <p class="cur">删除</p>
                        <p >确定</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>