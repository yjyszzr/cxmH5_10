<template>
    <div class="matchwinner">
        <p style="display:none;">{{fsNum}}</p>
       <div class="teamBox" v-for="(item,i) in firstList" :key='i'>
           <div class="markClick" @click='markClick(item)'></div>
           <img :src="item.contryPic" alt="">
           <div class="teamDetail" :class="item.selected&&item.selected=='sld'?'tActive':''" :style="{'background':item.isSell=='1'||item.betStatus=='1'?'#c7c7c7':'#fff'}">
               <p class="teamName">{{item.contryName}}</p>
               <p class="teamOdds">{{item.isSell=='1'||item.betStatus=='1'?'停售':item.betOdds}}</p>
           </div>
       </div>
    </div>
</template>
<style lang='scss' scoped src='./style.scss'>

</style>
<script src='./script.js'>

</script>


