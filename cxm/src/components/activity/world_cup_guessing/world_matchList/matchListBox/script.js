export default {
    name: 'world_matchList',
    data() {
        return {
            flag: true,
            classFlag: true,
            transitionName: 'slide-left'
        }
    },
    mounted() {

    },
    watch: {　　
        '$route' (to, from) {　　 
            //console.log('现在路由:',to.path.split('/')[1],'来自路由:',from.path.split('/')[1],'现在的动画:',this.transitionName)　　　
            const toDepth = to.path 
            this.transitionName = toDepth =='/activity/world_matchList/worldwinner' ? 'slide-right' : 'slide-left'　　　　
        }　　
    }

}