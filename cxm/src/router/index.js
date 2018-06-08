import Vue from 'vue'
import Router from 'vue-router'
import { Toast } from 'mint-ui'
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条 样式
Vue.use(Router)

const router = new Router({
  mode: 'history',
//   scrollBehavior (to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition
//     } else {
//       return { x: 0, y: 0 }
//     }
//   },
  routes: [
    {
      path: '/',
      name: 'index',
      cname:'首页',
      meta:{
        keepAlive: true
      },
      component: resolve => require(['@/components/Index'], resolve)
    },
    {
      path: '/user/pwd',
      name: 'pwd',
      cname:'密码登录',
      meta: {
        requireAuth: false
      },
      component: resolve => require(['@/components/login/passwordLogin/password.vue'], resolve)
    },
    {
        path: '/user/sms',
        name: 'sms',
        cname:'短信登录',
        meta: {
            requireAuth: false
        },
        component: resolve => require(['@/components/login/sms/sms.vue'], resolve)
    },
      {
          path: '/user/find',
          name: 'find',
          cname:'找回密码',
          component: resolve => require(['@/components/login/findPassword/find.vue'], resolve)
      },
      {
          path: '/user/revise',
          name: 'revise',
          cname:'修改密码',
          component: resolve => require(['@/components/login/revisePassword/revise.vue'], resolve)
      },
      {
          path: '/user/register',
          name: 'register',
          cname:'注册',
          component: resolve => require(['@/components/login/register/register.vue'], resolve)
      },
      {
          path: '/user',
          name: 'user',
          cname:'我的',
          meta: {
            requireAuth: true
          },
          component: resolve => require(['@/components/user/index/index.vue'], resolve)
      },
      {
          path: '/find',
          name: 'find',
          cname:'发现',
          meta: {
            requireAuth: true,
            keepAlive: true
          },
          component: resolve => require(['@/components/find/index/index.vue'], resolve)
      },
      {
          path: '/user/recharge',
          name: 'recharge',
          cname:'充值',
          component: resolve => require(['@/components/user/recharge/recharge.vue'], resolve)
      },
      {
          path: '/user/withdraw',
          name: 'withdraw',
          cname:'提现',
          component: resolve => require(['@/components/user/withdraw/withdraw.vue'], resolve)
      },
      {

          path: '/user/credit_card',
          name: 'credit_card',
          cname:'管理银行卡',
          component: resolve => require(['@/components/user/credit_card/card.vue'], resolve)
      },
      {
          path: '/user/detail',
          name: 'detail',
          cname:'我的卡卷',
          component: resolve => require(['@/components/user/detail/detail.vue'], resolve)
      },
      {
          path: '/user/about',
          name: 'about',
          cname:'关于我们',
          component: resolve => require(['@/components/user/about/about.vue'], resolve)
      },
      {
          path: '/user/suggestion',
          name: 'suggestion',
          cname:'投诉建议',
          component: resolve => require(['@/components/user/suggestion/suggestion.vue'], resolve)
      },
      {
          path: '/user/insurance',
          name: 'insurance',
          cname:'安全保障',
          component: resolve => require(['@/components/user/insurance/insurance.vue'], resolve)
      },
      {
          path: '/user/message',
          name: 'message',
          cname:'消息中心',
          component: resolve => require(['@/components/user/message/mess.vue'], resolve)
      },
      {
          path: '/user/order',
          name: 'order',
          cname:'订单详情',
          component: resolve => require(['@/components/user/order/index.vue'], resolve)
      },
      {
          path: '/user/certification',
          name: 'certification',
          cname:'实名认证',
          component: resolve => require(['@/components/user/certification/index.vue'], resolve)
      },
      {
          path: '/user/record',
          name: 'record',
          cname:'购彩记录',
        //   meta:{
        //     keepAlive: true
        //   },
          component: resolve => require(['@/components/user/record/index.vue'], resolve)
      },
      {
          path: '/user/account',
          name: 'account',
          cname:'账户明细',
          component: resolve => require(['@/components/user/account/index.vue'], resolve)
      },
      {
          path: '/user/add_card',
          name: 'add_card',
          cname:'添加银行卡',
          component: resolve => require(['@/components/user/add_card/index.vue'], resolve)
      },
      {
          path: '/user/give_details',
          name: 'give_details',
          cname:'提现详情',
          component: resolve => require(['@/components/user/give_details/index.vue'], resolve)
      },
      {
          path: '/user/draw',
          name: 'draw',
          cname:'出票方案',
          component: resolve => require(['@/components/user/draw/index.vue'], resolve)
      },
      {
          path: '/freebuy/protocol',
          name: 'protocol',
          cname:'购彩记录',
          component: resolve => require(['@/components/freebuy/protocol/index.vue'], resolve)
      },
      {
          path: '/freebuy/singleNote',
          name: 'singleNote',
          cname:'单注页面',
          component: resolve => require(['@/components/freebuy/singleNote/singleNote.vue'], resolve)
      },
      {
          path: '/freebuy/cathectic',
          name: 'cathectic',
          cname:'投注确认',
          component: resolve => require(['@/components/freebuy/cathectic/index.vue'], resolve)
      },
      {
          path: '/freebuy/payment',
          name: 'payment',
          cname:'支付订单',
          meta: {
            requireAuth: true
          },
          component: resolve => require(['@/components/freebuy/payment/index.vue'], resolve)
      },
      {
          path: '/lotteryResult',
          name: 'result',
          cname:'比赛结果',
          component: resolve => require(['@/components/lottery/result/index.vue'], resolve)
      },
      {
          path: '/lottery/teamDetail',
          name: 'teamDetail',
          cname:'球队详情',
          component: resolve => require(['@/components/lottery/teamDetail/index.vue'], resolve)
      },
      {
          path: '/index/consult',
          name: 'consult',
          cname:'资讯详情',
          component: resolve => require(['@/components/index/consult/consult.vue'], resolve)
      },
      {
          path: '/user/collection',
          name: 'collection',
          cname:'我的收藏',
          component: resolve => require(['@/components/user/collection/index.vue'], resolve)
      },
      {
          path: '/index/moreInfo',
          name: 'moreInfo',
          cname:'相关文章',
          component: resolve => require(['@/components/index/moreInformation/moreInformation.vue'], resolve)
      },
      {
          path: '/user/help',
          name: 'help',
          cname:'帮助中心',
          component: resolve => require(['@/components/user/help/index.vue'], resolve)
      },
      {
          path: '/user/service',
          name: 'service',
          cname:'服务协议',
          component: resolve => require(['@/components/user/service/index.vue'], resolve)
      },
      {
        path: '/freebuy/inToplay',
        name: 'inToplay',
        cname:'玩法介绍',
        component: resolve => require(['@/components/freebuy/intoplay/index.vue'], resolve)
      },
      {
          path: '/freebuy/explain',
          name: 'explain',
          cname: '胆说明',
          component: resolve => require(['@/components/freebuy/explain/explain.vue'], resolve)
      },
//    一期活动相关路由
      {
        path: '/user/activity/one',
        name: 'activity',
        cname:'活动',
        component: resolve => require(['@/components/activity/one/index.vue'], resolve)
      },
      {
          path: '/activity/tuiguang',
          name: 'tuiguang',
          cname:'推广',
          component: resolve => require(['@/components/activity/tuiguang/index/index.vue'], resolve)
      },
      {
          path: '/activity/rule',
          name: 'rule',
          cname:'活动规则',
          component: resolve => require(['@/components/activity/tuiguang/rule/index.vue'], resolve)
      },
      {
          path: '/activity/mycode',
          name: 'mycode',
          cname:'我的二维码',
          component: resolve => require(['@/components/activity/tuiguang/mycode/index.vue'], resolve)
      },
      {
          path: '/activity/income',
          name: 'income',
          cname:'我的推广收入',
          component: resolve => require(['@/components/activity/tuiguang/income/index.vue'], resolve)
      },
      {
        path: '/activity/tuiguang/popupleft',
        name: 'popupLeft',
        cname:'地址搜索',
        component: resolve => require(['@/components/activity/tuiguang/popupLeft/popupLeft.vue'], resolve)
        },
      {
          path: '/activity/incomedetail',
          name: 'incomedetail',
          cname:'收入明细',
          component: resolve => require(['@/components/activity/tuiguang/incomedetail/index.vue'], resolve)
      },
      {
          path: '/activity/include',
          name: 'include',
          cname:'如何计算收益',
          component: resolve => require(['@/components/activity/tuiguang/include/index.vue'], resolve)
      },
      {
          path: '/activity/discount',
          name: 'discount',
          cname:'优惠兑换',
          component: resolve => require(['@/components/activity/tuiguang/discount/discount.vue'], resolve)
      },
      {
          path: '/activity/payConfirm',
          name: 'payConfirm',
          cname: '支付订单',
          component: resolve => require(['@/components/activity/tuiguang/payConfirm/index.vue'], resolve)
      },
      {
          path: '/activity/world_cup',
          name: 'world_cup',
          cname: '世界杯资讯',
          component: resolve => require(['@/components/activity/world_cup/index.vue'], resolve)
      },
      //二期活动
      {
          path: '/activity/red_packet',
          name: 'red_packet',
          cname: '充值首页',
          component: resolve => require(['@/components/activity/red_packet/index/index.vue'], resolve),
          // children:[
          //     {
          //
          //     }
          // ]
      },
      {
          path: '/activity/popup',
          name: 'popup',
          cname: '充值首页',
          component: resolve => require(['@/components/activity/red_packet/popup/index.vue'], resolve),
          // children:[
          //     {
          //
          //     }
          // ]
      },
      {
          path: '/activity/world_matchList',
          name: 'world_matchList',
          cname: '世界杯赛事',
          component: resolve => require(['@/components/activity/world_cup_guessing/world_matchList/matchListBox/matchList.vue'], resolve),
          children: [
            {
                path: '/',
                name: 'worldwinner',
                component: resolve => require(['@/components/activity/world_cup_guessing/world_matchList/matchwinner/matchwinner.vue'], resolve)
            },
            {
              path: 'worldwinner',
              name: 'worldwinner',
              component: resolve => require(['@/components/activity/world_cup_guessing/world_matchList/matchwinner/matchwinner.vue'], resolve)
            },
            {
              path: 'fsplace',
              name: 'fsplace',
              component: resolve => require(['@/components/activity/world_cup_guessing/world_matchList/fsplace/fsplace.vue'], resolve)
            }
          ]
      },
      {
          path: '/activity/world_detail',
          name: 'world_detail',
          cname: '世界杯赛事详情',
          component: resolve => require(['@/components/activity/world_cup_guessing/world_detail/index.vue'], resolve)
      },
      {
          path: '/activity/tuiguang/registration',
          name: 'registration',
          cname: '推广注册',
          meta:{
            keepAlive: true
          },
          component: resolve => require(['@/components/activity/tuiguang/registration/registration.vue'], resolve)
      },
      {
          path: '/activity/tuiguang/success',
          name: 'success',
          cname: '推广注册成功',
          component: resolve => require(['@/components/activity/tuiguang/success/success.vue'], resolve)
      },
      //app
      //帮助中心：app_mjb/help
      //购彩记录：app_mjb/protocol
      //服务协议：app_mjb/service
      {
          path: '/app_mjb/help',
          name: 'help',
          component: resolve => require(['@/components/app_mjb/help/index.vue'], resolve)
      },
      {
          path: '/app_mjb/protocol',
          name: 'protocol',
          component: resolve => require(['@/components/app_mjb/protocol/index.vue'], resolve)
      },
      {
          path: '/app_mjb/service',
          name: 'service',
          component: resolve => require(['@/components/app_mjb/service/index.vue'], resolve)
      },

  ]
})

NProgress.configure({ showSpinner: false });

router.beforeEach(async(to, from, next) => {
	if(to.fullPath.indexOf('#')!=-1){
		next(
			{
				path: to.fullPath.replace('/#','')
			}
		)
	}
    let toPath = to.path
    NProgress.start(); // 开启Progress
    // 进入详情页时需要记录滚动条距离头部距离
    // if (toPath === '/user/order'&&from.path==='/user/record') {
    //     router.app.orderScrolltop = $('#content').scrollTop()
    // }else 
    if(toPath === '/index/consult'&&(from.path==='/'||from.path==='/find')){
        router.app.consultScrolltop = $('#content').scrollTop()
        from.meta.keepAlive = true
    }else{
        if((from.path=='/'||from.path==='/find')&&toPath!='/index/consult'){
            from.meta.keepAlive = false
        }
    }
	next()
})

router.afterEach(async(to, from) => {
    let toPath = to.path
    NProgress.done(); // 结束Progress
    // // 页面跳转时滚动到页面顶部
    // if(toPath!='/'&&toPath!='/user/record'){
    //     document.getElementById('content').scrollTop = 0
    // }
    if(toPath!='/'||toPath!='/find'){
        document.getElementById('content').scrollTop = 0
    }
});


export default router