<template>
    <div class="oder">
        <img src="./images/WechatIMG5.png" alt="" @click="bannerLink()">
        <div class="ok" @click="okClick()">
            <img src="./images/close.jpg" alt="">
        </div>
    </div>
</template>

<script>
    import api from '../../../../fetch/api.js'
    export default {
        name: "oderNum",
        data(){
            return{
                
            }
        },
        methods:{
            okClick(){
                this.$store.dispatch("getMarkShow", false)
            },
            fetchData(){
                api.openNavs({str: ''})
                .then(res=>{
                    if(res.code==0) {
                        console.log(res)
                    }
                })
            },
            bannerLink(){
                location.href = 'https://m.caixiaomi.net/index/consult?id=1600'
            }
        },
        mounted(){
            // this.fetchData()
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../../assets/css/function.scss";
    .oder{
        overflow: hidden;
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: px2rem(550px);
        }
        .ok{
            text-align: center;
            width: 100%;
            padding-bottom: px2rem(20px);
            padding-top: px2rem(20px);
            color:#d12120;
            font-size: px2rem(35px);
            height: px2rem(50px);
            width: px2rem(50px);
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>