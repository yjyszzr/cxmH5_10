import api from "../../../fetch/api";
import informal from '../../public/informal/informalList'
import {
    Toast
} from "mint-ui";
import {
    Indicator
} from "mint-ui";
export default {
    name: "consult",
    data() {
        return {
            id: this.$route.query.id,
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    created(){
        this.fetchData()
    },
    components: {
        "v-informal": informal
    },
    mounted() {
 
    },
    methods:{
        fetchData(){
            let data = {
                articleId: this.id,
            }
            this.$store.dispatch("getDetailObj",data)
        },
        ckBtn(){
            this.$router.push({
                path: "/index/moreInfo",
                query: {
                    currentArticleId: this.$store.state.zxDetailObj.articleId,
                    extendCat: this.$store.state.zxDetailObj.extendCat
                },
                replace: false
            });
        },
        reloadzxDetail(c){
            document.querySelector('#content').scrollTop = 0;
            Indicator.open()
            this.id = c
            this.fetchData()
        },
        zxCollectionStatus(flag){
            if(flag==true){
                let data = {
                    articleId: this.$store.state.zxDetailObj.articleId,
                    articleTitle: this.$store.state.zxDetailObj.title,
                    collectFrom: ''
                }
                api.collectAdd(data)
                    .then(res => {
                        //console.log(res)
                        Toast(res.msg)
                        Indicator.close()
                    })
            }else{
                let data = {
                    id: this.$store.state.zxDetailObj.articleId
                  };
                  api
                    .collectdelete(data)
                    .then(res => {
                        Toast(res.msg);
                        Indicator.close()
                    })
            }
        }
    },
    computed: {  
        zxCollectionFlag(){
            return this.$store.state.zxCollectionFlag;
        }
    },
    watch:{
        zxCollectionFlag(a,b){
            //console.log(a)
            Indicator.open()
            this.zxCollectionStatus(a)
        }
    },
    beforeRouteLeave(to, from, next) {
      next()
      this.$store.dispatch("getCollectionFlag", '')
      this.$store.state.zxDetailObj = {}
    }
}