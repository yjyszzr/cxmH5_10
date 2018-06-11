<style lang='scss' scoped src='./style.scss'>

</style>
<template>
    <div class="thirtytwo">
        <h4>请每组选择两支球队晋级淘汰赛</h4>
        <div class="thirtytwoBox">
            <ul v-for="(item,i) in wLidt" :key='i'>
                <p>{{item.name}}组</p>
                <li v-for="(data,index) in item.list" :key='index'>
                    <b @click='teamClick($event)'></b>
                    <div class="team">
                        <img :src="data.icon" alt="">
                        <span>{{data.name}}</span>
                    </div>
                    <i></i>
                </li>
            </ul>
        </div>
    </div>
</template>
<script src='./script.js'>

</script>

