<style lang='scss' src='./style.scss'>

</style>
<template>
    <div class="wrap consult">
        <div class="article">
            <h4>{{consultObj.title}}</h4>
            <div class="zxDetailTitle">
                <span>{{consultObj.extendCat}}</span>
                <span>{{consultObj.addTime}}</span>
            </div>
            <div v-html="consultObj.content"></div>
            <div class="keywords">
                <p v-for="(item,i) in consultObj.labelsArr" :key='i'>{{item}}</p>
            </div>
        </div>
        <div class="xgNews">
            <h3>相关文章</h3>
            <ul>
                <li>
					<v-informal :zxList='consultObj.articles'></v-informal>
				</li>
            </ul>
        </div>
        <button class="ckBtn" @click="ckBtn()">查看更多</button>
    </div>
</template>
<script src='./script.js'>
    
</script>