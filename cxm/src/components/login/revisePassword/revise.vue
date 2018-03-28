<style lang='scss' scoped src='./style.scss'>

</style>


<!--密码登录-->
<template>
    <div class="wrap">
        <ul class="section msg_list">
            <li>
                <a href="javascript:void(0);">
                    <div>
                        <img src="../../../assets/img/pho_nor.png">
                        <input v-model="passwordVal" type="password" class="text" placeholder="请输入您的新密码6-20个字符"/>
                        <em><img class="img" src="../../../assets/img/sut.png"></em>
                    </div>

                </a>
                <a href="javascript:void(0);">
                    <div>
                        <img src="../../../assets/img/tes_nor.png">
                        <input v-model="telVal"  type="tel" class="text1" placeholder="输入验证码"/>
                        <button :disabled='$store.state.smsCode.disabled' @click="changeNum()">{{$store.state.smsCode.changeText}}</button>
                    </div>
                </a>
            </li>
        </ul>
        <section class="button"  @click="findNext()">
            <a class="determine">下一步</a>
        </section>
        <div class="prompt"></div>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

