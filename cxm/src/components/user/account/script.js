import api from '../../../fetch/api'
import {
  Toast
} from 'mint-ui'
import {
  Indicator
} from 'mint-ui'
export default {
  name: 'account',
  data() {
    return {
      loading: false,
      amountType: 0, //账户类型
      pageNum: 1, //初始页码
      mxList: [],
      bottomStatus: '',
      allLoaded: false,
      totalNum: {}, //合计对象
      loadText: '上拉加载更多...'
    }
  },
  beforeCreate() {
    Indicator.open()
  },
  created() {

  },
  methods: {
    mxfetch() {
      let data = {
        'amountType': this.amountType,
        'pageSize': 20,
        'pageNum': this.pageNum
      }
      api.getUserAccountList(data)
        .then(res => {
          // console.log(res)
          if (res.code == 0) {
            if (res.data.isLastPage == 'true') {
              this.pageNum = -1
              this.loadText = '暂无更多数据'
              this.allLoaded = true
            }
            this.mxList = this.mxList.concat(res.data.list)
          }
        })
    },
    handleTopChange(status) {
      this.bottomStatus = status;
    },
    loadBottom() {
      Indicator.open()
      setTimeout(() => {
        this.pageNum++
          this.mxfetch()
        this.$refs.loadmore.onBottomLoaded();
      }, 700)
    },
    bg_Color(c) {
      if (c == 3 || c == 4) {
        return '#86c46b'
      } else if (c == 6) {
        return '#f15a24'
      } else {
        return '#f6ad41'
      }
    },
    goTxxq(c) {
      this.$router.push({
        path: '/user/give_details',
        query: {
          id: c
        },
        replace: false
      })
    }
  },
  computed: {
    tabstatus() {
      return this.$store.state.recordTab;
    }
  },
  watch: {
    tabstatus(a, b) {
      //console.log(a)
      Indicator.open()
      this.mxList = []
      this.pageNum = 1
      if (a == 'a1') {
        this.amountType = 0
      } else if (a == 'a2') {
        this.amountType = 1
      } else if (a == 'a3') {
        this.amountType = 2
      } else if (a == 'a4') {
        this.amountType = 3
      } else if (a == 'a5') {
        this.amountType = 4
      } else if (a == 'a6') {
        this.amountType = 5
      }
      this.loadText = '上拉加载更多...'
      this.allLoaded = false
      this.mxfetch()
    }
  },
  mounted() {
    if (this.$store.state.recordTab == 'a5') {
      this.amountType = '4'
    }
    this.mxfetch()
    let data = {
      'str': ''
    }
    api.countMoneyCurrentMonth(data)
      .then(res => {
        // console.log(res)
        if (res.code == 0) {
          this.totalNum = res.data
        }
      })
  }
}