<style lang='scss' scoped src='./style.scss'>

</style>

<template>
    <div class="popup" @touchmove.prevent>
        <div class="mark"></div>
        <div class="popup_cen" v-show="open==false">
            <img src="../image/img6.png" @click='sjhbClick()'>
        </div>
        <transition name="fade">
            <div class="popup_cen" v-show="open==true">
                <img src="../image/img7.png">
                <p>恭喜!</p>
                <p>彩小秘恭喜您通过充值活动</p>
                <p>获得{{donationPrice}}元彩金</p>
                <div class="btn">
                    <a @click="close()">关闭</a>
                    <a @click="goCard()">去看看</a>
                </div>
            </div>
        </transition>
    </div>
</template>
<script src='./script.js'>

</script>