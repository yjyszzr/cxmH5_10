<template>
    <div class="data" >
        <div class="dt_title">
            日期
        </div>
        <ul >
            <li v-for="(list,i) in data_list" :key='i' ref='match_name' @click="list_li(i)">{{list}}</li>
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