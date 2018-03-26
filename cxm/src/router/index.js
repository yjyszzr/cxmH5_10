import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      cname:'首页',
      component: function (resolve) {
          require(['../components/index.vue'], resolve)
      }
    },
    {
      path: '/password',
      name: 'password',
      cname:'密码登录',
      component: function (resolve) {
        require(['../components/login/passwordLogin/password.vue'], resolve)
      },
    },
  ]
})
