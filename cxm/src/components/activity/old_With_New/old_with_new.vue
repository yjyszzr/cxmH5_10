<template>
    <div class="new-old" :style="{width:'100%'}">
        <p class="btn-tou" @click="go"></p>
    </div>
</template>

<script>
    export default {
        name: "old_with_new",
        data(){
            return{

            }
        },
        methods:{
            go(){
               this.$router.push({
                   path:"/freebuy/singleNote?id=6"
                   }
               )
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/css/function.scss";
    .new-old{
        height: px2rem(6000px);
        background:url("./images/saommang.jpg") no-repeat center;
        background-size: 100% auto;
        position: relative;
        .btn-tou{
            position: absolute;
            bottom: 0;
            height: px2rem(200px);
            width: 100%;
        }
    }
</style>