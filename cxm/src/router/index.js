import Vue from 'vue'
import Router from 'vue-router'
import { Toast,MessageBox } from 'mint-ui'
import {wxPd} from '../util/common'
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条 样式
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      meta:{
        keepAlive: true,
        title: '购彩大厅'
      },
      component: resolve => require(['@/components/Index'], resolve)
    },
    {
      path: '/user/pwd',
      name: 'pwd',
      meta: {
        requireAuth: false,
        title: '密码登录'
      },
      component: resolve => require(['@/components/login/passwordLogin/password.vue'], resolve)
    },
    {
        path: '/activity/down/cxm',
        name: 'down',
        meta: {
          title: 'APP下载'
        },
        component: resolve => require(['@/components/index/appDownload/index.vue'], resolve)
    },
    {
        path: '/user/sms',
        name: 'sms',
        meta: {
            requireAuth: false,
            title: '短信登录'
        },
        component: resolve => require(['@/components/login/sms/sms.vue'], resolve)
    },
      {
          path: '/user/find',
          name: 'find',
          cname:'找回密码',
          meta: {
            title: '找回密码'
          },
          component: resolve => require(['@/components/login/findPassword/find.vue'], resolve)
      },
      {
          path: '/user/revise',
          name: 'revise',
          meta: {
            title: '修改密码'
          },
          component: resolve => require(['@/components/login/revisePassword/revise.vue'], resolve)
      },
      {
          path: '/user/register',
          name: 'register',
          meta: {
            title: '注册'
          },
          component: resolve => require(['@/components/login/register/register.vue'], resolve)
      },
      {
          path: '/user',
          name: 'user',
          meta: {
            requireAuth: true,
            title: '我的'
          },
          component: resolve => require(['@/components/user/index/index.vue'], resolve)
      },
      {
          path: '/find',
          name: 'find',
          meta: {
            requireAuth: true,
            keepAlive: true,
            title: '发现'
          },
          component: resolve => require(['@/components/find/index/index.vue'], resolve)
      },
      {
          path: '/user/recharge',
          name: 'recharge',
          meta: {
            title: '充值'
          },
          component: resolve => require(['@/components/user/recharge/recharge.vue'], resolve)
      },
      {
          path: '/user/withdraw',
          name: 'withdraw',
          meta: {
            title: '提现'
          },
          component: resolve => require(['@/components/user/withdraw/withdraw.vue'], resolve)
      },
      {

          path: '/user/credit_card',
          name: 'credit_card',
          meta: {
            title: '管理银行卡'
          },
          component: resolve => require(['@/components/user/credit_card/card.vue'], resolve)
      },
      {
          path: '/user/detail',
          name: 'detail',
          meta: {
            title: '我的卡券'
          },
          component: resolve => require(['@/components/user/detail/detail.vue'], resolve)
      },
      {
          path: '/user/about',
          name: 'about',
          meta: {
            title: '关于我们'
          },
          component: resolve => require(['@/components/user/about/about.vue'], resolve)
      },
      {
          path: '/user/suggestion',
          name: 'suggestion',
          meta: {
            title: '投诉建议'
          },
          component: resolve => require(['@/components/user/suggestion/suggestion.vue'], resolve)
      },
      {
          path: '/user/insurance',
          name: 'insurance',
          meta: {
            title: '安全保障'
          },
          component: resolve => require(['@/components/user/insurance/insurance.vue'], resolve)
      },
      {
          path: '/user/message',
          name: 'message',
          meta: {
            title: '消息中心'
          },
          component: resolve => require(['@/components/user/message/mess.vue'], resolve)
      },
      {
          path: '/user/order',
          name: 'order',
          meta: {
            title: '订单详情'
          },
          component: resolve => require(['@/components/user/order/index.vue'], resolve)
      },
      {
          path: '/user/certification',
          name: 'certification',
          meta: {
            title: '实名认证'
          },
          component: resolve => require(['@/components/user/certification/index.vue'], resolve)
      },
      {
          path: '/user/record',
          name: 'record',
          meta: {
            title: '购彩记录'
          },
        //   meta:{
        //     keepAlive: true
        //   },
          component: resolve => require(['@/components/user/record/index.vue'], resolve)
      },
      {
          path: '/user/account',
          name: 'account',
          meta: {
            title: '账户明细'
          },
          component: resolve => require(['@/components/user/account/index.vue'], resolve)
      },
      {
          path: '/user/add_card',
          name: 'add_card',
          meta: {
            title: '添加银行卡'
          },
          component: resolve => require(['@/components/user/add_card/index.vue'], resolve)
      },
      {
          path: '/user/give_details',
          name: 'give_details',
          meta: {
            title: '提现详情'
          },
          component: resolve => require(['@/components/user/give_details/index.vue'], resolve)
      },
      {
          path: '/user/draw',
          name: 'draw',
          meta: {
            title: '出票方案'
          },
          component: resolve => require(['@/components/user/draw/index.vue'], resolve)
      },
      {
          path: '/freebuy/protocol',
          name: 'protocol',
          meta: {
            title: '投注服务协议'
          },
          component: resolve => require(['@/components/freebuy/protocol/index.vue'], resolve)
      },
      {
          path: '/freebuy/singleNote',
          name: 'singleNote',
          cname:'单注页面',
          meta: {
            
            title: '购彩记录'
          },
          component: resolve => require(['@/components/freebuy/singleNote/singleNote.vue'], resolve)
      },
      {
          path: '/freebuy/cathectic',
          name: 'cathectic',
          meta: {
            title: '投注确认'
          },
          component: resolve => require(['@/components/freebuy/cathectic/index.vue'], resolve)
      },
      {
          path: '/freebuy/payment',
          name: 'payment',
          cname:'支付订单',
          meta: {
            requireAuth: true,
            title: '支付订单'
          },
          component: resolve => require(['@/components/freebuy/payment/index.vue'], resolve)
      },
      {
          path: '/lotteryResult',
          name: 'result',
          meta: {
            title: '比赛结果'
          },
          component: resolve => require(['@/components/lottery/result/index.vue'], resolve)
      },
      {
          path: '/lottery/teamDetail',
          name: 'teamDetail',
          meta: {
            title: '球队详情'
          },
          component: resolve => require(['@/components/lottery/teamDetail/index.vue'], resolve)
      },
      {
          path: '/index/consult',
          name: 'consult',
          meta: {
            title: '资讯详情'
          },
          component: resolve => require(['@/components/index/consult/consult.vue'], resolve)
      },
      {
          path: '/user/collection',
          name: 'collection',
          meta: {
            title: '我的收藏'
          },
          component: resolve => require(['@/components/user/collection/index.vue'], resolve)
      },
      {
          path: '/index/moreInfo',
          name: 'moreInfo',
          meta: {
            title: '相关文章'
          },
          component: resolve => require(['@/components/index/moreInformation/moreInformation.vue'], resolve)
      },
      {
          path: '/user/help',
          name: 'help',
          meta: {
            title: '帮助中心'
          },
          component: resolve => require(['@/components/user/help/index.vue'], resolve)
      },
      {
          path: '/user/service',
          name: 'service',
          meta: {
            title: '注册服务协议'
          },
          component: resolve => require(['@/components/user/service/index.vue'], resolve)
      },
      {
        path: '/freebuy/inToplay',
        name: 'inToplay',
        meta: {
            title: '玩法介绍'
        },
        component: resolve => require(['@/components/freebuy/intoplay/index.vue'], resolve)
      },
      {
          path: '/freebuy/explain',
          name: 'explain',
          meta: {
            title: '胆说明'
          },
          component: resolve => require(['@/components/freebuy/explain/explain.vue'], resolve)
      },
