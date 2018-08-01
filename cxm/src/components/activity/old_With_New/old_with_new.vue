<template>
    <div class="new-old" :style="{width:'100%'}">
        <p class="btn-tou" @click="go"></p>
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
        height: px2rem(6000px);
        background: url("./images/saommang.jpg") no-repeat center;
        background-size: 100% auto;
        position: relative;
        .btn-tou {
            position: absolute;
            bottom: 0;
            height: px2rem(200px);
            width: 100%;
        }
    }
</style>