<template>
    <div class="mark_playutBox">
        <div class="mark_playut">

        </div>
        <transition name="translate"> 
            <div class="mark_footer" v-if="this.$store.state.mark_playObj.mark_play=='1'">
                <p>可选串关方式</p>
                <ul>
                    <li @click="changeColor($event,item)" :class="$store.state.mark_playObj.playutText.indexOf(item)==-1?'':'current'" v-for="(item,i) in $store.state.mark_playObj.playtList" :key='i'>
                        {{item.replace('&','串')}}
                    </li>
                </ul>
                <button>
                    <a class="pop_cur" @click="confirm()">确定</a>
                    <a @click="closeMark()">取消</a>
                </button>
            </div>
        </transition>
    </div>
</template>

<script src='./script.js'>

</script>


<style lang='scss' src='./style.scss'>

</style>

