<style lang='scss' src='./style.scss'></style>
<template>
    <div class="wrap result">
        <section>
            <ul class="list">
                <li @click='data_time()'>2018-3-10<i></i></li>
                <li @click='more()'>更多条件<i></i></li>
                <li @click='more()'>全部<i></i></li>
            </ul>
        </section>
        <section>
            <el-collapse>
                <el-collapse-item >
                    <template slot="title" class="title">
                        <span class="spfList"><span>8</span>8场比赛可投</span>
                    </template>
                    <ul class="hotMatchList">
                        <li v-for="list in result">
                            <small><i>{{list.changci}}</i><i>{{list.leagueName}}</i><i>{{list.matchTime}}</i></small>
                            <div class="pink">
                                <i><img src="../../../assets/img/img1.png"></i>
                                <div>
                                  <p>{{list.homeTeamName}}<span>VS</span>{{list.visitingTeamName}}</p>
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