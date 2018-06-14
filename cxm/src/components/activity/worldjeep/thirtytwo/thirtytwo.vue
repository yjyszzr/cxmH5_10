<style lang='scss' scoped src='./style.scss'>

</style>
<template>
    <div class="thirtytwo">
        <div class="tbox">
            <h4>请在每组选择两支球队晋级淘汰赛</h4>
            <p style="display:none;">{{num}}</p>
            <div class="thirtytwoBox">
                <ul v-for="(item,i) in wLidt" :key='i'>
                    <p>{{item.name}}组</p>
                    <li v-for="(data,index) in item.list" :key='index'>
                        <b @click='teamClick($event,data,item)'></b>
                        <div class="team">
                            <img :src="data.icon" alt="">
                            <span>{{data.name}}</span>
                        </div>
                        <i v-if="!data.sld"></i>
                        <i v-else style="border:none;font-style:normal;">{{data.sld}}</i>
                    </li>
                </ul>
            </div>
            <table class="jcTable">
                <tr>
                    <td>16强</td>
                    <td>8强</td>
                    <td>4强</td>
                    <td>冠亚军</td>
                    <td>冠军</td>
                    <td style="font-weight:600;">终极大奖</td>
                </tr>
                <tr>
                    <td>15万</td>
                    <td>8万</td>
                    <td>4万</td>
                    <td>2万</td>
                    <td>1万</td>
                    <td style="font-weight:600;">20万</td>
                </tr>
            </table>
            <div class="zidj">
                <b>终极大奖:</b>
                <span>猜对16强、8强、4强、冠亚军和冠军所有赛果，可平分20万巨额奖金</span>
            </div>
            <div class="jdfj">
                <b>阶段分奖:</b>
                <span>每阶段猜对赛果，均可平分巨额奖金</span>
            </div>
        </div>
        <button class="btn_jc" @click="btnClick()" :disabled='disable' :class="disable?'disable':''">
            开始竞猜 
        </button>
    </div>
</template>
<script src='./script.js'>

</script>

