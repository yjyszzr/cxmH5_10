<template>
    <div class="new-old" :style="{width:'100%'}">
        <img class="bgimg" src="./images/bgimg.jpg" alt="">
        <div class="btn-box">
            <p class="btn-tou" @click="go">
                <img src="./images/btn.png" alt="">
            </p>
        </div>
    </div>
</template>

<script>
    import {means} from '../../../util/common'

    export default {
        name: "old_with_new",
        data() {
            return {}
        },
        methods: {
            go() {
                this.$store.commit('FREEBUYID', '6')
                if(this.$route.query.cfrom=='app'){
                    location.href = 'https://caixiaomi.net?cxmxc=scm&type=3&id=1&subid=6'
                }else{
                    this.$router.push({
                        path: "/freebuy/singleNote?id=6"
                    })
                }
            }
        },
        mounted() {
            means('小白课堂').isTitle
        },
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/css/function.scss";

    .new-old {
        height: 100%;
        position: relative;
        overflow: auto;
        .bgimg{
            height: auto;
            /*width: auto;*/
            width: 100%;
        }
        .btn-box{
            display: flex;
            justify-content: center;
            align-items: center;

        }
        .btn-tou {
            position: fixed;
            bottom: 0;
            height: px2rem(150px);
            width: 70%;
            img{
                width: 100%;
            }
        }
    }
</style>