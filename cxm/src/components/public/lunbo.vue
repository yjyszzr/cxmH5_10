<template>
    <mt-swipe :show-indicators="true">
        <mt-swipe-item v-for="(data,i) in bannerList" :key="i">
            <img :src="data.bannerImage"/>
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
    import { Toast } from 'mint-ui'
    import {getUrlStr} from '../../util/common'
    export default {
        name: 'lunbo',
        data() {
            return {
                url: ''
            }
        },
        props:[
            'bannerList'
        ],
        methods: {

        }
    }
</script>

<style lang='scss'>
    @import '../../assets/css/function.scss';
    .mint-swipe-indicators {
        bottom: 0;
    }
    .mint-swipe{
        /*margin-bottom: px2rem(20px);*/
        height: px2rem(640px)!important;
        overflow: hidden;
        .mint-swipe-item{
            //position: relative;
            height: px2rem(640px);
            margin-top: px2rem(-1px);
            img{
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }
</style>