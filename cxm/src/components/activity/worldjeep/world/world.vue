<style lang='scss' scoped src='./style.scss'>

</style>
<template>
    <div class="world">
        <div  class="page page-current" id='router'>
            <div class="activity_sm" @click="activity_smClick()">竞猜记录</div>
            <img onclick="return false" src="../image/img.jpg"  class="bg"/>
            <div class="jcBox">
                <button class="xqsm" @click="xqsmBtn()">活动详细说明</button>
                <button class="ksjc" @click="ksjcBtn()">开始竞猜</button>
            </div>
        </div>
    </div>
</template>
<script src='./script.js'>

</script>
