console.log("mainReg加载成功");

/* 配置require模块，AMD规范 */
require.config({
    paths: {
        "jquery": "jquery.min",
        "jquery-cookie": "jquery.cookie",
        "bootstrap": "bootstrap.min",
        "register": "register"
    },
    shim: {
        //设置依赖关系
        "jquery-cookie": ["jquery"]
    }
})

require(["register"], function (xiaomi) {
    xiaomi.register()
})