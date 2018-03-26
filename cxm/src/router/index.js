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
    {
        path: '/sms',
        name: 'sms',
        cname:'短信登录',
        component: function (resolve) {
            require(['../components/login/sms/sms.vue'], resolve)
        },
    },
      {
          path: '/find',
          name: 'find',
          cname:'找回密码',
          component: function (resolve) {
              require(['../components/login/findPassword/find.vue'], resolve)
          },
      },
      {
          path: '/revise',
          name: 'revise',
          cname:'修改密码',
          component: function (resolve) {
              require(['../components/login/revisePassword/revise.vue'], resolve)
          },
      },
      {
          path: '/register',
          name: 'register',
          cname:'注册',
          component: function (resolve) {
              require(['../components/login/register/register.vue'], resolve)
          },
      },
      {
          path: '/index',
          name: 'index',
          cname:'我的',
          component: function (resolve) {
              require(['../components/user/index/index.vue'], resolve)
          },
      },
      {
          path: '/recharge',
          name: 'recharge',
          cname:'充值',
          component: function (resolve) {
              require(['../components/user/recharge/recharge.vue'], resolve)
          },
      },
      {
          path: '/withdraw',
          name: 'withdraw',
          cname:'提现',
          component: function (resolve) {
              require(['../components/user/withdraw/withdraw.vue'], resolve)
          },
      },
      {
          path: '/credit_card',
          name: 'credit_card',
          cname:'管理银行卡',
          component: function (resolve) {
              require(['../components/user/credit_card/card.vue'], resolve)
          },
      },
  ]
})
