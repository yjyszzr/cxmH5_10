<template>
	<div class="payConfirm">
		<ul class="payList">
			<li>
				<p>订单金额</p>
				<p>¥{{orderObj.cashCouponPrice}}</p>
			</li>
			<li>
				<p>余额抵扣</p>
				<p>-¥{{orderObj.myAmount-orderObj.cashCouponPrice>0?orderObj.cashCouponPrice:orderObj.myAmount}}</p>
			</li>
		</ul>
		<button class="payBtn" @click="payBtn()" v-show="orderObj.myAmount-orderObj.cashCouponPrice>=0">
			确认支付
		</button>
		<button style="background: #ccc;" class="payBtn" @click="payBtnDisable()" v-show="orderObj.myAmount-orderObj.cashCouponPrice<0">
			确认支付
		</button>
	</div>
</template>

<script src="./script.js">
</script>

<style src='./style.scss' scoped lang='scss'>
</style>