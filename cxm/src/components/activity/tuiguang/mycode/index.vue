<style lang='scss' scoped src='./style.scss'>
</style>

<template>
    <div class="mycode">
        <p>“每一天”助力2018世界杯110元彩金等您来领</p>
        <!--<img class="img">-->
        <qrcode :value="qrcodeUrl" v-if="qrcodeUrl" :options="{ size: 300 }"></qrcode>
        <div class="btn">
            <button>立即邀请好友</button>
            <button>保存二维码到手机相册</button>
        </div>

    </div>
</template>
<script src='./script.js'>

</script>
