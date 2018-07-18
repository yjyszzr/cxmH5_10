<style lang='scss' src='./style.scss'></style>
<template>
    <div class="wrap result">
        <section v-if="listd.lotteryMatchDTOList">
            <p class="title">
                <span class="spfList">{{weekDate}}共有<span>{{listd.lotteryMatchDTOList.length}}</span>场比赛</span>
            </p>
            <ul class="hotMatchList">
                <li v-for="(list,i) in listd.lotteryMatchDTOList" :key='i' @click='goDetail(list.matchId)'>
                    <small><i>{{list.changci}}</i><i>{{list.leagueName}}</i><i>{{list.matchTime}}</i></small>
                    <div class="pink">
                        <i></i>
                        <i><img :src="list.homeTeamLogo"></i>
                        <div>
                            <p><em>{{list.homeTeamAbbr}}</em><span>VS</span><em style="text-align: left">{{list.visitingTeamAbbr}}</em></p>
                          <b v-if="list.matchFinish =='1' ">半场{{list.firstHalf}}<span>总比分{{list.whole}}</span></b>
                          <small v-if="list.matchFinish =='0' ">未结束</small>
                        </div>
                        <s><img :src="list.visitingTeamLogo"></s>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>
<script src='./script.js'>
// import http from '../api/http'
</script>