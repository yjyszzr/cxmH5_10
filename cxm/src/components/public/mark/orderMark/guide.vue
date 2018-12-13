<template>
    <div class="guide">
        <div class="h5-guide" v-if="!$route.query.cxmxc">
            <div class="one" v-show="step==0">
                <img src="../../../../assets/img/1111.png" alt="">
                <button class="know" @click="step++">我知道了</button>
            </div>
            <div class="two" v-show="step==1">
                <button @click="step++" class="know">我知道了</button>
                <img src="../../../../assets/img/222.png" alt="">
            </div>
            <div class="three" v-show="step==2">
                <img src="../../../../assets/img/555.png" alt="">
                <button class="know" @click="end()">我知道了</button>
            </div>
        </div>
        <div class="ios-guide" v-else>
            <div class="one" v-show="step==0">
                <img src="../../../../assets/img/1111.png" alt="">
                <button class="know" @click="step++">我知道了</button>
            </div>
            <div class="four" v-show="step==1">
                <img src="../../../../assets/img/444.png" alt="">
                <button @click="end()" class="know">我知道了</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "guide",
        data(){
            return{
                step: 0
            }
        },
        methods:{
            end(){
                this.$store.dispatch("getMarkShow", false)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../../assets/css/function.scss";
    .guide{
        .one,.two,.three,.four{
            position: absolute;
            width: 100%;
            left: 0;
            img{
                width: 100%;
            }
            .know{
                width: px2rem(250px);
                height: px2rem(75px);
                display: block;
                font-size: px2rem(30px);
                color: #fff;
                border: 1px solid #fff;
                background: rgba(255,255,255,0.2);
                border-radius: px2rem(10px);
            }
        }
        .one{
            top: 0;
            .know{
                margin: px2rem(30px) auto 0;
            }
        }
        .two{
            bottom: 0;
            .know{
                margin: 0 auto px2rem(30px);
            }
        }
        .three{
            top: px2rem(100px);
            img{
                width: 80%;
                margin-left: 10%;
            }
            .know{
                margin: px2rem(30px) auto 0;
            }
        }
        .four{
            top: 0;
            .know{
                margin: px2rem(30px) auto 0;
            }
        }
    }
</style>