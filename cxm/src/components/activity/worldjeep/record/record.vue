<style lang='scss' scoped src='./style.scss'>

</style>
<template>
    <div class="record">
        <div class="r_center">
            <div class="boxone" v-for="(item,i) in recordList" :key='i'>
                <h5>竞猜时间：{{item.addTime}}</h5>
                <table>

                    <tr>
                        <td>竞猜轮次</td>
                        <td>竞猜方案</td>
                        <td>赛果</td>
                    </tr>
                    <tr v-if="item.plan16.length>0">
                        <td>16强</td>
                        <td>
                            <p :style="{'color':data.isGet=='1'?'#ea5504':'#505050'}" v-for="data in item.plan16" :key='data.countryId'>{{data.contryName}}&nbsp;</p>
                        </td>
                        <td :style="{'color':item.rst2=='1'?'#ea5504':'#505050'}">{{item.rst16=='0'?'待开奖':item.rst16=='1'?'命中':'未命中'}}</td>
                    </tr>
                    <tr>
                        <td>8强</td>
                        <td>
                            <p :style="{'color':data.isGet=='1'?'#ea5504':'#505050'}" v-for="data in item.plan8" :key='data.countryId'>{{data.contryName}}&nbsp;</p>
                        </td>
                        <td :style="{'color':item.rst2=='1'?'#ea5504':'#505050'}">{{item.rst8=='0'?'待开奖':item.rst8=='1'?'命中':'未命中'}}</td>
                    </tr>
                    <tr>
                        <td>4强</td>
                        <td>
                            <p :style="{'color':data.isGet=='1'?'#ea5504':'#505050'}" v-for="data in item.plan4" :key='data.countryId'>{{data.contryName}}&nbsp;</p>
                        </td>
                        <td :style="{'color':item.rst2=='1'?'#ea5504':'#505050'}">{{item.rst4=='0'?'待开奖':item.rst4=='1'?'命中':'未命中'}}</td>
                    </tr>
                    <tr>
                        <td>冠亚军</td>
                        <td>
                            <p :style="{'color':data.isGet=='1'?'#ea5504':'#505050'}" v-for="data in item.plan2" :key='data.countryId'>{{data.contryName}}&nbsp;</p>
                        </td>
                        <td :style="{'color':item.rst2=='1'?'#ea5504':'#505050'}">{{item.rst2=='0'?'待开奖':item.rst2=='1'?'命中':'未命中'}}</td>
                    </tr>
                    <tr>
                        <td>冠军</td>
                        <td>
                            <p :style="{'color':item.plan1.isGet=='1'?'#ea5504':'#505050'}">{{item.plan1.contryName}}&nbsp;</p>
                        </td>
                        <td :style="{'color':item.rst2=='1'?'#ea5504':'#505050'}">{{item.rst1=='0'?'待开奖':item.rst1=='1'?'命中':'未命中'}}</td>
                    </tr>
                    <tr class="list" v-if="item.plan16.length>0">
                        <td>终极大奖</td>
                        <td>
                            <p>所有名单都猜中，即可瓜分20万大奖</p>
                        </td>
                        <td>{{item.rst1=='1'&&item.rst2=='1'&&item.rst4=='1'&&item.rst8=='1'&&item.rst16=='1'?'命中':'待确定'}}</td>
                    </tr>
                </table>
            </div>
            <div class="nullstatus" v-if="recordList.length==0"  style="marginBottom:2.5rem;">
                    <img src="../../../../assets/img/juan.png" alt="">
                    <span>尚未提交竞猜方案</span>
            </div>
            <table v-if="recordList.length>0">
                <tr class="table_list">
                    <td>16强</td>
                    <td>8强</td>
                    <td>4强</td>
                    <td>冠亚军</td>
                    <td>冠军</td>
                    <td>终极大奖</td>
                </tr>
                <tr class="table_list">
                    <td>15万</td>
                    <td>8万</td>
                    <td>4万</td>
                    <td>2万</td>
                    <td>1万</td>
                    <td>20万</td>
                </tr>
            </table>
            <div class="prize" v-if="recordList.length>0">
                <span>终极大奖：</span>猜对16强、8强、4强、冠亚军和冠军所有赛果，可平分20万巨额奖金
            </div>
            <div class="prize" v-if="recordList.length>0">
                <span>阶段分奖：</span>（每阶段猜对赛果，均可平分巨额奖金）
            </div>
        </div>
        <button class="paymentBtn" @click="paymentBtn()" v-if="recordList.length>0">
            竞猜赛果
        </button>
    </div>
</template>

<script src='./script.js'>

</script>
