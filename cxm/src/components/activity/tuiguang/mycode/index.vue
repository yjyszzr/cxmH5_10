<style lang='scss' scoped src='./style.scss'>
</style>

<template>
    <div class="mycode">
        <p>“每一天”助力2018世界杯110元彩金等您来领</p>
        <canvas id="qrcode"></canvas>
        <div class="btn">
            <button>立即邀请好友</button>
            <button @click="Download()">保存二维码到手机相册</button>
        </div>

    </div>
</template>
<script src='./script.js'>

</script>

<!--<template>-->
    <!--<div>-->
        <!--&lt;!&ndash;创建一个cavas  用来存放图片&ndash;&gt;-->
        <!--<canvas  id="cavasimg" width="607" height="367"  ></canvas>-->

        <!--&lt;!&ndash;        声明一个按钮  用来触发下载图片到本地&ndash;&gt;-->
        <!--<input type="button" id="btnsavaImg" value="保存图片到本地" @click="Download()"/>-->
    <!--</div>-->

<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->

            <!--}-->
        <!--},-->
        <!--methods:{-->

        <!--mounted () {-->
            <!--// $loading.hide()-->

            <!--//canvas 绘制图片    支持手机端-->
<!--//            var canvas = document.getElementById('cavasimg');-->
<!--//            var ctx = canvas.getContext('2d');-->

<!--//            ctx.fillRect(0, 0, canvas.width, canvas.height);-->
<!--//            ctx.fillStyle = "red";-->
<!--//            ctx.font = 'italic bold 30px Helvetica ';-->
<!--//            ctx.fillText('楷体', 50, 50);-->
            <!--// canvas 插入图片   手机端点击没反应-->
            <!--//获取canvas元素-->
            <!--var cvs = document.getElementById("cavasimg");-->
            <!--//创建image对象-->
            <!--var imgObj = new Image();-->
            <!--imgObj.src = "http://10.20.11.202:7099/file/readImage?basePath=/sys/201803/8c7d8835de18452695fad2f328c0680efile.jpg";-->
            <!--imgObj.setAttribute("crossOrigin",'Anonymous')-->
            <!--//待图片加载完后，将其显示在canvas上-->
            <!--imgObj.onload = function(){-->
                <!--var ctx = cvs.getContext('2d');-->
                <!--ctx.drawImage(this, 0, 0);//this即是imgObj,保持图片的原始大小：470*480-->
                <!--//ctx.drawImage(this, 0, 0,1024,768);//改变图片的大小到1024*768-->
            <!--}-->

        <!--}-->
    <!--}-->
    <!--</script>-->