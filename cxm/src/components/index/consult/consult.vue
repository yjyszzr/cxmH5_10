<style lang='scss' src='./style.scss'>

</style>
<template>
    <div class="wrap consult">
        <div class="article" v-if="$store.state.zxDetailObj!=''">
            <h4>{{$store.state.zxDetailObj.title}}</h4>
            <div class="zxDetailTitle">
                <span>{{$store.state.zxDetailObj.extendCat}}</span>
                <span>{{$store.state.zxDetailObj.addTime}}</span>
            </div>
            <div v-html="$store.state.zxDetailObj.content"></div>
            <div class="keywords">
                <p v-for="(item,i) in $store.state.zxDetailObj.labelsArr" :key='i'>{{item}}</p>
            </div>
        </div>
        <div class="xgNews">
            <h3>相关文章</h3>
            <ul>
                <li>
					<v-informal :zxList='$store.state.zxDetailObj.articles'></v-informal>
				</li>
            </ul>
        </div>
        <button class="ckBtn" @click="ckBtn()">查看更多</button>
    </div>
</template>
<script src='./script.js'>
    
</script>