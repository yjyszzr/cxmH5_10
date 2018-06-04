<template>
            <!-- 赛事筛选 -->
            <div class="worldFilter">
                <div class="match_w" v-if='$store.state.mark_showObj.mark_show_type == "world"'>
                    <div class="ft_title">
                        赛事筛选
                    </div>
                    <ul class="matchTeam">
                        <li :class="$store.state.world_cupObj.worldfliter.indexOf(item)==-1?'':'filterActive'" v-for="(item,i) in matchFilterList" :key='i' ref="match_name" @click="team(i)">{{item}}</li>
                    </ul>
                    <div class="confim_btn">
                        <p @click='confim()'>确定</p>
                        <p @click="cancel()">取消</p>
                    </div>
                </div>
            </div>
</template>


<script src='./script.js'>

</script>


<style lang='scss' src='./style.scss'>

</style>

