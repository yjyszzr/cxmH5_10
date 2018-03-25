<style scoped>
  .section{
    padding: 0.3rem 0.3rem 0 0.3rem;
  }
  .presented{
    font-size: 0.3rem;
    color: #505050;
  }
  .msg_list li>a {
    display: block;
    position: relative;
    margin-right: 0.3rem;
    margin-left: 0;
    padding:0;
    /*border-bottom: 1px solid #e5e5e5;*/
    height: 0.87rem;
  }
  .arrow_right{
    position: relative;
    display: block;
    height:0.87rem;
    width: auto;
    background-size: auto 30%;
    color: #A0A0A0;
    font-size: 0.3rem;
    padding-right: 0.3rem;
  }
  .msg_list li>a>div .text1 {
    width: 65%;
  }
  .msg_list li a>div>label {
    color: #A0A0A0;
  }
  .msg_list li>a>div .text3 {
    width: 75%;
    border: none;
    float: left;
    height: 0.87rem;
  }
  .msg_list li>a>div>.whole{
    font-size: 0.3rem;
    color: #A0A0A0;
    border-left: 1px solid #f1f1f1;
    height: 0.5rem;
    float: left;
    line-height: 0.5rem;
    padding-left: 0.2rem;
    margin-top: 0.2rem;
  }
  .plain{
    margin-top: 0.88rem;
    margin-left: 0.3rem;
  }
  .plain p{
    line-height: 0.39rem;
    color: #A0A0A0;
    font-size: 0.26rem;
  }
</style>
<!--密码登录-->
<template>
  <div class="wrap">
    <div class="header">
      <a href="javascript:history.go(-1);" class="go_return">返回</a>
      <p>彩小秘·提现</p>
    </div>
    <section class="section">
      <p class="presented">可提现金额：100.00元</p>
      <ul class=" msg_list">
        <li>
          <a href="javascript:void(0);">
            <div>
              <label>银行卡：</label>
              <input type="tel" class="text1" placeholder="请添加银行卡"/>
              <span class="arrow_right float_right">管理</span>
            </div>
          </a>
          <a href="javascript:void(0);">
            <div>
              <input type="tel" class="text3" placeholder="请输入提现金额"/>
              <span class="whole">全部提现</span>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <section class="button">
      <a class="determine">立即支付</a>
    </section>
    <section class="plain">
      <p>说明：</p>
      <p>1.中奖金额在1小时候可提现</p>
      <p>2.提现不收手续费</p>
      <p>3.为防止洗钱等不法行为，充值金额只能用于消费或退款；</p>
      <p>4.每天提现不超过3次，每次最低3元；</p>
      <p>5.活动赠送金额不可提现；</p>
    </section>
    <div class="prompt"></div>
  </div>
</template>
