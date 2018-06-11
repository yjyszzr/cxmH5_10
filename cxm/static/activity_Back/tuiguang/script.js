$.showIndicator();
		var baseUrl = 'http://39.106.18.39:8765/api/'
		// var baseUrl = 'http://api.caixiaomi.net/api/'
		var device = {
			plat: 'h5',
			apiv: 1,
			appv: '1.0.6',
			appid: '',
			mac: '',
			w: window.screen.availWidth,
			h: window.screen.availHeight,
			os: '',
			mid: '',
			brand: '',
			build: '',
			channel: 'h5',
			net: '',
			token: ''
		}
		var userData = ''
		
		function getUrlStr(name,url){
		    var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)","i");
		    if(reg.test(url)){
		        return unescape(RegExp.$2.replace(/\+/g," "))
		    }
		    return undefined
		}

		function activity_smClick() {
			$.modal({
				title: '扫码规则说明',
				text: '<p class="left">1、用户凭购物单据，均可获得一次扫码机会。扫码后即享110元彩金，彩金仅可用于购彩，不可提现，中奖奖金可以提现。每个用户限享1次（相同手机号码、设备视为同一用户，不重复派发)。<br />2、注册成功后请点击“我的－我的卡券”查收，彩金逾期未使用自动过期，请及时使用。<br />3、本活动不可与其他同类型新用户注册活动同享。<br /> 4、本活动最终解释权归彩小秘所有。</p>',
				buttons: [{
					text: '知道了',
					onClick: function() {
						$.closeModal()
					}
				}, ]
			})
		}


		function getSmsCode() {
			var obj = {}
			obj.body = {
				'mobile': $('.telVal').val(),
				'smsType': '1',
				'userId': getUrlStr('id',location.href)
			}
			obj.device = device
			$.ajax({
				type: 'post',
				url: baseUrl + 'member/dl/channelConsumer/smsCode',
				contentType: 'application/json;charset=UTF-8',
				data: JSON.stringify(obj),
				dataType: "json",
				success: function(data) {
//					console.log(data)
					$.hideIndicator();
					if(data.code == '301010') {
						$.modal({
							title: '提示',
							text: '当前手机号码已注册',
							buttons: [{
								text: '我知道了',
								onClick: function() {
									//$.router.load("#router2")
									$.closeModal()
								}
							}, ]
						})
					} else if(data.code == '0') {
						$.toast('验证码发送成功');
						$('.code').show()
						$('.lqbtn').css('display', 'block')
						$('.btn').hide()
						userData = data.data
						getCode()
					} else if(data.code >= 30000 && data.code <= 310000) {
						$.toast(data.msg);
					}
				},
				error: function(err) {
					$.hideIndicator();
				}
			})
		}

		function register() {
			var re = /^1\d{10}$/
			if($('.telVal').val() === '') {
				$.toast('请输入手机号码');
			} else if(!re.test($('.telVal').val())) {
				$.toast('请输入正确的手机号码');
			} else {
				$.showIndicator();
				getSmsCode()
			}
		}
		var validCode = true;

		function getCode() {
			var time = 60;
			if(validCode) {
				validCode = false;
				var t = setInterval(function() {
					time--;
					$('.codebtn').html("<span style='color: #ea5504;'>" + time + "s</span>后重新获取");
					if(time == 0) {
						clearInterval(t);
						$('.codebtn').html("<span onClick='getSmsCode()'>重新获取</span>");
						validCode = true;
					}
				}, 1000)
			}
		}

		function lqbtn() {
			if($('.codeVal').val() === '') {
				$.toast('验证码不能为空');
				return false;
			}
			$.showIndicator();
			var obj2 = {}
			obj2.body = {
				'mobile': $('.telVal').val(),
				'smsCode': $('.codeVal').val(),
				'loginSource': '4',
				'channelDistributorId': userData
			}
			obj2.device = device
			$.ajax({
				type: 'post',
				url: baseUrl + 'member/dl/channelConsumer/receiveLotteryAward',
				contentType: 'application/json;charset=UTF-8',
				data: JSON.stringify(obj2),
				dataType: "json",
				success: function(data) {
					//console.log(data)
					if(data.code == '0') {
						$.toast('注册成功');
						$.router.load("#router2")
					} else if(data.code >= 30000 && data.code <= 310000) {
						$.toast(data.msg);
					}
					$.hideIndicator();
				},
				error: function(err) {
					$.hideIndicator();
				}
			})
		}
		
		function downLoadBtn(){
			//判断苹果系统和安卓系统
			function detect(){
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
			var detect = detect()
			if(detect==='ios'){
				location.href = 'http://m.caixiaomi.net'
			}else if(detect==='android'){
				location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=net.caixiaomi.info'
			}
		}

		window.onload = function() {
			var obj1 = {}
			obj1.body = {

			}
			obj1.device = device
			$.ajax({
				type: 'post',
				url: baseUrl + 'member/dl/channelConsumer/getWinningList',
				contentType: 'application/json;charset=UTF-8',
				data: JSON.stringify(obj1),
				dataType: "json",
				success: function(item) {
					var str = ''
					for(var i = 0; i < 5; i++) {
						str += '<p>' + item.data[i].winningMsg + '<span>' + item.data[i].winningMoney + '</span>元</p>'
					}
					//						console.log(str)
					$('.xb').append(str)
					setTimeout(function() {
						$.hideIndicator();
					}, 300)
				},
				error: function(err) {
					//$.router.load("#router2")
					//						console.log(err.response)
					$.hideIndicator();
				}
			})
		}