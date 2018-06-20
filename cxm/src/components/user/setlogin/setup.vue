<style lang='scss' scoped src='./style.scss'>

</style>

<template>
    <div class="setup">
        <div class="section">
            <ul class="msg_list">
                <li>
                    <a>
                        <div>
                            <span class="arrow_kefu float_right"></span>
                            <span class="message">新密码</span>
                            <input class="text1" type="text" placeholder="6-20位数字和字母组成"/>
                        </div>
                    </a>
                    <router-link to='/user/account'>
                        <div>
                            <span class="message">确认密码</span>
                            <input class="text1" type="text" placeholder="请再次输入登录密码"/>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <section class="button" @click="setlogin()">
            <a class="determine">确认设置</a>
        </section>
    </div>
</template>

<script src='./script.js'>

</script>
