<template>
    <div class="main-body">
        <p class="title"> <i class="vertical-line"></i>事件</p>
        <div>
            <div class="event-box">
                <div class="img-star-box">
                    <img class="img-star" src="./images/star@3x.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "outs"
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/css/function.scss';
    .main-body{
        width: 95%;
        margin: 0 auto;
        .vertical-line{
            position: absolute;
            display: inline-block;
            height: px2rem(26px);
            width: px2rem(3px);
            background-color: #f08c1e;
            top: px2rem(21px);
            left: px2rem(10px);
        }
        .title{
            position: relative;
            padding-left: .3rem;
            line-height: px2rem(72px);
            border-bottom: 1px solid #9f9f9f;
            font-size: px2rem(26px);
            color: #9f9f9f;
        }
        .event-box{
            display: flex;
            justify-content: center;
            .img-star-box{
                height: px2rem(54px);
                width: px2rem(54px);
                background: url("./images/ses_set@3x.png") no-repeat;
                background-size: 100%;
                .img-star{
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }

</style>