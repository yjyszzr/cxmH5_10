<template>
    <div id="touzhu">
        <div class="team-vs">
            <p>EDG战队</p>
            <p>VS</p>
            <p>IG战队</p>
        </div>
        <div class="play-type">
            <ul>
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: "touzhu'"
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/css/function.scss';
    #touzhu{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: #ffffff;
        overflow: hidden;
        .team-vs{
            padding-top: px2rem(34px);
            font-size: px2rem(26px);
            color: #191919;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: px2rem(450px);
            margin: 0 auto;
            p:nth-child(2){
                font-size: px2rem(36px);
            }
        }
    }
</style>