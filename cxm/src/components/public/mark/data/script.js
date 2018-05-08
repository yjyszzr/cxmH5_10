import api from '../../../../fetch/api.js'
import { Toast } from 'mint-ui'
export default {
  name: "data",
  data() {
    return {
        // define :[]
        playType: this.$route.query.id,
        cur_date:'',
    };
  },
computed: {
    data_list() {
        return [getDay(-7),getDay(-6),getDay(-5),getDay(-4),getDay(-3),getDay(-2),getDay(-1),getDay(0)]
        function getDay(day){
            var today = new Date();

            var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;

            today.setTime(targetday_milliseconds);

            var tYear = today.getFullYear();
            var tMonth = today.getMonth();
            var tDate = today.getDate();
            tMonth = doHandleMonth(tMonth + 1);
            tDate = doHandleMonth(tDate);
            return tYear+"-"+tMonth+"-"+tDate;
        }
        function doHandleMonth(month){
            var m = month;
            if(month.toString().length == 1){
                m = "0" + month;
            }
            return m;
        }
    },
},
  methods: {
      cancel() {
        this.$store.dispatch("getMarkShow",false)
      },
      list_li(c,index){
          this.$store.dispatch("getMarkShow",false)
          this.$store.dispatch("getMarkDateVal",c)
      }
  }
}



