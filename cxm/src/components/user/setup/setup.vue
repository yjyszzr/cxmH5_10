<style lang='scss' scoped src='./style.scss'>

</style>

<template>
    <div class="setup">
        <div class="section">
            <ul class="msg_list">
                <li>
                    <a>
                        <div>
                            <router-link to="/user/certification" v-if="userInfo.isReal ==0" class="arrow_kefu float_right">待认证</router-link>
                            <router-link to='/user/setchange' v-if="userInfo.isReal ==1 " class="arrow_kefu float_right">{{userInfo.isReal}}</router-link>
                            <span class="message">头像</span>
                        </div>
                    </a>
                    <a>
                        <div>
                            <span @click="nickname()" v-if="userInfo.isReal ==0" class="arrow_kefu float_right">待认证></span>
                            <span class="message">昵称</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <p>账户安全</p>
        <div class="section">
            <ul class="msg_list">
                <li>
                    <a>
                        <div>
                            <router-link to="/user/certification" v-if="userInfo.isReal ==0" class="arrow_kefu float_right">待认证</router-link>
                            <router-link to='/user/setchange' v-if="userInfo.isReal ==1 " class="arrow_kefu float_right">{{userInfo.isReal}}</router-link>
                            <span class="message">身份认证</span>
                        </div>
                    </a>
                    <a>
                        <div>
                            <span class="arrow_kefu float_right">{{userInfo.mobile}}</span>
                            <span class="message">账户安全</span>
                        </div>
                    </a>
                    <a>
                        <div>

                            <span class="message">登录密码</span>
                            <router-link to="/user/setlogin" v-if="userInfo.hasPass ==0" class="arrow_kefu float_right">请设置密码</router-link>
                            <router-link to='/user/setchange' v-if="userInfo.hasPass ==1 " class="arrow_kefu float_right">修改密码</router-link>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script src='./script.js'>

</script>
