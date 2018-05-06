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
//滚动到底解决
export let ScrollFix = function(elem) {
	// Variables to track inputs
	var startY, startTopScroll;
	
	elem = elem || document.querySelector(elem);
	
	// If there is no element, then do nothing	
	if(!elem)
		return;

	// Handle the start of interactions
	elem.addEventListener('touchstart', function(event){
		startY = event.touches[0].pageY;
		startTopScroll = elem.scrollTop;
		
		if(startTopScroll <= 0)
			elem.scrollTop = 1;

		if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
			elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
	}, false);
};