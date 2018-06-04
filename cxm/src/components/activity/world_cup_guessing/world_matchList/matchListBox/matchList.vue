<template>
    <div class="world_matchList">
        <transition :name="transitionName"> 
 　　　　　　<router-view class="child-view" :style="{'bottom':$route.path.split('/')[3]&&$route.path.split('/')[3]=='fsplace'?'2.34666rem':'1.17333rem'}"></router-view> 
 　　   </transition> 
        <div class="match_footer fixBottom">
                <button @click="filter()" class="fliterBtn" v-if="$route.path.split('/')[3]&&$route.path.split('/')[3]=='fsplace'">
                    <span class="iconfont icon-icon-21"></span>
                    <span>筛选</span>
                </button>
                <div class="boxfoot">
                    <div class="match_footer_left">
                        <div class="match_delete" @click="deleteClear()">
                            <i class="iconfont icon-icon-26"></i>
                            <!--<img src="../../../assets/img/freebuy_img/trashbin@2x.png" alt="">-->
                        </div>
                        <div class="match_test_status" v-html='matchText'>
                            
                        </div>
                    </div>
                    <button class="confirm" :disabled='flag' :class="classFlag?'noConfirm':''" @click="confirm()">
                        确定
                    </button>
                </div>
        </div>
    </div>
</template>
<style lang='scss' scoped src='./style.scss'>

</style>
<script src='./script.js'>

</script>


