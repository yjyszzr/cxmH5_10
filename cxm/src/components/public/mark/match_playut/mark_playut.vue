<template>
    <div class="mark_playutBox">
        <div class="mark_playut" @click='closeMarkCz()'>

        </div>
        <transition name="translate"> 
            <!-- 串关 -->
            <div class="mark_footer" v-if="this.$store.state.mark_playObj.mark_play=='1'">
                <p>可选串关方式</p>
                <ul>
                    <li @click="changeColor($event,item)" :class="$store.state.mark_playObj.playutText.indexOf(item)==-1?'':'current'" v-for="(item,i) in $store.state.mark_playObj.playtList" :key='i'>
                        {{item=='1&1'?'单关':item.replace('&','串')}}
                    </li>
                </ul>
                <button>
                    <a class="pop_cur" @click="confirm()">确定</a>
                    <a @click="closeMark()">取消</a>
                </button>
            </div>
            <!-- 数字键盘 -->
            <div class="popup" v-if="this.$store.state.mark_playObj.mark_play=='2'">
                <div class="box">
                    <img src="../../../../assets/img/Jump.png" @click="closeMark()">
                    <div>
                        倍数<p>{{mup}}</p>
                    </div>
                </div>
                <ul class="list clearfix">
                   <li v-for="(item,i) in mapArr" :key='i' @click="mupNumber(item,$event)">{{item}}倍</li>
                </ul>
                <div class="box1 clearfix">
                    <ul class="clearfix">
                        <li v-for="(item,i) in numList" :key='i' @click="numClick(item,$event)">{{item}}</li>
                    </ul>
                    <div class="select">
                        <p @click="deleteNum($event)">删除</p>
                        <p class="cur" @click="confirm_num()">确定</p>
                    </div>
                </div>
            </div>
            <!-- 优惠券 -->
            <div class="yhMark" v-if="this.$store.state.mark_playObj.mark_play=='3'">
                <div class="yh_title">
                    可用优惠券
                </div>
                <ul class="yhList">
                    <li v-for="(item,i) in $store.state.mark_playObj.yhList" :key='i'>
                        <p>
                            <span>¥</span>
                            <span>{{item.bonusPrice}}</span>
                        </p>
                        <p>
                            <span>{{item.minGoodsAmount}}</span>
                            <span>{{item.useRange}}</span>
                        </p>
                        <p :class="item.userBonusId == $store.state.mark_playObj.bounsId?'bounsId':''" @click="bounsSelected(item,$event)">
                            
                        </p>
                    </li>
                    <p class="yhNull" v-if="$store.state.mark_playObj.yhList.length==0">
                        暂无优惠券
                    </p>
                </ul>
                <div class="yhBtn" @click="yhBtn()">
                    确定
                </div>
            </div>
            <!-- 比分，版全场，混合 -->
            <v-score @closeMarkCz="closeMarkCz()" v-if="this.$store.state.mark_playObj.mark_play=='4'"></v-score>
            <v-bqc @closeMarkCz="closeMarkCz()" v-if="this.$store.state.mark_playObj.mark_play=='5'"></v-bqc>
            <v-mix @closeMarkCz="closeMarkCz()" v-if="this.$store.state.mark_playObj.mark_play=='6'"></v-mix>
            <!-- 赛事详情 -->
            <v-matchdetail @closeMarkCz="closeMarkCz()" v-if="this.$store.state.mark_playObj.mark_play=='7'"></v-matchdetail>
        </transition>
    </div>
</template>

<script src='./script.js'>

</script>


<style lang='scss' src='./style.scss'>

</style>

