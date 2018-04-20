<style lang='scss'>
    .consult{
        background: #fff;

        .article{
            h5{
                padding: px2rem(30px) px2rem(20px);
            }
        }
    }
</style>
<template>
    <div class="wrap consult">
        <div class="article">
            <h5>文章标题</h5>
        </div>
    </div>
</template>
<script>
    import api from "../../../fetch/api";
    import { Toast } from "mint-ui";
    import { Indicator } from "mint-ui";
    export default {
        name: "consult",
        data(){
            return{
                consult:{
                    'title': ''
                },
            }
        },
        // beforeCreate() {
        //     Indicator.open()
        // },
        mounted(){
            let data={
                page:1,
                size:10
            }
            api.articleDetail(data)
                .then(res => {
                    console.log(res)
                    if(res.code==0) {
                        this.consult = res.data
                    }else{
                        Toast(res.msg)
                    }
                    // Indicator.open()
                })
                .catch(error => {
                    Toast('网络错误')
                })
        },
    }
</script>