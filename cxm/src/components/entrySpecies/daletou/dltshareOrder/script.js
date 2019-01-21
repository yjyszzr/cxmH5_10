import api from '../../../../fetch/api'
import SelectionBox from "../images/SelectionBox1@3x.png"
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
        orderObj: '',
        ticketSchemeDetailDTOs:[],
                adds: {
                    add:'',  //是否追加 默认不追加
                    imgUrl: '',
                    zhuNum:0,
                    bei: 1,
                    money:0,
                    itemEditIndex:-1,
                }
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
      },
      //数据处理
      dataHandel(dataArr){
          var that = this
          var arr  = []
          dataArr.forEach((item,index)=>{
              if(item.isAppend == '0'){
                  that.adds.add = false
                  that.adds.imgUrl = SelectionBox
              }
              if(item.isAppend == '1'){
                  that.adds.add = true
                  that.adds.imgUrl = Selected
              }
              that.adds.money = that.adds.money+item.amount
              that.adds.zhuNum = that.adds.zhuNum+item.betNum
              that.adds.bei = item.cathectic
              arr.push({
                  amount:item.amount,
                  betNum:item.betNum,
                  cathectic:item.cathectic,
                  isAppend:item.isAppend,
                  playType:item.playType,
                  ballType:'',
                  ballList:[]
              })
              if(item.playType!='2'){
                  arr[index].ballType = 'biaozhun'
                  item.redCathectics.forEach(sunItem=>{
                      arr[index].ballList.push({
                          num:sunItem.cathectic,
                          type:'redBall',
                          isGuess:sunItem.isGuess
                      })
                  })
                  arr[index].ballList.push({
                      num:'—',
                      type:'line',
                      isGuess:'0'
                  })
                  item.blueCathectics.forEach(sunItem=>{
                      arr[index].ballList.push({
                          num:sunItem.cathectic,
                          type:'blueBall',
                          isGuess:sunItem.isGuess
                      })
                  })
              }
              else{
                  arr[index].ballType = 'dantuo'
                  item.redDanCathectics.forEach(sunItem=>{
                      arr[index].ballList.push({
                          num:sunItem.cathectic,
                          type:'danRedBall',
                          isGuess:sunItem.isGuess
                      })
                  })
                  arr[index].ballList.push({
                      num:'—',
                      type:'line',
                      isGuess:'0'
                  })
                  item.redTuoCathectics.forEach(sunItem=>{
                      arr[index].ballList.push({
                          num:sunItem.cathectic,
                          type:'tuoRedBall',
                          isGuess:sunItem.isGuess
                      })
                  })
                  if(item.blueDanCathectics.length>0){
                      arr[index].ballList.push({
                          num:'—',
                          type:'line',
                          isGuess:'0'
                      })
                  }
                  item.blueDanCathectics.forEach(sunItem=>{
                      arr[index].ballList.push({
                          num:sunItem.cathectic,
                          type:'danBlueBall',
                          isGuess:sunItem.isGuess
                      })
                  })
                  arr[index].ballList.push({
                      num:'—',
                      type:'line',
                      isGuess:'0'
                  })
                  item.blueTuoCathectics.forEach(sunItem=>{
                      arr[index].ballList.push({
                          num:sunItem.cathectic,
                          type:'tuoBlueBall',
                          isGuess:sunItem.isGuess
                      })
                  })
              }
              that.ticketSchemeDetailDTOs = arr
          })
      },
    },
    mounted(){
        let data = {
          'orderSn': this.orderId
        }
        api.getOrderDetailByShare(data)
        .then(res => {
            if(res.code==0) {
              this.orderObj = res.data.lottoDetailDTO
              this.dataHandel(res.data.lottoDetailDTO.cathecticResults)
            }
        })
    }
}