import helpTable from '../../../public/help'
export default {
    name: 'help',
    components: {
      "v-table": helpTable
    },
    mounted(){
      window.getCxmTitle = function(){
          return '足球资讯·帮助中心'
      }
    }
}