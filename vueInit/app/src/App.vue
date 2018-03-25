<template>
    <div id="main" :class="{'setBk':$store.state.gloub.bkgroundStatus}">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {},
        created: function () {
            setTimeout(function () {
                layer.loading(false);
            }, 800);
        }
    }
</script>

<style scoped>
    @import "../static/need/layer.css";
    @import "./assets/css/public.css";
    body {
        background-color: #f5f5f5;
        height: 100%;
    }

    .color {
        background-color: #ffffff;
    }

    .layui-m-layercont p {
        color: #ffffff !important;
    }
</style>
