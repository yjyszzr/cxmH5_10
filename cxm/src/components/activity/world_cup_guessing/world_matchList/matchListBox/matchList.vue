<template>
    <div class="world_matchList">
        <transition :name="transitionName"> 
 　　　　　　<router-view class="child-view"></router-view> 
 　　   </transition> 
        <div class="match_footer fixBottom">
                <div class="match_footer_left">
                    <div class="match_delete">
                        <i class="iconfont icon-icon-26"></i>
                        <!--<img src="../../../assets/img/freebuy_img/trashbin@2x.png" alt="">-->
                    </div>
                    <div class="match_test_status">
                        已选2场比赛
                    </div>
                </div>
                <button class="confirm" :disabled='flag' :class="classFlag?'noConfirm':''">
                    确定
                </button>
        </div>
    </div>
</template>
<style lang='scss' scoped src='./style.scss'>

</style>
<script src='./script.js'>

</script>


