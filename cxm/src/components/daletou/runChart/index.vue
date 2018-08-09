<template>
    <div class="run-chart">
        <!--头部开始-->
        <div class="head">
            <span class="back-img" @click="goBack()"><img src="../../../assets/img/ret.png" alt=""></span>
            <div class="head-text">
                <span>彩小秘·走势图</span>
            </div>
            <div>
                <span class="memu-btn" @click="popShow = !popShow"><img src="../images/TrendSetting@3x.png" alt=""></span>
            </div>
        </div>
        <ul class="runc-title">
            <li @click="tabClick(i)" :class="{active: i+1==daletouActive}" v-for="(item,i) in runchartTab" :key='i'>
                <span>{{item}}</span>
            </li>
        </ul>
        <section class="runc-box">
            <div class="kjhm" v-if="daletouActive==1">
                <div class="box-head">
                    <p>期号</p>
                    <p>开奖号码</p>
                </div>
                <ul class="box-content">
                    <li v-for="(item,i) in runchartData.lottoNums" :key='i'>
                        <p>{{item.termNum}}</p>
                        <p>
                            <span v-for="(data,index) in item.numList" :key='index'>
                                {{data}}
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
        </section>
        <footer class="runc-foot">
            <div class="kj-foot" v-if="daletouActive==1">
                第{{runchartData.stopTime.split('|')[0]}}期&nbsp;&nbsp;&nbsp;截止时间 {{runchartData.stopTime.split('|')[1]}}
            </div>
            <div class="hz-foot" v-if="daletouActive==2">
                <div class="hz-footTop">
                    <div class="tab-box">
                        <div class="xh">选号</div>
                        <div class="tab" ref="tab">
                            <div class="tab_content" ref="tabcontent">
                                <div class="tab_item" v-for="item in 35" :key='item'>
                                    {{smjs(item)}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-box">
                        <div class="xh">已选</div>
                        <div class="tab" ref="stab">
                            <div class="tab_content" ref="stabcontent">
                                <div class="tab_item" v-for="(item,i) in h_nums" :key='i'>
                                    {{item}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hz-footBottom">
                    <div class="hz-fbleft">
                        <div class="hz-delete" @click="clearNums()">
                            <i class="iconfont icon-icon-26"></i>
                        </div>
                        <div class="hz-text">
                            
                        </div>
                    </div>
                    <div class="hz-fbright">
                        确定
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<style lang='scss' src='./style.scss'>

</style>
<script src='./script.js'>

</script>

