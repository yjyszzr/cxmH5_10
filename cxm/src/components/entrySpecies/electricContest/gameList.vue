<template>
    <div id="gameList">
        <ul class="game-ul">
            <li class="game-li">
                <div class="game">
                    <span>11</span>
                    英雄联盟
                    <!--<img src="" alt="">-->
                </div>
                <span class='arrow_right'></span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "gameList"
    }
</script>

<style scoped lang='scss'>
    @import '../../../assets/css/function.scss';
    #gameList{
        .arrow_right{
            position: absolute;
            right: px2rem(2px);
            width: 17px;
            height: 1.16rem;
            background: url(../../../assets/img/arange.png) no-repeat;
            background-position: right center;
            background-size: auto 30%;
        }
        .game-ul{
            background-color: #ffffff;
            color: #404040;
            font-size: px2rem(30px);
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .game-li{
                height: px2rem(119px);
                width: 90%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
                border-bottom: 1px dashed #f0f0f0;
                .game{

                }
            }

        }
    }

</style>