<template>
    <div class="matchwinner">
       <div class="teamBox" v-for="(item,i) in list" :key='i'>
           <div class="markClick" @click='markClick(i)'></div>
           <img :src="item.contryPic" alt="">
           <div class="teamDetail" ref='teamDetail'>
               <p class="teamName">{{item.contryName}}</p>
               <p class="teamOdds">{{item.betOdds}}</p>
           </div>
       </div>
    </div>
</template>
<style lang='scss' scoped src='./style.scss'>

</style>
<script src='./script.js'>

</script>


