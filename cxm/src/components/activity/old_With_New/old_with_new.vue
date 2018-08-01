<template>
    <div class="new-old" :style="{width:'100%'}">
        <img class="bgimg" src="./images/bgimg.jpg" alt="">
        <p class="btn-tou" @click="go">
            <img src="./images/btn.png" alt="">
        </p>
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
                this.$router.push({
                        path: "/freebuy/singleNote?id=6"
                    }
                )
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
        display: flex;
        justify-content: center;
        align-items: center;
        .bgimg{
            height: px2rem(6000px);
            width: 100%;
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