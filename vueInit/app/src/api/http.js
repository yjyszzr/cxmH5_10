import axios from 'axios'
import HostConfig from '../tools/domin'
import cookie from '../tools/cookie'
const qs = require('qs');
const http = {
    resCode:1000,
    get:function ($url,$data={}) {
        return new Promise((resolve,reject)=>{
            let joins = (this.host($url).indexOf('?'))?'&':'?';
            axios.get(this.host()+joins+this.join(this.data($data))).then(function (response) {
                resolve(response)
            }).catch(function () {
                reject(error)
            });
        })
    },
    post:function ($url,$data={}) {
        return new Promise((resolve,reject)=>{
            axios.post(this.host($url),this.data($data))
                .then(function (response) {
                    resolve(response)
                }).catch(function (error) {
                reject(error)
            });
        });
    },
    data:function ($data) {
        return qs.stringify(Object.assign({
            uid:cookie.get('uid')
        },$data));
    },
    join:function ($obj) {
        let str = '';
        for (var x in $obj){
            str += '&'+x+'='+$obj[x];
        }
        return str.substr(1);
    },
    host: function (name = '', fun = false) {
        let localUrl = window.location.href.match(/^https|http?:\/\/.+?\//);
        let fh = '?';
        let DominHost = HostConfig.domin[localUrl[0]];
        if(fun) return name;
        if(name.indexOf('?') > 0) fh = "&";
        return DominHost +'/Auctions/'+name;
    },
    request:function (name,data) {
        return new Promise((resolve,reject)=>{
            http.post(name,data).then(function (response) {
                if(response.status == 200) {
                    resolve(response.data)
                }
            }).catch(function (error) {
                reject(error);
                layer.msg('接口请求异常')
            });
        })
    }
};
export default http;