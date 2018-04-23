<style lang='scss' src='./style.scss'>

</style>
<template>
    <div class="wrap collection">
            <ul>
                <div class="liBox" v-for="(item,i) in scList" :key='i'>
                <li>
                    <div class="scDelete" v-if="deleteFlag" @click="deleteItem(item.articleId)">
                        <i class="iconfont icon-icon-50"></i>
                    </div>
                    <div class="choice">
						<div v-if="item.listStyle==2||item.listStyle==3||item.listStyle==0">
							<h4>{{item.title}}</h4>
						<p v-if="item.listStyle==2||item.listStyle==3">
							<img :src="data" alt="" v-for="(data,index) in item.articleThumb" :key='index'>
						</p>
            <p v-if="item.listStyle==0" class="summary">
              {{item.summary}}
            </p>
						<span>{{item.extendCat}}</span><span>{{item.addTime}}</span><span>阅读{{item.clickNumber}}</span>
						</div>
						<div class="zxBox" v-if="item.listStyle==1||item.listStyle==4">
							<div class="zxLeft">
								<h5>{{item.title}}</h5>
								<div class="zx_info"><span>{{item.extendCat}}</span><span>{{item.addTime}}</span><span>阅读{{item.clickNumber}}</span></div>
							</div>
							<div class="zxRight">
								<img :src="data" alt="" v-for="(data,index) in item.articleThumb" :key='index'>
                <b v-if="item.listStyle==4">播放</b>
							</div>
						</div>
					</div>
                </li>
                </div>
            </ul>
            <div class="triple" v-show="trFlag">
				<mt-spinner type="triple-bounce" color="#999"></mt-spinner>&nbsp;<span>正在加载</span>
			</div>
    </div>
</template>
<script src='./script.js'>
// import http from '../api/http'
</script>