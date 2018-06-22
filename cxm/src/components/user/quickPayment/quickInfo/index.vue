<template>
    <div class="quickInfo">
        <ul class="quickList">
            <li class="isxq">
                <p>
                    <span>卡号:</span>
                    <input v-model="blankNum" type="tel" @input="bankCard()" maxlength='26' onKeyPress="if(event.keyCode < 48 || event.keyCode > 57) event.returnValue = false;" placeholder="请输入银行卡号">
                </p>
                <p @click='khxq()'>详情</p>
            </li>
            <li v-show="blankFlag">
                招商银行&nbsp;借记卡
            </li>
            <li>
                <p>
                    <span>姓名:</span>
                    <input type="text" placeholder="请输入持卡人姓名">
                </p>
            </li>
            <li>
                <p>
                    <span>身份证:</span>
                    <input type="text" placeholder="请输入持卡人身份证号">
                </p>
            </li>
            <li v-show="xyInputFlag" class="isxq">
                <p>
                    <span>有效期:</span>
                    <input type="text" placeholder="请输入月份/年份">
                </p>
                <p @click='yxqxq()'>详情</p>
            </li>
            <li v-show="xyInputFlag" class="isxq">
                <p>
                    <span>CCVV2:</span>
                    <input type="tel" placeholder="请输入卡背后三位数">
                </p>
                <p @click='ccv()'>详情</p>
            </li>
            <li>
                <p>
                    <span>手机号:</span>
                    <input type="tel" placeholder="请输入银行预留手机号">
                </p>
            </li>
            <li>
                <p>
                    <span>验证码:</span>
                    <input type="tel" placeholder="请输入短信验证码">
                </p>
                <p>
                    获取短信验证码
                </p>
            </li>
        </ul>
        <div class="nCode">
            <span>收不到验证码？</span> 
        </div>
        <button class="btn">
            确认支付
        </button>
    </div>
</template>
<style src='./style.scss' scoped lang='scss'>

</style>
<script src='./script.js'>

</script>


