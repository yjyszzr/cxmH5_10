import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      cname:'首页',
      meta: {
        requireAuth: true
      },
      component: function (resolve) {
          require(['../components/index.vue'], resolve)
      }
    },
    {
      path: '/user/password',
      name: 'password',
      cname:'密码登录',
      meta: {
        requireAuth: false
      },
      component: function (resolve) {
        require(['../components/login/passwordLogin/password.vue'], resolve)
      },
    },
    {
        path: '/user/sms',
        name: 'sms',
        cname:'短信登录',
        meta: {
            requireAuth: false
        },
        component: function (resolve) {
            require(['../components/login/sms/sms.vue'], resolve)
        },
    },
      {
          path: '/user/find',
          name: 'find',
          cname:'找回密码',
          component: function (resolve) {
              require(['../components/login/findPassword/find.vue'], resolve)
          },
      },
      {
          path: '/user/revise',
          name: 'revise',
          cname:'修改密码',
          component: function (resolve) {
              require(['../components/login/revisePassword/revise.vue'], resolve)
          },
      },
      {
          path: '/user/register',
          name: 'register',
          cname:'注册',
          component: function (resolve) {
              require(['../components/login/register/register.vue'], resolve)
          },
      },
      {
          path: '/user',
          name: 'user',
          cname:'我的',
          meta: {
            requireAuth: true
          },
          component: function (resolve) {
              require(['../components/user/index/index.vue'], resolve)
          },
      },
      {
          path: '/user/recharge',
          name: 'recharge',
          cname:'充值',
          component: function (resolve) {
              require(['../components/user/recharge/recharge.vue'], resolve)
          },
      },
      {
          path: '/user/withdraw',
          name: 'withdraw',
          cname:'提现',
          component: function (resolve) {
              require(['../components/user/withdraw/withdraw.vue'], resolve)
          },
      },
      {
          path: '/user/credit_card',
          name: 'credit_card',
          cname:'管理银行卡',
          component: function (resolve) {
              require(['../components/user/credit_card/card.vue'], resolve)
          },
      },
  ]
})

router.beforeEach((to, from, next) => {
	if(to.matched.some(record => record.meta.requireAuth)) {
		if(!localStorage.getItem('token')) {
			next({
				path: '/user/password',
				query: {
					redirect: to.fullPath
				}
			})
		} else {
			next()
		}
	} else {
		next()
	}
})


export default router