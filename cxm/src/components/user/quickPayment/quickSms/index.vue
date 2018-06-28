<template>
    <div class="quickSms">
        <div class="money">
            <span>¥</span>&nbsp;20.00
        </div>
        <p>支付金额</p>
        <p>招商银行借记卡（尾号5212）<img src="../../../../assets/img/Jump.png" alt=""></p>
        <div class="container">
            <div class="item" v-for="i in 6" :key="i">{{numbers[i-1]}}</div>
            <input v-model="numbers" maxlength="6" type="tel" autofocus="autofocus"/>
        </div>
        <button class="getCodeBtn">获取验证码</button>
    </div>
</template>
<style src='./style.scss' scoped lang='scss'>

</style>
<script src='./script.js'>

</script>


