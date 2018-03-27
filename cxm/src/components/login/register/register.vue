<style lang='scss' scoped src='./style.scss'>

</style>


<!--密码登录-->
<template>
    <div class="wrap">

    <ul class="msg_list">
        <li>
            <a href="javascript:void(0);">
                <div>
                    <img src="../../../assets/img/pho_nor.png">
                    <input v-model="phoneVal" type="tel" placeholder="请输入手机号" class="text"/>
                    <em><img class="img" src="../../../assets/img/sut.png"></em>
                </div>

            </a>
            <a href="javascript:void(0);">
                <div>
                    <img src="../../../assets/img/sec_nor.png">
                    <input v-model="passwordVal" placeholder="请输入密码" type="password" class="text"/>
                    <em><img src="../../../assets/img/hid.png"></em>
                </div>
            </a>
            <a href="javascript:void(0);">
                <div>
                    <img src="../../../assets/img/tes_nor.png">
                    <input v-model="telVal" type="tel" placeholder="请输入验证码" class="text1"/>
                    <button :disabled='$store.state.smsCode.disabled' @click="changeNum()">{{$store.state.smsCode.changeText}}</button>
                </div>
            </a>
        </li>
    </ul>
    <section class="button" @click="reg">
        <a class="determine">注册</a>
    </section>
    <p class="ment">注册表明您已同意<span>《彩小秘彩票服务协议》</span></p>
    <div class="prompt">请您输入合法的手机号</div>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

