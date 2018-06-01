<template>
    <div class="fsplace">
       <div class="teamBox" v-for="(item,i) in list" :key='i'>
           <div class="markClick" @click='markClick(i)'></div>
           <div class="imgBox">
                <img :src="item.homeContryPic" alt="">
                <img :src="item.visitorContryPic" alt="">
           </div>
           <div class="teamDetail" ref='teamDetail'>
               <p class="teamName" v-if="item.homeContryName!=item.visitorContryName">{{item.homeContryName}}&nbsp;&nbsp;VS&nbsp;&nbsp;{{item.visitorContryName}}</p>
               <p class="teamName" v-else>{{item.homeContryName}}</p>
               <p class="teamOdds">{{item.betOdds}}</p>
           </div>
       </div>
    </div>
</template>
<style lang='scss' scoped src='./style.scss'>

</style>
<script src='./script.js'>

</script>


