import api from '../../../../fetch/api.js'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
  name: "data",
  data() {
    return {
        // define :[]
        playType: this.$route.query.id,
        mark_show_type: this.$store.state.mark_show_type,
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
          this.$store.state.mark_show = false;
      },
      list_li(index){
          this.$refs.match_name.forEach(function(data_item,data_index){
              this.$refs.match_name[data_index].className = ''
          }, this)

          if(this.$refs.match_name[index].className == 'cur') {
              this.$refs.match_name[index].className = ''
          } else {
              this.$refs.match_name[index].className = 'cur'
          }
          this.cur_date = this.$refs.match_name[index].innerText
      }
  }
}



