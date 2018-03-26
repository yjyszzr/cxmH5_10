<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
@import "./assets/css/public.scss";
    body ,html{
        background-color: #f5f5f5;
        height: 100%;
    }

    .color {
        background-color: #ffffff;
    }
</style>
