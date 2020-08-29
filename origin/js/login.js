define(["jquery", "jquery-cookie"], function ($) {

    function login() {
        console.log("log模块加载成功");

        $("#login-button").click(function () {
            $.ajax({
                type: "post",
                url: "../php/login.php",
                data: {
                    username: $("#username").val(),
                    password: $("#password").val(),
                },
                success: function (result) {
                    // 解析拿到的数据
                    var obj = JSON.parse(result);
                    // console.log(obj);
                    if (obj.code == 4) {
                        // console.log(obj.code + "," + obj.message)
                        $("#alert-danger").css({ "display": "block", "color": "red" }).html(' ❗️ 用户名或密码错误');

                    }
                    if (obj.code == 0) {

                        console.log("登录成功");
                        // location.href("../index.html");
                        $("#toast").css("display", "block");
                        $(".toast-body").html("登录成功！马上跳转...");
                        setTimeout(function () {
                            location.assign("../index.html");
                        }, 3000);
                    }
                },

                error: function (msg) {
                    console.log(msg);
                }

            })
        });

        $("#username,#password").focus(function () {
            $("#alert-danger").css({ "display": "none", "color": "red" }).html(' ❗️ 用户名或密码错误');
        });

        $("#clsBtn").click(function () {
            $("#toast").css("display", "none");
        })
    }

    return {
        login: login
    }
})
