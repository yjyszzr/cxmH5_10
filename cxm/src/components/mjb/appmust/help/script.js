
import helpTable from '../../../public/help'
export default {
    name: 'help',
    components: {
      "v-table": helpTable
    },
    mounted(){
      window.getCxmTitle = function(){
          return '必中彩·帮助中心'
      }
    }
}