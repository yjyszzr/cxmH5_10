import api from '../../../fetch/api'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name: 'analogOrder',
    beforeCreate() {
			Indicator.open()
    },
    data () {
      return {
        orderId: this.$route.query.id,
        orderObj: ''
      }
    },
    methods: {
      copy(){
        var Url2=document.getElementById("copyText").innerText;
        var oInput = document.createElement('input');
        oInput.value = Url2;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display='none';
        Toast('复制成功');
      }
    },
    mounted(){
        let data = {
          'orderSn': this.orderId
        }
        api.getOrderDetailByOrderSn(data)
        .then(res => {
            if(res.code==0) {
              this.orderObj = res.data
            }
        })
    }
}