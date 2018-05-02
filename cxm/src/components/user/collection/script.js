import api from '../../../fetch/api'
import {
  Toast
} from 'mint-ui'
import {
  Indicator
} from 'mint-ui'
export default {
  name: 'collection',
  data() {
    return {
      page: 1,
      scList: [],
      scObj: {},
      trFlag: true,
      isbool: true,
      cxLoadFlag: false
    }
  },
  beforeCreate() {
    Indicator.open()
  },
  created() {

  },
  methods: {
    fetchData() {
      let data = {
        pageNum: this.page,
        pageSize: 10
      };
      api
        .collectList(data)
        .then(res => {
          if (res.code == 0) {
            //console.log(res);
            this.scObj = res.data
            if (this.page == 1) {
              this.scList = [].concat(res.data.list);
              this.trFlag = false
            } else {
              setTimeout(() => {
                this.trFlag = false;
                this.isbool = true;
                this.scList = this.scList.concat(res.data.list);
              }, 800);
            }
          } else {
            Toast(res.msg);
          }
        })
        .catch(err=>{
          setTimeout(() => {
                this.trFlag = false;
                this.cxLoadFlag = true;
          }, 800);
        })
    },
    deleteItem(c) {
      Indicator.open()
      this.$store.dispatch("deleteMyFlag", false)
      let data = {
        id: c
      };
      api
        .collectdelete(data)
        .then(res => {
          //console.log(res)
          if (res.code == 0) {
            this.page = 1
            this.fetchData()
          } else {
            Toast(res.msg);
          }
        })
    },
    handleScroll(e) {
      if (
        document.querySelector("#content").scrollHeight -
        document.querySelector("#content").clientHeight -
        document.querySelector("#content").scrollTop <=
        0 &&
        this.isbool == true
      ) {
        if (this.scObj.isLastPage == "false") {
          this.page++;
          this.fetchData();
          this.trFlag = true;
          this.isbool = false;
        }
      }
    },
    cxLoadClick(){
      this.trFlag = true;
      this.cxLoadFlag = false;
      this.fetchData()
    },
    goZxDetail(c){
      this.$router.push({
            path: "/index/consult",
            query: {
            id: c
            },
            replace: false
    });
}
  },
  mounted() {
    document
      .querySelector("#content")
      .addEventListener("scroll", this.handleScroll);
    this.fetchData()
  },
  computed: {
    deleteFlag() {
      return this.$store.state.deleteFlag;
    }
  },
  beforeRouteLeave(to, from, next) {
    next()
    this.$store.dispatch("deleteMyFlag", false)
  }
}