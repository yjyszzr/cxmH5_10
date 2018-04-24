<style lang='scss' scoped src='./style.scss'>

</style>


<!--我的-->
<template>
    <div class="wrap">
        <ul class="section msg_list">
            <li>
                <a href="javascript:void(0);">
                    <div>
                        <i class="iconfont icon-icon-9" ref="name"></i>
                        <label>真实姓名：</label>
                        <input @focus="handleCommentFocus" @blur="handleCommentBlur($event)" v-model="userName" type="text" class="text2" placeholder="确认后不可修改"/>
                        <em><img class="img" src="../../../assets/img/sut.png"></em>
                    </div>
                </a>
                <a href="javascript:void(0);">
                    <div>
                        <i class="iconfont icon-icon-8" ref="card"></i>
                        <label>身份证号：</label>
                        <input @focus="handleCommentFocus1" @blur="handleCommentBlur1($event)" v-model="userToken" type="text" class="text2" placeholder="确认后不可修改"/>
                        <em><img class="img" src="../../../assets/img/sut.png"></em>
                    </div>
                </a>
            </li>
        </ul>
        <section class="button">
            <a class="determine" @click='rzBtn()'>认证</a>
        </section>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

