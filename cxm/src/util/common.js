//app h5页面title
export let isTitle = (arg) =>{
    window.getCxmTitle = function (){
        return '彩小秘·'+arg
    }
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