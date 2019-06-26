<template>
    <div class="ketang">
        <div class="ketang-list">
            <div class="ketang-jxz">
                <div class="ketang-item" v-for="(item,i) in noviceClassroomList" :key='i'>
                    <a :href="item.bannerLink">
                        <img :src="item.bannerImage" :alt=item.bannerName>
                        <span>
                            <b>{{item.bannerName}}</b>
                            <b>查看详情</b>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style src='./style.scss' lang='scss' scoped>

</style>
<script src='./script.js'>

</script>

