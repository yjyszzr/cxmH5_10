<style lang='scss' scoped src='./style.scss'>

</style>
<template>
    <div class="wrap explain">
        <p>注册的用户，并同意以下服务条款，方有资格享受本网提供的相关服务，并受本协议条款的约束。用户使用本网提供的服务即视为接受本协议，使用前请认真阅读本协议。</p>
    </div>
</template>
<script>
    import {means} from '../../../util/common'
    export default {
        name: 'explain',
        data(){
            return {}
        },
        mounted(){
            means('胆 说明').isTitle
        }
    }
</script>