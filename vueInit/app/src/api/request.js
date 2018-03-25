import http from './http'
export const getOrderList = {
    getOrderList:function () {
        http.post('getOrderList').then((res)=>{
            fn && fn(res.data)
        }).catch((error)=>{
            layer.msg('接口出错了');
            console.log(this.gloub);
        });
    },
    getOrderInfo:function (fn) {
        http.post('getOrderInfo').then((res)=>{
            fn && fn(res.data)
        }).catch((error)=>{
            layer.msg('接口出错了');
        });
    }
};
export const Top = {
    a:function () {

    }
};
export const SAD = {
    a:function () {

    }
};
