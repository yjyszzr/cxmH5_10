<style lang='scss' scoped src='./style.scss'>

</style>


<!--密码登录-->
<template>
    <div class="wrap">
        <div class="header">
            <a href="javascript:history.go(-1);" class="go_return">返回</a>
            <p>彩小秘·找回密码</p>
        </div>
        <ul class="section msg_list">
            <li>
                <a href="javascript:void(0);">
                    <div>
                        <img src="../../../assets/img/pho_nor.png">
                        <input type="text" class="text" placeholder="请输入手机号"/>
                        <em><img class="img" src="../../../assets/img/sut.png"></em>
                    </div>
                </a>
            </li>
        </ul>
        <section class="button">
            <a class="determine">下一步</a>
        </section>
        <div class="prompt"></div>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

