<style lang='scss' src='./style.scss'></style>
<template>
    <div class="wrap result">
        <section>
            <p class="title">
                <span class="spfList">共有{{$store.state.resultList.length}}场比赛 已结束<span>{{matchFilsh()}}</span>场</span>
            </p>
            <ul class="hotMatchList">
                <li v-for="(list,i) in $store.state.resultList" :key='i' @click='goDetail(list.matchId)'>
                    <small><i>{{list.changci}}</i><i>{{list.leagueName}}</i><i>{{list.matchTime}}</i></small>
                    <div class="pink">
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