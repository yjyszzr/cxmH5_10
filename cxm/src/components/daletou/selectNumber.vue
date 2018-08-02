<template>
    <div class="select-num">
        <!--头部开始-->
        <div class="head">
            <span class="back-img" @click = "goBack()"><img src="../../assets/img/ret.png" alt=""></span>
            <div class="head-text">
                <span>彩小秘·标准选号</span>
                <span class="header-down" @click="openOrclose()"><img id="downImg" src="../../assets/img/freebuy_img/Collapse@3x.png" alt=""></span>
            </div>
            <div>
                <span class="memu"><img src="./images/More@3x.png" alt=""></span>
            </div>
        </div>
        <!--头部结束-->
        <transition name="mybox">
            <div class="title-collspce" v-if="this.$store.state.daletou.collaspe">
                <p class="btn-box">标准选号 <span class="img-box"><img src="./images/Check@3x.png" alt=""></span></p>
                <p class="btn-box">胆拖选号 <span class="img-box"><img src="./images/Check@3x.png" alt=""></span></p>
            </div>
        </transition>
        <div class="pop">
            <div class="pop-body">

            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    @import "../../assets/css/function.scss";
    .select-num{
        .head{
            overflow: hidden;
            height: px2rem(100px);
            background: #f4f4f4;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .back-img{
                display: inline-block;
                height:px2rem(30px) ;
                width:px2rem(30px) ;
                margin-left: px2rem(50px);
                img{
                    width: 100%;
                }
            }
            .head-text{
                display: flex;
                align-items: center;
                font-size: px2rem(32px);
                color: #505050;
                .header-down{
                    display: inline-block;
                    margin-left: px2rem(10px);
                    height:px2rem(30px) ;
                    width:px2rem(30px) ;
                    img{
                        width: 100%;
                    }
                }
            }
            .memu{
                display: inline-block;
                height: px2rem(30px);
                width: px2rem(30px);
                margin-right: px2rem(50px);
                img{
                    width: 100%;
                }
            }

        }
        .tranform180{
            transform:rotate(180deg)
        }
        .mybox-leave-active,.mybox-enter-active{
            transition:  all .5s ease;
        }
        .mybox-leave-active,.mybox-enter{
            height:0px !important;
        }
        .mybox-leave,.mybox-enter-active{
            height: px2rem(100px);
        }
        .title-collspce{
            height: px2rem(100px);
            border-top: 1px solid #9f9f9f;
            display: flex;
            justify-content:center;
            flex-direction: row;
            align-items: center;
            overflow: hidden;
            .btn-box{
                line-height: px2rem(60px);
                width: px2rem(180px);
                text-align: center;
                font-size: px2rem(26px);
                color: #ea5504;
                border: 1px solid #ea5504;
                position: relative;
                margin:  0 px2rem(30px);
                .img-box{
                    display: inline-block;
                    height:px2rem(36px);
                    width: px2rem(36px);
                    position:absolute;
                    bottom: -1px;
                    right: -1px;
                    img{
                        width: 100%;
                    }
                }
            }
        }
        .pop{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
        }
    }
</style>
<script>
    export default {
        name: "select-number",
        data(){
          return{
              popupVisible : true
          }
        },
        created(){

        },
        methods:{
            // 头部返回
            goBack() {
                this.$router.go(-1);
            },
            //大乐透选号头部是否展开
            openOrclose(event){
                if($('#downImg').hasClass('tranform180')){
                    $('#downImg').removeClass('tranform180')
                }else{
                    $('#downImg').addClass('tranform180')
                }
                this.$store.dispatch("daletouCollaspe",!this.$store.state.daletou.collaspe)
            },
        },
        beforeRouteLeave(to, from, next) {
            // next()
            // if(to.path!='/lottery/teamDetail'){
            //     this.$store.dispatch("getMarkShow",false)
            //     this.$store.dispatch("getMarkShowType",'')
            //     this.$store.dispatch("getLeagueIds",'')
            //     this.$store.dispatch("getMarkDateVal",'')
            // }
        }
    }
</script>

