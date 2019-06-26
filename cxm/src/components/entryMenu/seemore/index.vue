<template>
    <div class="seemore">
        <ul>
            <li v-for="(item,i) in list" :key='i' @click="goItem(item)">
                <img :src=item.classImg alt="">
                <span>{{item.className}}</span>
            </li>
        </ul>
    </div>
</template>

<script src='./script.js'>

</script>

<style scoped lang='scss' src='./style.scss'>

</style>
