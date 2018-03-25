<style scoped>
  .make{
    font-size: 0.26rem;
    color: #F7931E;
    padding: 0.3rem;
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
<!--添加银行卡-->
<template>
  <div class="wrap">
    <div class="header">
      <a href="javascript:history.go(-1);" class="go_return">返回</a>
      <p>彩小秘·添加银行卡</p>
    </div>
    <ul class="section msg_list">
      <li>
        <a href="javascript:void(0);">
          <div>
            <label>姓名：</label>
            <input type="text" class="text1" placeholder="请输入姓名"/>
          </div>
        </a>
        <a href="javascript:void(0);">
          <div>
            <input type="text" class="text" placeholder="请输入银行卡号"/>
          </div>
        </a>
      </li>
    </ul>
    <p class="make">注：该卡号为默认收款</p>
    <section class="button">
      <a class="determine">添加</a>
    </section>
    <section class="plain">
      <p>温馨提示 </p>
      <p>1.建议使用：中国银行 工商银行 招商银行 建设银行卡， 提现更快捷； </p>
      <p>2.请务必确保银行卡开户名与实名认证的姓名一致；</p>
      <p>3.请使用储蓄卡作为收款银行卡；</p>
      <p>4.添加银行卡可能会有信息延迟，请耐心等待，如添加未成功请再次添加;</p>
    </section>
    <div class="prompt"></div>
  </div>
</template>

<script>
  import http from '../api/http'
  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created:function () {}
  }
</script>

