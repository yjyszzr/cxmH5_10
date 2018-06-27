<style lang='scss' scoped src='./style.scss'>

</style>

<template>
    <div class="packetindex">
        <div class="pack_center">
            <img src="../image/img1.png" class="imgTop" @click.prevent>
            <div class="time">
                <v-countDown :endTime="packet.endTime" :callback="callback"></v-countDown>
            </div>
            <!--首页-->
			<div class="carousel">
				<div class="scroll-wrap">
					<!-- <p v-if='show'>温馨提示:理性投注,长跟长红</p> -->
					<ul class="scroll-content" :style="{top}">
						<li v-for="(data,item) in y_Carousel" :key='item' v-html="data.winningMsg+''+data.winningMoney+'元'">
						</li>
					</ul>
				</div>
			</div>
            <div class="box">
                <ul>
                    <li v-for='(item,i) in packet.rechargeCardList' :key='i'>
                        <div>
                            <i v-bind:class="{'img3':item.type == 0,'img5':item.type == 1}"></i>
                            <p><b>￥</b><span>{{item.realValue}}</span>
                                <span>元</span>
                            </p>
                            <p>{{item.description}}</p>
                        </div>
                        <div @click="btn(item.realValue, item.type)" class="btn">火速充值</div>
                    </li>
                </ul>
                <div class="rule">
                    <h5>注意事项</h5>
                    <div>
                        <span>1、</span>
                        <p>本次活动时间为即日起至7月15日23:59:59，活动时间截止则默认本次活动自动结束。具体使用范围以红包券显示为准。请在个人中心“我的卡券”中查看。</p>
                        <span>2、</span>
                        <p>用户参加本次活动充值的金额，仅限用户支付购彩使用，不可提现。</p>
                        <span>3、</span>
                        <p>活动期间，如有玩家通过恶意、重复注册等方式参与本次活动，网站有权冻结其账户并保留追责权利，对已赠送的卡券，网站有权要求用户返还。</p>
                        <span>4、</span>
                        <p>如遇不可抗力因素，网站有权在活动期间更改活动规则，用户应随时关注网站公告。</p>
                        <span>5、</span>
                        <p>如有问题，请拨打客服电话咨询：400-012-6600。</p>
                        <span>6、</span>
                        <p>本活动最终解释权归彩小秘彩票所有。</p>
                    </div>
                </div>
                <div class="heit"></div>
            </div>
        </div>
    </div>
</template>
<script src='./script.js'>

</script>
