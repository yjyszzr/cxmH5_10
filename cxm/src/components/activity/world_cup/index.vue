<style lang='scss' scoped src='./style.scss'>

</style>

<template>
    <div class="world_cup">
        <div class="img">
            <img src="./image/img.jpg" alt="玩转世界杯，激情一夏">
        </div>
        <div class="information">
            <ul>
                <li>
                    <v-informal :zxList='findList'></v-informal>
                </li>
                <div class="triple" v-show="trFlag">
                    <mt-spinner type="triple-bounce" color="#999"></mt-spinner>&nbsp;<span>正在加载</span>
                </div>
                <div class="cxLoad" v-show="cxLoadFlag" @click="cxLoadClick()">
                    加载失败,点击重试
                </div>
            </ul>
        </div>
    </div>
</template>
<script src='./script.js'>

</script>