<template>
    <div class="kaijiang">
        <div class="kaijiang-list">
            <dl @click="goPlayList(item)" class="kaijiang-item" v-for="item in openPrize" :key='item.lotteryId'>
                <dt>
                    <img :src="item.lotteryIcon" :alt=item.lotteryName>
                </dt>
                <dd>
                    <div class="kj-top">
                        <span>
                            {{item.lotteryName}}
                        </span>
                        <span>
                            {{item.period}}
                        </span>
                        <span>
                            {{item.date}}
                        </span>
                    </div>
                    <div class="kj-btm szc" v-show="item.classifyStatus==0">
                        <div class="kj-btmc">
                            <div :class="item.lotteryId=='8'?'moreball':''">
                                <p class="redball" v-for="(r,i) in item.redBall" :key='i'>
                                    {{r}}
                                </p>
                                <p class="blueball" v-for="b in item.blueBall" :key='b'>
                                    {{b}}
                                </p>
                            </div>
                            <img src="../../../assets/img/arange.png" alt="enter">
                        </div>
                    </div>
                    <div class="kj-btm tyc" v-show="item.classifyStatus==1">
                        <div class="kj-btmc">
                            <p :style='{"background":item.ballColor==0?"#FC6F1C":"#439E0B"}'>
                                <span>{{item.homeTeam}}</span>
                                <span>{{item.score}}</span>
                                <span>{{item.visitingTeam}}</span>
                            </p>
                            <img src="../../../assets/img/arange.png" alt="enter">
                        </div>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</template>
<style src='./style.scss' lang='scss' scoped>

</style>
<script src='./script.js'>

</script>

