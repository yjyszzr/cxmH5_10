<template>
    <div class="Header" @touchmove.prevent>
        <!--头部-->
        <div class="headerTop" v-show="showTitle()">
            <a @click="return_back()" class="go_return"></a>
            <p class="headerText">{{title}}</p>
            <div class="filter">

            </div>
        </div>
        <!--头部tab-->
        <ul class="send" v-if="$route.path.split('/')[2]&&$route.path.split('/')[2]=='record'">
            <li :class="$store.state.recordTab==''||$store.state.recordTab=='1'?'cur':''"><p @click='curClick($event)'>全部</p></li>
            <li :class="$store.state.recordTab=='2'?'cur':''"><p @click='curClick($event)'>中奖</p></li>
            <li :class="$store.state.recordTab=='3'?'cur':''"><p @click='curClick($event)'>待开奖</p></li>
        </ul>
        <div class="swiper-container findTab" v-if="$route.path.split('/')[1]=='find'">
            <div class="swiper-wrapper">
                <div class="swiper-slide" @click="findTabClick($event,item.cat)" v-for="item in findTab" :key='item.cat' :class="item.cat==findStatus?'findactive':''">
                    <p>{{item.catName=='世界杯'?'其他':(item.catName=='竞彩预测'?'重心推荐':item.catName)}}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import datefilter from "../../../util/datefilter";
    import { Indicator,Actionsheet } from "mint-ui";
    import { getUrlStr,nativeApp } from "../../../util/common";
    export default {
        name: "Header",
        props: {
            title: String,
            menuDisplay: Boolean,
            menuNosult: Boolean
        },
        data() {
            return {
                
            }
        },
        created(){
            
        },
        methods: {
            return_back() {
                this.$router.go(-1);
            },
            curClick(c) {
                $(".cur").removeClass("cur");
                c.target.parentElement.className = "cur";
                if (c.target.innerText == "全部") {
                    this.$store.dispatch("changeRecordTab", "1");
                } else if (c.target.innerText == "中奖") {
                    this.$store.dispatch("changeRecordTab", "2");
                } else if (c.target.innerText == "待开奖") {
                    this.$store.dispatch("changeRecordTab", "3");
                }
            },
            findTabClick(c,s){
                if(c.target.localName=='p'&&c.target.parentElement.className.indexOf('findactive')==-1){
                    Indicator.open()
                    $('.findactive').removeClass('findactive')
                    c.target.parentElement.className = "swiper-slide findactive";
                    this.$store.dispatch("changeFinActive",s)
                }
            },
            showTitle(){
                return false;
            }
        },
        computed: {
            findTab() {
                return this.$store.state.findObj.findTab;
            },
            findStatus() {
                return this.$store.state.findObj.findActive;
            },
        },
        watch:{
            
        }
    };
</script>


<style lang='scss' scoped>
    @import "../../../assets/css/function.scss";
    .Header {
        width: 100%;
        .mint-actionsheet-listitem, .mint-actionsheet-button{
            font-size: px2rem(28px)!important;
        }
        .headerTop {
            overflow: hidden;
            height: px2rem(88px);
            background: #f4f4f4;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .go_return {
                flex: 1;
                // padding-left: px2rem(80px);
                height: 100%;
                background: url("../../../assets/img/ret.png") no-repeat;
                background-position: px2rem(34px) center;
                background-size: px2rem(30px) auto;
                vertical-align: middle;
            }
            .filter {
                flex: 1;
                display: flex;
                height: 100%;
                width: px2rem(138px);
                box-sizing: border-box;
                ul{
                    display: block;
                    height: 100%;
                    padding: 0 px2rem(10px) 0 px2rem(10px);
                    display: flex;
                    align-items: center;
                    font-size: px2rem(28px);
                    color: #787878;
                    li{
                        font-size: px2rem(28px);
                    }
                }
                span {
                    display: block;
                    height: 100%;
                    padding: 0 px2rem(10px) 0 px2rem(10px);
                    display: flex;
                    align-items: center;
                    font-size: px2rem(28px);
                    color: #787878;
                }
                .actine_sms {
                    font-size: px2rem(18px);
                }
                .iconfont {
                    font-size: px2rem(30px);
                }
                .colMenu {
                    width: 100%;
                    justify-content: flex-end;
                    padding-right: px2rem(30px);
                    box-sizing: border-box;
                }
                .active_sm {
                    width: 100%;
                    justify-content: flex-end;
                    padding-right: px2rem(30px);
                    box-sizing: border-box;
                    display: block;
                }
                .icon-icon-44 {
                    color: #787878;
                }
                .djs{
                    padding: 0;
                    flex: 1;
                    display: flex;
                    justify-content: flex-end;
                    margin-left: px2rem(-30px);
                    .tas{
                        padding-right: px2rem(30px);
                        .icon-icon-22{
                            margin-left: px2rem(4px);
                        }
                    }
                }
                .setting,.danxm{
                    padding: 0;
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    padding-right: px2rem(30px);
                }
                .lottery-select{
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    .data-img{
                        img{
                            height: px2rem(30px);
                            width: px2rem(30px);
                        }
                    }
                }
                .daletou-menu{
                    margin-left: 60%;
                }
            }
            .headerText {
                flex: 3;
                height: 100%;
                display: flex;
                align-items: center;
                //width: px2rem(500px);
                font-size: px2rem(32px);
                color: #505050;
                justify-content: center;
            }
        }
        .send,
        .sendaccount,
        .senddetail {
            height: px2rem(88px);
            background: #fff;
            overflow: hidden;
            display: flex;
            border-bottom: 1px solid #f0f0f0;
            li {
                flex: 1;
                height: px2rem(48px);
                margin-top: px2rem(20px);
                border-right: 1px solid #f1f1f1;
                color: #505050;
                font-size: px2rem(30px);
                text-align: center;
                p {
                    height: px2rem(64px);
                    display: block;
                    margin: 0 auto;
                }
            }
            .cur p,
            .cur1 p,
            .cur2 p,
            .cur3 p {
                color: #e95504;
                width: 50%;
                border-bottom: 2px solid #e95504;
                display: block;
            }
            li:last-child {
                border-right: none;
            }
        }
    }
</style>

