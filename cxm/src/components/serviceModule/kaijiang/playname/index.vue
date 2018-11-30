<template>
    <div class="kj-daletou">
        <!--头部开始-->
        <div class="head">
            <span class="back-img" @click="goBack()"><img src="../../../../assets/img/ret.png" alt=""></span>
            <div class="head-text">
                {{title}}<span v-show="$route.params.playname!='jingcaizuqiu'&&$route.params.playname!='jingcailanqiu'">历史</span>开奖
            </div>
            <div style="width:0.9rem;">
                <span class="data-img"  v-show="playType==1||playType==3" @click="openPicker()"><img src="../../../../assets/img/date@3x.png" alt=""></span>
            </div>
        </div>
        <div class="ball-content" v-show="playType==1||playType==3">
            <div class="ball-nav">
                {{ballObj.dateStr}}&nbsp;&nbsp;{{ballObj.prizeMatchStr}}
            </div>
            <div class="ball-item" v-for="(item,i) in ballList" :key=i>
                <div class="ball-itemTop">
                    <div class="left">
                        <p>{{item.changciId}}&nbsp;{{item.matchTime}}</p>
                        <p>{{item.cupName}}</p>
                    </div>
                    <div class="right">
                        <p>{{item.homeTeamAbbr}}</p>
                        <p>
                            <span>{{item.whole}}</span>
                            <span v-show="playType==1">半场{{item.half}}</span>
                        </p>
                        <p>{{item.visitTeamAbbr}}</p>
                    </div>
                </div>
                <div class="ball-itemBottom" v-show="playType==1">
                    <table>
                        <tbody>
                            <tr>
                                <td>胜平负</td>
                                <td>让球</td>
                                <td>比分</td>
                                <td>总进球</td>
                                <td>半全场</td>
                            </tr>
                            <tr>
                                <td>{{item.had}}</td>
                                <td>{{item.hhad}}</td>
                                <td>{{item.crs}}</td>
                                <td>{{item.ttg}}</td>
                                <td>{{item.hafu}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="ball-itemBottom" v-show="playType==3">
                    <table>
                        <tbody>
                            <tr>
                                <td>胜负</td>
                                <td>让分胜负</td>
                                <td>胜分差</td>
                                <td>大小分</td>
                            </tr>
                            <tr>
                                <td>{{item.mnl}}</td>
                                <td>{{item.hdc}}</td>
                                <td>{{item.wnm}}</td>
                                <td>{{item.hilo}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="dlt-content" v-show="playType!=1||playType!=3">
            <div @click='goDltdetail(item)' class="dlt-item" v-for="(item,i) in dltList" :key=i>
                <div class="dlt-itemTop">
                    <p>{{item.period}}</p>
                    <p>{{item.prizeDate}}</p>
                    <p v-if="i==0"><img src="../../../../assets/img/newdlt.jpg" alt=""></p>
                </div>
                <div class="dlt-itemBottom">
                    <div class="ball">
                        <p class="redball" v-for="(r,i) in item.redPrizeNumList" :key='i'>
                            {{r}}
                        </p>
                        <p class="blueball" v-for="b in item.bluePrizeNumList" :key=b>
                            {{b}}
                        </p>
                    </div>
                    <img src="../../../../assets/img/arange.png" alt="enter">
                </div>
            </div>
            <div class="triple" v-show="trFlag">
                <v-loading></v-loading>&nbsp;<span style="font-size:0.34rem;">正在加载...</span>
            </div>
        </div>
        <mt-datetime-picker @touchmove.prevent 
            @confirm="handleConfirm"
            ref="picker"
            type="date"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            v-model="pickerValue">
        </mt-datetime-picker>
    </div>
</template>
<style src='./style.scss' lang='scss'>

</style>
<script src='./script.js'>

</script>

