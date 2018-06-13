<style lang='scss' scoped src='./style.scss'>

</style>
<template>
    <div class="world">
        <div  class="page page-current" id='router'>
            <div class="activity_sm" onClick="activity_smClick()">活动说明</div>
            <img onclick="return false" src="../image/img.png"  class="bg"/>
            <input class="telVal" type="tel" value="" placeholder="请输入手机号" />
            <div class="code">
                <input class="codeVal" type="tel" value="" placeholder="请输入验证码" />
                <button class="codebtn">获取验证码</button>
            </div>
            <button class="btn" onclick="register()">领取100元彩金</button>
            <button class="lqbtn" onclick="lqbtn()">立即领取</button>
        </div>
    </div>
</template>