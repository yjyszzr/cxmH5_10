import BMap from 'BMap';
//获取城市
export let getCurrentCityName = () => {
    return new Promise(function (resolve, reject) {
        let myCity = new BMap.LocalCity()
        myCity.get(function (result) {
            resolve(result.name)
        })
    })
}
//获取经纬度
export let getCurrentCityPosition =() =>{
    return new Promise(function (resolve, reject) {
        let obj = {}
        let geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                //用户决绝地理位置授权
                if(r.accuracy==null){
                    reject('failed:获取位置信息失败,请开启浏览器定位功能');
                }else{
                    obj.lng = r.point.lng
                    obj.lat = r.point.lat
                    obj.city = r.address.city
                    resolve(obj)
                }
            } else {
                reject('failed' + this.getStatus());
            }
        }, {
            enableHighAccuracy: true
        })
    })
}