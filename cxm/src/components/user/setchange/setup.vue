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
                            <span class="message">原密码</span>
                            <input class="text1" type="text" placeholder="请输入原密码"/>
                        </div>
                    </a>
                    <a>
                        <div>
                            <span class="arrow_kefu float_right"></span>
                            <span class="message">新密码</span>
                            <input class="text1" type="text" placeholder="请输入新密码"/>
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
        <section class="button" @click="setchange()">
            <a class="determine">确认修改</a>
        </section>
    </div>
</template>

<script src='./script.js'>

</script>
