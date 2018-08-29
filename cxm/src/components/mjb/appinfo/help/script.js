import helpTable from '../../../public/help'
export default {
    name: 'help',
    components: {
      "v-table": helpTable
    },
    mounted(){
      window.getCxmTitle = function(){
          return '彩小秘彩票·帮助中心'
      }
    }
}