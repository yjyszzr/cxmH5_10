<style lang='scss' src='./style.scss'>

</style>

<template>
    <div class="setup">
        <p>账户安全</p>
        <div class="section">
            <ul class="msg_list">
                <div class="pictureBox">
                    <div class="txtest">我的头像</div>
                    <input v-if="!panel" type="file" id="change" accept="image" @change="change" style="display:none;">  
                    <label for="change">
                        <img class="picture" :src="headerImage" alt="" v-if="headerImage!==''">
                        <!-- <div class="picture" :style="'background:url('+headerImage+')'" v-if="headerImage!==''"></div> -->
                        <img src="../../../assets/img/portrait.png" alt="" v-else>    
                    </label>  
                </div>
                <li>
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
        <!-- 遮罩层 -->  
        <div class="container" v-show="panel">  
        <div>  
            <img id="image" :src="url" alt="Picture">  
        </div>  
    
        <button type="button" id="button" @click="commit">确定</button>  
        <button type="button" id="cancel" @click="cancel">取消</button> 
            
        </div> 
    </div>
</template>

<script src='./script.js'>

</script>
