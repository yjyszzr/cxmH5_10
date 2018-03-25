const intercept = {
    path:['ringup','photohead','photoid','photo','select','state'],
    init:function (name,store) {
        let status = this.path.includes(name);
        this.jqueryAdd(status);
        store.state.gloub.bkgroundStatus = status;
    },
    headers:{
        route:['detail','ringup','citys'],
        init:function (name) {
            return !this.route.includes(name);
        }
    },
    jqueryAdd:function (status) {
        new Promise(function(resolve, reject){
            let body = $('body');
            if(status) body.addClass('color');
            else body.removeClass('color');
        });
    },
    headerShow:function (browser,store) {
        //如果是qq或者微信浏览器,去掉头
        if(browser.versions.qq || browser.versions.weixinbrowser){
            return false;
        }
        return true;
    }
};
export default intercept;
