console.log("加载成功")

/* 配置require模块，AMD规范 */

require.config({
    paths:{
        "jquery":"jquery.min",
        "jquery-cookie":"jquery.cookie",
        "bootstrap":"bootstrap.min",
        "login":"login"
    },
    shim:{
        //设置依赖关系
        "jquery-cookie":["jquery"],
    }
})

require(["login"],function(xiaomi){
    xiaomi.login()
})