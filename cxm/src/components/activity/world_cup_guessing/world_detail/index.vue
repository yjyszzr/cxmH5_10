<template>
    <div class="worldDetail">
        <div class="dContent" v-if="this.id=='0'">
            <div class="teamBox" v-for="(item,i) in firstList" :key='i' v-if="item.selected&&item.selected=='sld'">
                <div class="markClick" @click='markClick(item)'></div>
                <img :src="item.contryPic" alt="">
                <div class="teamDetail" :class="item.selected&&item.selected=='sld'?'tActive':''">
                    <p class="teamName">{{item.contryName}}</p>
                    <p class="teamOdds">{{item.betOdds}}</p>
                </div>
            </div>
            <div class="ment"><i class="iconfont icon-icon-29 xySelected" ref='xySelected' @click="xySelectedClick()"></i><p>我已阅读并同意<router-link to="/freebuy/protocol" v-if="showtitle!='1'">《投注服务协议》</router-link><a @click="goProtocol()" v-else>《投注服务协议》</a></p></div>
        </div>
        <div class="dContent" v-if="this.id=='1'">
            <div class="hkteamBox" v-for="(item,i) in fsList" :key='i' v-if="item.selected&&item.selected=='sld'" :class="item.homeContryName=='其他'?'other':''">
                <div class="markClick" @click='markClick(item)'></div>
                <div class="imgBox">
                        <img :src="item.homeContryPic" alt="">
                        <img :src="item.visitorContryPic" alt="">
                </div>
                <div class="teamDetail"  :class="item.selected&&item.selected=='sld'?'tActive':''">
                    <p class="teamName" v-if="item.homeContryName!=item.visitorContryName">{{item.homeContryName}}&nbsp;&nbsp;VS&nbsp;&nbsp;{{item.visitorContryName}}</p>
                    <p class="teamName" v-else>{{item.homeContryName}}</p>
                    <p class="teamOdds">{{item.betOdds}}</p>
                </div>
            </div>
            <div class="ment"><i class="iconfont icon-icon-29 xySelected" ref='xySelected' @click="xySelectedClick()"></i><p>我已阅读并同意<router-link to="/freebuy/protocol" v-if="showtitle!='1'">《投注服务协议》</router-link><a @click="goProtocol()" v-else>《投注服务协议》</a></p></div>
        </div>
        <!--底部-->
        <section class="fixed fixBottom">
            <small>页面盘口，赔率仅供参考，请以出票盘口赔率为准</small>
            <ul>
                <li>
                    <div class="match_delete" @click="deleteClear()">
                        <i class="iconfont icon-icon-26"></i>
                    </div>
                    <button @click='mupClick()'>
                        倍数&nbsp;&nbsp;{{mupNum}}倍<i></i>
                    </button>
                </li>
            </ul>
            <div>
                <div class="left">
                    <p>已选择{{fsNum}}场比赛&nbsp;&nbsp;共需：<span>￥{{(fsNum*2*mupNum).toFixed(2)}}元</span></p><p>预测奖金：<span class="ycjj" v-if="ycMoney.length<=0">0.00-0.00</span><span class="ycjj" v-else>￥{{(ycMoney[0]*2*mupNum).toFixed(2)}}-{{(ycMoney[ycMoney.length-1]*2*mupNum).toFixed(2)}}</span></p>
                </div>
                <a class="right" @click="saveGo()">确定</a>
            </div>
        </section>
    </div>
</template>
<style lang='scss' scoped src='./style.scss'>

</style>
<script src='./script.js'>

</script>


