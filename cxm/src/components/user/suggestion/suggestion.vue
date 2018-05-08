<style lang='scss' scoped src='./style.scss'>

</style>

<!--投诉建议-->
<template>
    <div class="wrap" >
        <section class="small">
            <h5>尊敬的上帝您好：</h5>
            <p>请将您对我们产品的反馈内容输入下面输入框中，我们 会认真对待您的每一条建议。谢谢您的反馈如果您有在使用 上不清楚的地方，请点击右上角联系人工客服进行咨询。</p>
        </section>
        <section class="area">
            <textarea placeholder="投诉建议" maxlength="140" v-model="sugText"></textarea>
            <i>还可以输入140字</i>
        </section>
        <section class="button" @click="sugSend()">
            <a class="determine">发送</a>
        </section>
    </div>
</template>

<script>
import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
  name: 'suggestion',
  data(){
      return {
        sugText: ''
      }
  },
  methods:{
      sugSend(){
          Indicator.open()
          let data = {
              'complainContent': this.sugText
          }
          api.complainAdd(data)
                .then(res => {
                    //console.log(res)
                    if(res.code==0){
                        Toast(res.msg)
                        this.$router.go(-1)
                    }
                })
      }
  }
}
</script>

