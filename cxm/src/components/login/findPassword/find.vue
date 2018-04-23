<style lang='scss' src='./style.scss'>

</style>


<!--密码登录-->
<template>
    <div class="wrap find">
        <ul class="section msg_list">
            <li>
                <a href="javascript:void(0);">
                    <div>
                        <img src="../../../assets/img/pho_nor.png">
                        <mt-field type='tel' placeholder="请输入手机号" v-model="phoneVal"></mt-field>
                    </div>
                </a>
            </li>
        </ul>
        <section class="button" @click='next()'>
            <a class="determine">下一步</a>
        </section>
        <div class="prompt"></div>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

