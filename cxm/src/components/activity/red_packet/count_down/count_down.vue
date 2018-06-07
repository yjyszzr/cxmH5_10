<template>
    <span :callback="callback" :endText="endText" v-html="content" class="czhd">

    </span>
</template>
<script>
    export default {
        name: "countDown",
        data(){
            return {
                content: '',
            }
        },
        watch:{
            endTime(times){
                this.countdowm(times);
            }
        },
        props:{
            endTime:{
                type: String,
                default :''
            },
            endText:{
                type : String,
                default:'活动已结束，敬请期待下次活动'
            },
            callback : {
                type : Function,
                default :''
            },
        },
        mounted () {
            this.$nextTick(()=>{
            })
        },
        methods: {
            countdowm(timestamp){
                let self = this;
                let timer = setInterval(function(){
                    let nowTime = new Date();
                    let endTime = new Date(timestamp * 1000);
                    let t = endTime.getTime() - nowTime.getTime();
                    if(t>0){
                        let day = Math.floor(t/86400000);
                        let hour=Math.floor((t/3600000)%24);
                        let min=Math.floor((t/60000)%60);
                        let sec=Math.floor((t/1000)%60);
                        hour = hour < 10 ? "0" + hour : hour;
                        min = min < 10 ? "0" + min : min;
                        sec = sec < 10 ? "0" + sec : sec;
                        let format = '';
                        if(day > 0){
                            format =  `距离活动结束还有<b style='background:#fff076;padding:0 0.05rem;'>${day}</b>天<b style='background:#fff076;padding:0 0.05rem;'>${hour}</b>小时<b style='background:#fff076;padding:0 0.05rem;'>${min}</b>分<b style='background:#fff076;padding:0 0.05rem;'>${sec}</b>秒`;
                        }
                        if(day <= 0 && hour > 0 ){
                            format = `${hour}小时${min}分${sec}秒`;
                        }
                        if(day <= 0 && hour <= 0){
                            format =`${min}分${sec}秒`;
                        }
                        self.content = format;
                    }else{
                        clearInterval(timer);
                        self.content = self.endText;
                        self._callback();
                    }
                },1000);
            },
            _callback(){
                if(this.callback && this.callback instanceof Function){
                    this.callback(...this);
                }
            }
        }
    }
</script>
