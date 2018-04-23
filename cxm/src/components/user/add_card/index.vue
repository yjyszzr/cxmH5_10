<style lang='scss' scoped src='./style.scss'>

</style>

<!--关于我们-->
<template>
    <div class="wrap" >
        <ul class="section msg_list">
            <li>
                <a href="javascript:void(0);">
                    <div style="display:flex;align-item:center;">
                        <label>姓名：</label>
                        <input disabled type="text" class="text1" :value="this.$store.state.userInfo.realName"/>
                    </div>
                </a>
                <a href="javascript:void(0);">
                    <div>
                        <input type="number" v-model="blankNum" class="text" placeholder="请输入银行卡号"/>
                    </div>
                </a>
            </li>
        </ul>
        <p class="make">注：该卡号为默认收款</p>
        <section class="button" @click="add_card()">
            <a class="determine">添加</a>
        </section>
        <section class="plain">
            <p>温馨提示 </p>
            <p>1.建议使用：中国银行 工商银行 招商银行 建设银行卡， 提现更快捷； </p>
            <p>2.请务必确保银行卡开户名与实名认证的姓名一致；</p>
            <p>3.请使用储蓄卡作为收款银行卡；</p>
            <p>4.添加银行卡可能会有信息延迟，请耐心等待，如添加未成功请再次添加;</p>
        </section>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>
