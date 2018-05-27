<template>
	<div class="find">
			<v-slider :bannerList='bannerList' style="margin: 0.2rem auto;" v-show="findStatus=='1'"></v-slider>
			<!--资讯-->
			<div class="information">
				<ul>
					<li>
						<v-informal :from='from' :zxList='zxList'></v-informal>
					</li>
					<div class="triple" v-show="trFlag">
						<mt-spinner type="triple-bounce" color="#999"></mt-spinner>&nbsp;<span>正在加载</span>
					</div>
					<div class="cxLoad" v-show="cxLoadFlag" @click="cxLoadClick()">
					加载失败,点击重试
					</div>
				</ul>
			</div>
			<div class="nullstatus" v-if="zxList.length==0">
                    <img src="../../../assets/img/juan.png" alt="">
                    <span>暂无数据</span>
            </div>
	</div>
</template>

<script src="./script.js">

</script>

<style scoped lang="scss" src='./style.scss'>
</style>