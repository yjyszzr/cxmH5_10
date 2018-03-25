import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'
import password from '@/components/password'
import sms from '@/components/sms'

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
          path: '/register',
          name: 'register',
          cname:'注册',
          component: function (resolve) {
            require(['../components/register.vue'], resolve)
          },
        },
        {
          path: '/password',
          name: 'password',
          cname:'密码登录',
          component: function (resolve) {
            require(['../components/password.vue'], resolve)
          },
        },
        {
          path: '/sms',
          name: 'sms',
          cname:'短信登录',
          component: function (resolve) {
            require(['../components/sms.vue'], resolve)
          },
        },
        {
          path: '/back',
          name: 'back',
          cname:'找回密码',
          component: function (resolve) {
            require(['../components/back.vue'], resolve)
          },
        },
        {
          path: '/modify',
          name: 'modify',
          cname:'修改密码',
          component: function (resolve) {
            require(['../components/modify.vue'], resolve)
          },
        },
        {
          path: '/my',
          name: 'my',
          cname:'我的',
          component: function (resolve) {
            require(['../components/my.vue'], resolve)
          },
        },
        {
          path: '/real',
          name: 'real',
          cname:'实名认证',
          component: function (resolve) {
            require(['../components/real.vue'], resolve)
          },
        },
        {
          path: '/recharge',
          name: 'recharge',
          cname:'充值',
          component: function (resolve) {
            require(['../components/recharge.vue'], resolve)
          },
        },
        {
          path: '/card',
          name: 'card',
          cname:'管理银行卡',
          component: function (resolve) {
            require(['../components/card.vue'], resolve)
          },
        },
        {
          path: '/withdrawals',
          name: 'withdrawals',
          cname:'提现',
          component: function (resolve) {
            require(['../components/withdrawals.vue'], resolve)
          },
        },
      {
        path: '/add_card',
        name: 'add_card',
        cname:'提现',
        component: function (resolve) {
          require(['../components/add_card.vue'], resolve)
        },
      },
        {
            path: '/test',
            name: 'test',
            cname:'测试',
            component: function (resolve) {
                require(['../components/router.vue'], resolve)
            },
            children: [
                {
                    path: '/test/aaa',
                    name: 'ringup',
                    cname:'首页测试',
                    component: function (resolve) {
                        require(['../components/Hello.vue'], resolve)
                    }
                },
            ]
        }
    ]
})
