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
                            <input v-model="cipherpassval" class="text1" type="text" placeholder="请输入原密码" v-show="yeyehide==true"/>
                            <input v-model="cipherpassval" class="text1" type="password" placeholder="请输入原密码" v-show="yeyehide==false"/>
                            <em @click="yeyehide==false?yeyehide = true:yeyehide = false"><i class="iconfont icon-huaban-6" v-show="yeyehide==false"></i><i class="iconfont icon-huaban-5" v-show="yeyehide==true"></i></em>
                        </div>
                    </a>
                    <a>
                        <div>
                            <span class="arrow_kefu float_right"></span>
                            <span class="message">新密码</span>
                            <input v-model="newpassval" class="text1" type="text" placeholder="请输入新密码" v-show="xeyehide==true"/>
                            <input v-model="newpassval" class="text1" type="password" placeholder="请输入新密码" v-show="xeyehide==false"/>
                            <em @click="xeyehide==false?xeyehide = true:xeyehide = false"><i class="iconfont icon-huaban-6" v-show="xeyehide==false"></i><i class="iconfont icon-huaban-5" v-show="xeyehide==true"></i></em>
                        </div>
                    </a>
                    <a>
                        <div>
                            <span class="message">确认密码</span>
                            <input v-model="confirmpassval" class="text1" type="text" placeholder="请再次输入登录密码" v-show="qeyehide==true"/>
                            <input v-model="confirmpassval" class="text1" type="password" placeholder="请再次输入登录密码" v-show="qeyehide==false"/>
                            <em @click="qeyehide==false?qeyehide = true:qeyehide = false"><i class="iconfont icon-huaban-6" v-show="qeyehide==false"></i><i class="iconfont icon-huaban-5" v-show="qeyehide==true"></i></em>
                        </div>
                    </a>
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
