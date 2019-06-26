<template>
    <div class="huodong">
        <!--头部开始-->
        <div class="head">
            <span class="back-img" @click="goBack()"><img src="../../../assets/img/ret.png" alt=""></span>
            <div class="head-text">
                活动中心
            </div>
            <div style="width:0.9rem;"></div>
        </div>
        <div class="huodong-nav">
            <div class="huodong-tab" :class="selectedLabelDefault=='进行中'?'huodong-active':''">
                <p @click="hdtab($event)">进行中</p>
            </div>
            <div class="huodong-tab" :class="selectedLabelDefault=='已结束'?'huodong-active':''">
                <p @click="hdtab($event)">已结束</p>
            </div>
        </div>
        <div class="huodong-list">
            <div class="huodong-jxz" v-show="selectedLabelDefault=='进行中'">
                <div class="huodong-item" v-for="(item,i) in onlineList" :key='i'>
                    <a :href="item.bannerLink">
                        <img :src="item.bannerImage" :alt=item.bannerName>
                        <span>
                            <b>{{item.bannerName}}</b>
                            <b>查看详情</b>
                        </span>
                    </a>
                </div>
            </div>
            <div class="huodong-yjs" v-show="selectedLabelDefault=='已结束'">
                <div class="huodong-item" v-for="(item,i) in offlineList" :key='i'>
                    <div class="huodong-mark">
                        ——&nbsp;&nbsp;&nbsp;<span>活动已结束</span>&nbsp;&nbsp;&nbsp;——
                    </div>
                    <a>
                        <img :src="item.bannerImage" :alt=item.bannerName>
                        <span>
                            <b>{{item.bannerName}}</b>
                            <b></b>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style src='./style.scss' lang='scss' scoped>

</style>
<script src='./script.js'>

</script>

