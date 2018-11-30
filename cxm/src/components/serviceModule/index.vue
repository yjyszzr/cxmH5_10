<template>
    <div class="service-md">
        <ul>
            <li>
                <router-link to='/servicemd/kaijiang'>
                    <p class="kj-left">
                        <img src="./img/kaijiang@2x.png" alt="">
                        <span>开奖大厅</span>
                    </p>
                    <p class="arrow_right float_right"></p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'service'
}
</script>
<style scoped lang='scss'>
    @import '../../assets/css/function.scss';
    .service-md{
        ul{
            background: white;
            li{
                height: px2rem(120px);
                a{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-right: px2rem(30px);
                    height: 100%;
                }
                .kj-left{
                    display: flex;
                    align-items: center;
                    span{
                        font-size: px2rem(30px);
                        color: #505050;
                    }
                }
                img{
                    width: px2rem(42px);
                    margin: 0 px2rem(35px) 0 px2rem(44px);
                }
            }
        }
    }
</style>
