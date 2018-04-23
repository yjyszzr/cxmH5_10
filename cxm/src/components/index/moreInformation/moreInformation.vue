<style lang='scss' src='./style.scss'>

</style>
<template>
    <div class="wrap moreInformation">
            <ul>
                <li>
                    <v-informal :zxList='moreInforList'></v-informal>
                </li>
            </ul>
            <div class="nullstatus" v-if="moreInforList.length==0">
                    <img src="../../../assets/img/juan.png" alt="">
                    <span>暂无更多资讯</span>
            </div>
            <div class="triple" v-show="trFlag">
				<mt-spinner type="triple-bounce" color="#999"></mt-spinner>&nbsp;<span>正在加载</span>
			</div>
    </div>
</template>
<script src='./script.js'>
    
</script>