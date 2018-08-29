import {means} from '../../../util/common'
import helpTable from '../../public/help'
export default {
    name: 'help',
    components: {
        "v-table": helpTable
    },
    mounted(){
      means('帮助中心').isTitle
    }
}