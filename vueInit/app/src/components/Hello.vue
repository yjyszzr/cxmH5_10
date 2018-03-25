<template>
    <div class="hello" v-if="false">
        <ul>
            <li v-for="x in route">
                <a :href="'#'+x.path">{{x.name}}({{x.cname}})</a>
                <ul>
                    <li v-for="v in x.children">
                        <a :href="'#'+v.path">{{v.name}}({{v.cname}})</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import router from '../router/index'
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                route:{}
            }
        },
        beforeCreate:function () {
            this.href('order/grab');
        },
        created: function () {
            this.route = router.options.routes;
            console.log(this.route);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
