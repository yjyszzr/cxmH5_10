<style lang='scss' scoped src='./style.scss'>

</style>


<!--密码登录-->
<template>
    <div class="wrap">
        <div class="header">
            <a href="javascript:history.go(-1);" class="go_return">返回</a>
            <p>彩小秘·修改密码</p>
        </div>
        <ul class="section msg_list">
            <li>
                <a href="javascript:void(0);">
                    <div>
                        <img src="../../../assets/img/pho_nor.png">
                        <input type="password" class="text" placeholder="请输入您的新密码6-20个字符"/>
                        <em><img class="img" src="../../../assets/img/sut.png"></em>
                    </div>

                </a>
                <a href="javascript:void(0);">
                    <div>
                        <img src="../../../assets/img/tes_nor.png">
                        <input type="text" class="text1" placeholder="输入验证码"/>
                        <a>获取短信验证码</a>
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

