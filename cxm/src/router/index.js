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
      {
          path: '/user/detail',
          name: 'detail',
          cname:'我的卡卷',
          component: function (resolve) {
              require(['../components/user/detail/detail.vue'], resolve)
          },
      },
      {
          path: '/user/about',
          name: 'about',
          cname:'关于我们',
          component: function (resolve) {
              require(['../components/user/about/about.vue'], resolve)
          },
      },
      {
          path: '/user/suggestion',
          name: 'suggestion',
          cname:'投诉建议',
          component: function (resolve) {
              require(['../components/user/suggestion/suggestion.vue'], resolve)
          },
      },
      {
          path: '/user/insurance',
          name: 'insurance',
          cname:'安全保障',
          component: function (resolve) {
              require(['../components/user/insurance/insurance.vue'], resolve)
          },
      },
      {
          path: '/user/message',
          name: 'message',
          cname:'消息中心',
          component: function (resolve) {
              require(['../components/user/message/mess.vue'], resolve)
          },
      },
      {
          path: '/user/order',
          name: 'order',
          cname:'订单详情',
          component: function (resolve) {
              require(['../components/user/order/index.vue'], resolve)
          },
      },
      {
          path: '/user/certification',
          name: 'certification',
          cname:'实名认证',
          component: function (resolve) {
              require(['../components/user/certification/index.vue'], resolve)
          },
      },
      {
          path: '/user/record',
          name: 'record',
          cname:'购彩记录',
          component: function (resolve) {
              require(['../components/user/record/index.vue'], resolve)
          },
      },
      {
          path: '/user/account',
          name: 'account',
          cname:'账户明细',
          component: function (resolve) {
              require(['../components/user/account/index.vue'], resolve)
          },
      },
      {
          path: '/user/add_card',
          name: 'add_card',
          cname:'添加银行卡',
          component: function (resolve) {
              require(['../components/user/add_card/index.vue'], resolve)
          },
      },
      {
          path: '/user/give_details',
          name: 'give_details',
          cname:'提现详情',
          component: function (resolve) {
              require(['../components/user/give_details/index.vue'], resolve)
          },
      },
      {
          path: '/user/draw',
          name: 'draw',
          cname:'出票方案',
          component: function (resolve) {
              require(['../components/user/draw/index.vue'], resolve)
          },
      },
      {
          path: '/freebuy/singleNote',
          name: 'singleNote',
          cname:'单注页面',
          component: function (resolve) {
              require(['../components/freebuy/singleNote/singleNote.vue'], resolve)
          },
      },
      {
          path: '/freebuy/cathectic',
          name: 'cathectic',
          cname:'投注确认',
          component: function (resolve) {
              require(['../components/freebuy/cathectic/index.vue'], resolve)
          },
      },
      {
          path: '/freebuy/payment',
          name: 'payment',
          cname:'支付订单',
          component: function (resolve) {
              require(['../components/freebuy/payment/index.vue'], resolve)
          },
      },
      {
          path: '/lotteryResult',
          name: 'result',
          cname:'比赛结果',
          component: function (resolve) {
              require(['../components/lottery/result/index.vue'], resolve)
          },
      },
      {
          path: '/lottery/teamDetail',
          name: 'teamDetail',
          cname:'球队详情',
          component: function (resolve) {
              require(['../components/lottery/teamDetail/index.vue'], resolve)
          },
      }
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