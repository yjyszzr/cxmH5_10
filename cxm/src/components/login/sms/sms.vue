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
                        <mt-field type='tel' placeholder="请输入手机号" v-model="phoneVal"></mt-field>
                        <em><img class="img" src="../../../assets/img/sut.png"></em>
                    </div>

                </a>
                <a href="javascript:void(0);">
                    <div>
                        <img src="../../../assets/img/tes_nor.png">
                        <input v-model="telVal" type="text" class="text1"  placeholder="输入验证码"/>
                        <button :disabled='$store.state.smsCode.disabled' @click="changeNum()">{{$store.state.smsCode.changeText}}</button>
                    </div>
                </a>
            </li>
        </ul>
        <section class="button">
            <a class="determine" @click="_login()">登录</a>
        </section>
        <section class="forget">
            <router-link to='/user/password' class="x_in">密码登录</router-link>

        </section>
        <div class="prompt"></div>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

