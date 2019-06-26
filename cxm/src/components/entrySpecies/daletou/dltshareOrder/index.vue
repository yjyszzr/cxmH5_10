<style lang='scss' scoped src='./style.scss'>
</style>


<!--订单详情-->
<template>
  <div class="wrap order">
    <div class="order-news">
      <h5>方案信息</h5>
      <div class="ddbh">
        <p>
          <span>预测订单编号:</span>
          <span style="color:#d12120;" id="copyText">{{orderObj.programmeSn}}</span>
        </p>
        <p class="copy" @click="copy()">复制</p>
      </div>
      <div class="ddcj">
        <span>订单创建时间:</span>
        <span>{{orderObj.createTime}}</span>
      </div>
    </div>
    <div class="my-num">
      <div class="touzhu-mes">
        <p class="my-num-title">方案内容</p>
        <p class="my-num-termNum">
            第<span>{{orderObj.termNum}}</span>期
        </p>
        <div class="my-num-main">
          <ul class="my-num-ul">
            <li class="my-num-li" v-for="(item,index) in ticketSchemeDetailDTOs" :key="index">
              <template v-if="item.ballType == 'biaozhun'">
                <ul class="num-sun-ul">
                  <li
                    class="num-sun-li"
                    :class="sunItem.isGuess=='1'?sunItem.type=='redBall'?'allredBall':sunItem.type=='blueBall'?'allblueBall':'space':sunItem.type=='redBall'?'redBall':sunItem.type=='blueBall'?'blueBall':'space'"
                    v-for="(sunItem,index) in item.ballList"
                    :key="index"
                  >{{sunItem.num}}</li>
                </ul>
                <p class="num-details">
                  <span v-if="item.playType == '0'">单式</span>
                  <span v-if="item.playType == '1'">复式</span>
                  <span>{{item.betNum}}注</span>
                  <span>{{item.cathectic}}倍</span>
                  <span>{{item.amount+'.00'}}</span>
                  <span v-if="item.isAppend == '1'">已追加</span>
                </p>
              </template>
              <template v-else>
                <ul class="num-sun-ul">
                  <li
                    class="num-sun-li"
                    :class="sunItem.isGuess=='1'?sunItem.type=='danRedBall'||sunItem.type=='tuoRedBall'?'allredBall':sunItem.type=='danBlueBall'||sunItem.type=='tuoBlueBall'?'allblueBall':'line':sunItem.type=='danRedBall'||sunItem.type=='tuoRedBall'?'redBall':sunItem.type=='danBlueBall'||sunItem.type=='tuoBlueBall'?'blueBall':'line'"
                    v-for="(sunItem,index) in item.ballList"
                    :key="index"
                  >{{sunItem.num}}</li>
                </ul>
                <p class="num-details">
                  <span v-if="item.playType == '0'">单式</span>
                  <span v-if="item.playType == '1'">复式</span>
                  <span v-if="item.playType == '2'">胆拖</span>
                  <span>{{item.betNum}}注</span>
                  <span>{{item.cathectic}}倍</span>
                  <span>{{item.amount+'.00'}}</span>
                  <span v-if="item.isAppend == '1'">已追加</span>
                </p>
              </template>
            </li>
          </ul>
        </div>
        <div class="m-news">
            <p>
                模拟投注倍数:
                <span>{{orderObj.cathectic}}倍</span>
            </p>
            <p>
                是否模拟追加:
                <span>{{orderObj.isAppend=='1'?'是':'否'}}</span>
            </p>
            <p>
                模拟投注金额:
                <span>共{{orderObj.ticketAmount}}</span>
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./script.js'>
// import http from '../api/http'
</script>

