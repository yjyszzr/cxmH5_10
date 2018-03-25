// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex';
import VueScroller from 'vue-scroller';
import units from './tools/units'
import logins from './router/login'
import layer from './tools/layer.m'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.config.productionTip = false;
Vue.http.options.xhr = {withCredentials: true};
Vue.use(Vuex);
Vue.use(VueScroller);
Vue.use(layer);


(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);




Vue.prototype.href = function ($url = '') {
    location.href = '#/' + $url;
};
Vue.prototype.unit = units;
Vue.prototype.Http = function (cont, data, cb) {
    let host = cont.split('/');
    this.$http.post(units.host(host[0] + '/' + host[1]), units.params(data)).then(function (res) {
        layer.loading(false);
        logins.init(res.data, store);
        cb && cb(res.data);
    });
};
import inter from './router/intercept'
import browser from './router/browser'
const store = new Vuex.Store({
    state: {
        islogin: function () {
        },
        gloub: {
            open: true,
            show: inter.headerShow(browser, store)
        },
    },
    mutations: {}
});
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});

router.afterEach(function (to, from, next) {
    inter.init(to.name, store);
    store.state.gloub.open = inter.headers.init(to.name);
    setTimeout(function () {
        layer.loading(false);
    }, 800);

    store.state.gloub.after = to;
});
router.beforeEach(function (to, from, next) {
    layer.loading('加载中...');
    next();
});
