<style lang='scss' scoped src='./style.scss'>
</style>

<template>
    <div class="incomedetail">
        <ul class="box_list_1">
            <li>时间</li>
            <li>用戶ID</li>
            <li>收入類型</li>
            <li>收入（元）</li>
        </ul>
        <ul class="box_list_2" v-for='(item,i) in incomedetail' :key='i'>
            <li>{{item.addTime}}</li>
            <li>{{item.channelDistributorId }}</li>
            <li>{{item.lotteryAmount }}</li>
            <li>{{item.income }}</li>
        </ul>
        <div class="box_div fixBottom" @click="goInclude()">如何计算收益</div>
    </div>
</template>
<script src='./script.js'>
</script>