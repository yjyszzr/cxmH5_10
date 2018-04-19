<style lang='scss' src='./style.scss'></style>
<template>
    <div class="wrap">
        <div>{{consult.}}</div>
    </div>
</template>
<script>
    import api from "../fetch/api";
    import { Toast } from "mint-ui";
    import { Indicator } from "mint-ui";
    export default {
        name: "consult",
        data(){
            return{
                consult:{},
            }
        },
        beforeCreate() {
            Indicator.open()
        },
        mounted(){
            api.countMoneyCurrentMonth(data)
                .then(res => {
                    console.log(res)
                    if(res.code==0) {
                        this.consult = res.data
                    }else{
                        Toast(res.msg)
                    }
                })
                .catch(error => {
                    Toast('网络错误')
                })
        },
    }
</script>