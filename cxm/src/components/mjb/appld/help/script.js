import helpTable from '../../../public/help'
export default {
    name: 'help',
    components: {
      "v-table": helpTable
    },
    mounted(){
      window.getCxmTitle = function(){
          return '乐得体育·帮助中心'
      }
    }
}