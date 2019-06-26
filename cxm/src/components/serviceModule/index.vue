<template>
    <div class="service-md">
        <ul>
            <li v-for="(item,i) in list" :key='i' @click="goItem(item)">
                <p class="kj-left">
                    <img :src=item.logo alt="">
                    <span>{{item.name}}</span>
                </p>
                <p class="arrow_right float_right"></p>
            </li>
        </ul>
    </div>
</template>
<script>
import api from '../../fetch/api'
import { Indicator } from 'mint-ui'
import {fx_link_rule,getUrlStr} from '../../util/common'
export default {
    name: 'service',
    data(){
        return {
            list: []  //服务list
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    methods:{
      goItem(item){
        let path = fx_link_rule(getUrlStr('id',item.url))
        this.$router.push({
            path: path
        })
      }
    },
    mounted(){
        api.servlist({str:''})
        .then(res => {
            if(res.code == 0 ){
                this.list = res.data
            }
        })
    }
}
</script>
<style scoped lang='scss'>
    @import '../../assets/css/function.scss';
    .service-md{
        ul{
            background: white;
            li{
                border-bottom: 1px solid #f0f0f0;
                height: px2rem(120px);
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-right: px2rem(30px);
                .kj-left{
                    display: flex;
                    align-items: center;
                    span{
                        font-size: px2rem(30px);
                        color: #505050;
                    }
                }
                img{
                    width: px2rem(42px);
                    margin: 0 px2rem(35px) 0 px2rem(44px);
                }
            }
            li:last-of-type{
                border: none;
            }
        }
    }
</style>
