<template>
	<div class="payConfirm">
		<ul class="payList">
			<li>
				<p>订单金额</p>
				<p>¥30.00</p>
			</li>
			<li>
				<p>余额抵扣</p>
				<p>-¥3.00</p>
			</li>
		</ul>
		<button class="payBtn" @click="payBtn()">
			确认支付
		</button>
	</div>
</template>

<script src="./script.js">
</script>

<style src='./style.scss' scoped lang='scss'>
</style>