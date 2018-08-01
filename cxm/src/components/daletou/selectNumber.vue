<template>
    <p>大乐透</p>
</template>

<script>
    export default {
        name: "select-number",
        data(){
          return{

          }
        },
        created(){

        },
        beforeRouteLeave(to, from, next) {
            next()
            if(to.path!='/lottery/teamDetail'){
                this.$store.dispatch("getMarkShow",false)
                this.$store.dispatch("getMarkShowType",'')
                this.$store.dispatch("getLeagueIds",'')
                this.$store.dispatch("getMarkDateVal",'')
            }
        }
    }
</script>

<style scoped>

</style>