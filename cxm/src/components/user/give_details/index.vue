<style lang='scss' scoped src='./style.scss'>

</style>


<!--消息中心-->
<template>
    <div class="wrap give">
        <div class="box">
            <p class="p1"><i>￥</i>{{giveObj.amount}}</p>
            <p class="chuli">{{giveObj.status}}</p>
        </div>
        <div class="give_cen">
            <b></b>
            <div class="sent">
                <p><i class="iconfont icon-icon-29"></i>申请<br/><span></span></p>
            </div>
            <div class="sent">
                <p><i class="iconfont icon-icon-29"></i>提现审核中<br/><span>14:00:00</span></p>
            </div>
            <div class="sent">
                <p><i class="iconfont icon-icon-29"></i>提现成功<br/><span>14:00:00</span></p>
            </div>
        </div>
        <section class=" wechat">
            <ul class="msg_list">
                <li>
                    <a>
                        <div>
                            <span class="message">提取到</span>
                            <p>{{giveObj.card}}</p>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script src='./script.js'>
    // import http from '../api/http'

</script>

