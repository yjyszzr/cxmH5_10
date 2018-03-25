let login = {
    path:['find','ringup','grab'],
    code:'7014',
    init:function (res,store) {
        if(!this.path.includes(store.state.gloub.after.name)){
            if(res.rs_code == this.code){
                layer.msg(res.rs_msg,30,function () {
                    location.href = '#/login/enter'
                })
            }
        }
    }
};
export default login;
