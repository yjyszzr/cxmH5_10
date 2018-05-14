// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import store from './vuex/store'
import $ from './util/zepto'
import { Collapse,CollapseItem } from 'element-ui';
import { Progress } from 'element-ui';
import _ from 'lodash'
// import VueLazyload from 'vue-lazyload'

// // or with options
// Vue.use(VueLazyload, {
//   preLoad: 1,
//   error: './static/payCallBack/cxzLoad.gif',
//   loading: './static/payCallBack/cxzLoad.gif',
//   attempt: 1
// })

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Progress)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
