<style lang='scss' src='./style.scss'></style>
<template>
    <div class="wrap result">
        <section>
            <ul class="list">
                <li @click='data_time()'>{{$store.state.mark_showObj.mark_dateVal}}<i></i></li>
                <li @click='more()'>更多条件<i></i></li>
                <li @click='all($event)' v-if="flag==true">全部<i></i></li>
                <li @click='all($event)' v-if="flag==false">未开始<i></i></li>
            </ul>
        </section>
        <section>
            <el-collapse v-model="activeName">
                <el-collapse-item name='1'>
                    <template slot="title" class="title">
                        <span class="spfList">共有{{$store.state.resultList.length}}场比赛 已结束<span>{{matchFilsh()}}</span>场</span>
                    </template>
                    <ul class="hotMatchList">
                        <li v-for="(list,i) in $store.state.resultList" :key='i'>
                            <small><i>{{list.changci}}</i><i>{{list.leagueName}}</i><i>{{list.matchTime}}</i></small>
                            <div class="pink">
                                <i><img src="../../../assets/img/img1.png"></i>
                                <div>
                                    <p><em>{{list.homeTeamAbbr}}</em><span>VS</span><em style="text-align: left">{{list.visitingTeamAbbr}}</em></p>
                                  <b>半场{{list.firstHalf}}<span>总比分{{list.whole}}</span></b>
                                </div>
                                <s><img src="../../../assets/img/img1.png"></s>
                            </div>
                        </li>
                    </ul>
                </el-collapse-item>
            </el-collapse>
        </section>
    </div>
</template>
<script src='./script.js'>
    // import http from '../api/http'

</script>