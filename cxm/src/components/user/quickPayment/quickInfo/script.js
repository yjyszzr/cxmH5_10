import {MessageBox} from 'mint-ui';
export default {
    name: 'quickInfo',
    data(){
        return {
            blankNum: '',
            blankFlag: false,
            xyInputFlag: false
        }
    },
    methods:{
        bankCard(){
            this .blankNum = this.blankNum.replace(/\s/g, '').replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
        },
        khxq(){
            MessageBox.alert('', {
                message: '为了您的账户资金安全,只能绑定持卡人本人的银行卡。',
                title: '持卡人说明',
                confirmButtonText: '知道了',
                closeOnClickModal: false
            }).then(action => {
                
            });
        },
        ccv(){
            MessageBox.alert('', {
                message: 'CVV是打印在信用卡背面的末尾三位独立展示的数字。',
                title: 'CVV说明',
                confirmButtonText: '知道了',
                closeOnClickModal: false
            }).then(action => {
                
            });
        },
        yxqxq(){
            MessageBox.alert('', {
                message: '有效期是打印在信用卡正面卡号上方,标注格式为月份在前,年份在后的四位数。',
                title: '有效期说明',
                confirmButtonText: '知道了',
                closeOnClickModal: false
            }).then(action => {
                
            });
        },
    }
}