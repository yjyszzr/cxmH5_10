<template>
    <div class="fsplace">
        <p style="display:none;">{{fsNum}}{{status}}</p>
       <div class="teamBox" v-for="(item,i) in fsList" :key='i' :class="item.homeContryName=='其他'?'other':''">
           <div class="markClick" @click='markClick(item)'></div>
           <div class="imgBox"  v-show="item.homeContryName!='其他'">
                <img :src="item.homeContryPic" alt="">
                <img :src="item.visitorContryPic" alt="">
           </div>
           <div class="teamDetail"  :class="item.selected&&item.selected=='sld'?'tActive':''" :style="{'background':item.isSell=='1'||item.betStatus=='1'?'#c7c7c7':'#fff'}">
               <p class="teamName" v-if="item.homeContryName!=item.visitorContryName">{{item.homeContryName}}&nbsp;&nbsp;VS&nbsp;&nbsp;{{item.visitorContryName}}</p>
               <p class="teamName" v-else>{{item.homeContryName}}</p>
               <p class="teamOdds">{{item.isSell=='1'||item.betStatus=='1'?'停售':item.betOdds}}</p>
           </div>
       </div>
    </div>
</template>
<style lang='scss' scoped src='./style.scss'>

</style>
<script src='./script.js'>

</script>


