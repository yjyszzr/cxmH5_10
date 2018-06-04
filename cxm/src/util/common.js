//app h5页面分享
export let isShare = (arg,text,url,thumbUrl) =>{
	let obj = {}
    window.getCxmShare = function (){
    		obj.title = arg
            obj.description = text
            obj.img = thumbUrl
            obj.url = expUrl+url
        return obj
    } 
}
//app h5方法
export let means = (arg) =>{
    const appMeans = {
        //支付
        paydata: window.paydata = function(){
            return arg
        },
        //app title
        isTitle: window.getCxmTitle = function(){
            return '彩小秘·'+arg
        }
    }
    return appMeans
}
// const expUrl = 'http://192.168.31.205:8080'
// const expUrl = 'http://39.106.18.39:9805'
const expUrl = 'http://m.caixiaomi.net'
export let getCsUrl = () =>{
    return expUrl;
}

//判断苹果系统和安卓系统
export let detect = () => {
    var equipmentType = "";
    var agent = navigator.userAgent.toLowerCase();
    var android = agent.indexOf("android");
    var iphone = agent.indexOf("iphone");
    var ipad = agent.indexOf("ipad");
    if(android != -1){
        equipmentType = "android";
    }
    if(iphone != -1 || ipad != -1){
        equipmentType = "ios";
    }
    return equipmentType;
}
//获取url key
export let getUrlStr = function(name,url){
    /**
     * 获取地址栏参数
     */
    let reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)","i");
    if(reg.test(url)){
        return unescape(RegExp.$2.replace(/\+/g," "))
    }
    return undefined
}
//判断浏览器是否位wx
export let wxPd = function(){
    var ua = navigator.userAgent.toLowerCase();  
    if(ua.match(/MicroMessenger/i)=="micromessenger") {  
        return true;
    } else {  
        return false;
    } 
}
