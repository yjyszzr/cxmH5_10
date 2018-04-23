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
            consultObj: {

            },
        }
    },
    beforeCreate() {
        Indicator.open()
    },
    components: {
        "v-informal": informal
    },
    mounted() {
        let data = {
            articleId: this.id,
        }
        api.articleDetail(data)
            .then(res => {
                //console.log(res)
                if (res.code == 0) {
                    this.consultObj = res.data
                } else {
                    Toast(res.msg)
                }
                Indicator.close()
            })
    },
    methods:{
        ckBtn(){
            this.$router.push({
                path: "/index/moreInfo",
                query: {
                    currentArticleId: this.consultObj.articleId,
                    extendCat: this.consultObj.extendCat
                },
                replace: false
            });
        },
        zxCollectionStatus(flag){
            if(flag==true){
                let data = {
                    articleId: this.consultObj.articleId,
                    articleTitle: this.consultObj.title,
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
                    id: this.consultObj.articleId
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
            console.log(a)
            Indicator.open()
            this.zxCollectionStatus(a)
        }
    },
    beforeRouteLeave(to, from, next) {
      next()
      this.$store.dispatch("getCollectionFlag", false)
    }
}