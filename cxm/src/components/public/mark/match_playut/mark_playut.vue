<template>
    <div class="mark_playutBox">
        <div class="mark_playut">

        </div>
        <transition name="translate"> 
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
        </transition>
        <transition name="translate"> 
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
        </transition>
    </div>
</template>

<script src='./script.js'>

</script>


<style lang='scss' src='./style.scss'>

</style>

