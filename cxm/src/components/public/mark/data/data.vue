<template>
    <div class="data1" @touchmove.prevent >
        <div class="dt_title">
            日期
        </div>
        <ul >
            <li :class="$store.state.mark_showObj.mark_dateVal==list?'cur':''" v-for="(list,i) in data_list" :key='i' ref='match_name' @click="list_li(list,i)">{{list}}</li>
        </ul>
        <div class="dt_btn">
            <p @click="cancel()">返回</p>
        </div>
    </div>
</template>

<script src='./script.js'>

</script>


<style lang='scss' src='./style.scss'>

</style>