//    一期活动相关路由
      {
        path: '/user/activity/one',
        name: 'activity',
        meta: {
            title: '注册送好礼'
        },
        component: resolve => require(['@/components/activity/one/index.vue'], resolve)
      },
      {
          path: '/activity/tuiguang',
          name: 'tuiguang',
          meta: {
            title: '我的推广'
          },
          component: resolve => require(['@/components/activity/tuiguang/index/index.vue'], resolve)
      },
      {
          path: '/activity/rule',
          name: 'rule',
          meta: {
            title: '活动规则'
          },
          component: resolve => require(['@/components/activity/tuiguang/rule/index.vue'], resolve)
      },
      {
          path: '/activity/mycode',
          name: 'mycode',
          meta: {
            title: '我的二维码'
          },
          component: resolve => require(['@/components/activity/tuiguang/mycode/index.vue'], resolve)
      },
      {
          path: '/activity/income',
          name: 'income',
          meta: {
            title: '我的推广收入'
          },
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
          meta: {
            title: '收入明细'
          },
          component: resolve => require(['@/components/activity/tuiguang/incomedetail/index.vue'], resolve)
      },
      {
          path: '/activity/include',
          name: 'include',
          meta: {
            title: '如何计算收益'
          },
          component: resolve => require(['@/components/activity/tuiguang/include/index.vue'], resolve)
      },
      {
          path: '/activity/discount',
          name: 'discount',
          meta: {
            title: '优惠兑换'
          },
          component: resolve => require(['@/components/activity/tuiguang/discount/discount.vue'], resolve)
      },
      {
          path: '/activity/payConfirm',
          name: 'payConfirm',
          meta: {
            title: '支付订单'
          },
          component: resolve => require(['@/components/activity/tuiguang/payConfirm/index.vue'], resolve)
      },
      {
          path: '/activity/world_cup',
          name: 'world_cup',
          meta: {
            title: '世界杯资讯'
          },
          component: resolve => require(['@/components/activity/world_cup/index.vue'], resolve)
      },
      //二期活动
      {
          path: '/activity/red_packet',
          name: 'red_packet',
          meta: {
            title: '充值送壕礼'
          },
          component: resolve => require(['@/components/activity/red_packet/index/index.vue'], resolve),
      },
      {
          path: '/activity/world_matchList',
          name: 'world_matchList',
          component: resolve => require(['@/components/activity/world_cup_guessing/world_matchList/matchListBox/matchList.vue'], resolve),
          children: [
            {
                path: '/',
                name: 'worldwinner',
                meta: {
                    title: '世界杯'
                },
                component: resolve => require(['@/components/activity/world_cup_guessing/world_matchList/matchwinner/matchwinner.vue'], resolve)
            },
            {
              path: 'worldwinner',
              name: 'worldwinner',
              meta: {
                title: '世界杯'
              },
              component: resolve => require(['@/components/activity/world_cup_guessing/world_matchList/matchwinner/matchwinner.vue'], resolve)
            },
            {
              path: 'fsplace',
              name: 'fsplace',
              meta: {
                title: '世界杯'
              },
              component: resolve => require(['@/components/activity/world_cup_guessing/world_matchList/fsplace/fsplace.vue'], resolve)
            }
          ]
      },
      {
          path: '/activity/world_detail',
          name: 'world_detail',
          meta: {
            title: '世界杯'
          },
          component: resolve => require(['@/components/activity/world_cup_guessing/world_detail/index.vue'], resolve)
      },
      {
          path: '/activity/tuiguang/registration',
          name: 'registration',
          meta:{
            keepAlive: true,
            title: '店员注册'
          },
          component: resolve => require(['@/components/activity/tuiguang/registration/registration.vue'], resolve)
      },
      {
          path: '/activity/tuiguang/success',
          name: 'success',
          meta:{
            title: '注册成功'
          },
          component: resolve => require(['@/components/activity/tuiguang/success/success.vue'], resolve)
      },
      //app彩小秘彩票
      //帮助中心：appinfo/help
      //购彩协议：appinfo/protocol
      //服务协议：appinfo/service
      //玩法介绍：/appinfo/inToplay
      //胆说明：/appinfo/explain
      //安全保障：/appinfo/insurance
      {
          path: '/appinfo/help',
          name: 'help',
          component: resolve => require(['@/components/appinfo/help/index.vue'], resolve)
      },
      {
          path: '/appinfo/protocol',
          name: 'protocol',
          component: resolve => require(['@/components/appinfo/protocol/index.vue'], resolve)
      },
      {
          path: '/appinfo/service',
          name: 'service',
          component: resolve => require(['@/components/appinfo/service/index.vue'], resolve)
      },
      {
          path: '/appinfo/inToplay',
          name: 'inToplay',
          component: resolve => require(['@/components/appinfo/intoplay/index.vue'], resolve)
      },
      {
          path: '/appinfo/explain',
          name: 'explain',
          component: resolve => require(['@/components/appinfo/explain/explain.vue'], resolve)
      },
      {
          path: '/appinfo/insurance',
          name: 'insurance',
          component: resolve => require(['@/components/appinfo/insurance/insurance.vue'], resolve)
      },
      {
            path: '/activity/world/sixty',
            name: 'sixty',
            component: resolve => require(['@/components/activity/worldjeep/sixty/sixty.vue'], resolve)
       },
      //app必中彩
      //帮助中心：/appmust/help
      //购彩协议：/appmust/protocol
      //服务协议：/appmust/service
      //玩法介绍：/appmust/inToplay
      //胆说明：  /appmust/explain
      //安全保障：/appmust/insurance
      {
          path: '/appmust/help',
          name: 'help',
          component: resolve => require(['@/components/appmust/help/index.vue'], resolve)
      },
      {
          path: '/appmust/protocol',
          name: 'protocol',
          component: resolve => require(['@/components/appmust/protocol/index.vue'], resolve)
      },
      {
          path: '/appmust/service',
          name: 'service',
          component: resolve => require(['@/components/appmust/service/index.vue'], resolve)
      },
      {
          path: '/appmust/inToplay',
          name: 'inToplay',
          component: resolve => require(['@/components/appmust/intoplay/index.vue'], resolve)
      },
      {
          path: '/appmust/explain',
          name: 'explain',
          component: resolve => require(['@/components/appmust/explain/explain.vue'], resolve)
      },
      {
          path: '/appmust/insurance',
          name: 'insurance',
          component: resolve => require(['@/components/appmust/insurance/insurance.vue'], resolve)
      },
      //app天天买
      //帮助中心：/apptt/help
      //购彩协议：/apptt/protocol
      //服务协议：/apptt/service
      //玩法介绍：/apptt/inToplay
      //胆说明：  /apptt/explain
      //安全保障：/apptt/insurance
      {
          path: '/apptt/help',
          name: 'help',
          component: resolve => require(['@/components/apptt/help/index.vue'], resolve)
      },
      {
          path: '/apptt/protocol',
          name: 'protocol',
          component: resolve => require(['@/components/apptt/protocol/index.vue'], resolve)
      },
      {
          path: '/apptt/service',
          name: 'service',
          component: resolve => require(['@/components/apptt/service/index.vue'], resolve)
      },
      {
          path: '/apptt/inToplay',
          name: 'inToplay',
          component: resolve => require(['@/components/apptt/intoplay/index.vue'], resolve)
      },
      {
          path: '/apptt/explain',
          name: 'explain',
          component: resolve => require(['@/components/apptt/explain/explain.vue'], resolve)
      },
      {
          path: '/apptt/insurance',
          name: 'insurance',
          component: resolve => require(['@/components/apptt/insurance/insurance.vue'], resolve)
      },
      //世界杯协议
      {
          path: '/appsjb/world_explain',
          name: 'world_explain',
          component: resolve => require(['@/components/appsjb/world_explain/world_explain.vue'], resolve)
      },
      {
            path: '/activity/world/thirtytwo',
            name: 'thirtytwo',
            meta:{
                keepAlive: true
            },
            component: resolve => require(['@/components/activity/worldjeep/thirtytwo/thirtytwo.vue'], resolve)
      },
      {
          path: '/activity/world/illustrate',
          name: 'illustrate',
          component: resolve => require(['@/components/activity/worldjeep/illustrate/illustrate.vue'], resolve)
      },
      {
          path: '/activity/world/record',
          name: 'record',
          component: resolve => require(['@/components/activity/worldjeep/record/record.vue'], resolve)
      },
      {
          path: '/activity/world/worldenter',
          name: 'world',
          component: resolve => require(['@/components/activity/worldjeep/world/world.vue'], resolve)
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
    if(to.meta.title&&wxPd()) {
        if(toPath=='/freebuy/singleNote'){
            let noteTitle = (id) => {
                switch (id){
                    case '2' : return "胜平负";
                    case '1' : return "让球胜平负";
                    case '4' : return "总进球";
                    case '5' : return "半全场";
                    case '3' : return "比分";
                    case '7' : return "2选1";
                    case '6' : return "混合投注";
                }
            }
            document.title = '彩小秘·'+noteTitle(to.query.id);
        }else{
            document.title = '彩小秘·'+to.meta.title;
        }
    }
    NProgress.start(); // 开启Progress
    // 进入详情页时需要记录滚动条距离头部距离
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
    MessageBox.close(false);
    // // 页面跳转时滚动到页面顶部
    if(toPath!='/'||toPath!='/find'){
        document.getElementById('content').scrollTop = 0
    }
});


export default router