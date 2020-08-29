console.log("main入口模块加载成功")

/* 配置require模块，AMD规范 */
require.config({
    paths:{
        "jquery":"jquery.min",
        "jquery-cookie":"jquery.cookie",
        "bootstrap":"bootstrap.min",
        "parabola":"parabola",
        "nav":"nav",
        "goods":"goods"
    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"],
        //声明当前模块不遵从AMD
        "parabola": {
			exports: "_"
		}
    }
})

require(["nav","goods"],function(nav,goods){
    nav.download();
    nav.banner();
    goods.goods()
    
})



