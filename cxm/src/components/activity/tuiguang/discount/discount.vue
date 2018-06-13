<style lang='scss' src='./style.scss'>

</style>

<template>
	<div class="discount">
		<div class="discountBanner">
			<img src="../tuiguang/u_banner.jpg" />
		</div>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">可兑换代金券</mt-tab-item>
			<mt-tab-item id="2">已兑换代金券</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="discountList">
					<li @click="goPayconfirm(item.cashCouponId)" v-for="(item,i) in discountList" :key='i'>
						<div class="discountTop">
							<span>¥</span><b>{{parseInt(item.cashCouponDenomination)}}</b><span>代金券</span>
						</div>
						<p></p>
						<p></p>
						<div class="discountBottom">
							<span><b>{{parseInt(item.cashCouponPrice)}}</b>元奖金</span><span>立即购买<i class="iconfont icon-icon-14"></i></span>
						</div>
					</li>
				</div>
				<div class="nullstatus" v-if="discountList.length==0">
	                    <img src="../../../../assets/img/juan.png" alt="">
	                    <span>暂无数据</span>
	            </div>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<ul class="ysyList">
					<li v-for="(item,i) in list" :key='i'>
						<div class="discountTop">
							<span>¥</span><b>{{parseInt(item.cashCouponDenomination)}}</b><span>代金券</span>
						</div>
						<p></p>
						<p></p>
						<div class="discountBottom">
							<span><b>"每一天"</b>便利店使用</span><span>{{date(item.receiveTime)}}兑换</span>
						</div>
					</li>
				</ul>
				<div class="nullstatus" v-if="list.length==0">
	                    <img src="../../../../assets/img/juan.png" alt="">
	                    <span>暂无数据</span>
	            </div>
			</mt-tab-container-item>
		</mt-tab-container>
		<div class="discountjs">
			<h3>优惠兑换活动说明</h3>
			<p>
				1、通过参加“每一天”助力世界杯活动购彩并中奖后，可通过活动页面进行“每一天”超市代金券兑换。<br /><br /> 2、“每一天”超市代金券面值及兑换需要消耗的彩小秘可提现金额对照如下： 100元可提现金额可兑换105元“每一天”便利店代金券 100元可提现金额可兑换105元“每一天”便利店代金券 100元可提现金额可兑换105元“每一天”便利店代金券。<br /><br /> 3、只能使用购彩中奖后的可提现金额兑换代金券，直接充值不可进行兑换。通过活动页面兑换“每一天”超市代金券后，账户内的可提现余额会进行相应抵扣。<br /><br /> 4、“每一天”超市代金券将在24小时内发放到您的“每一天”超市会员账号内。如有延迟请咨询客服电话：400-28838880-210。
			</p>
		</div>
	</div>
</template>

<script src='./script.js'>
</script>