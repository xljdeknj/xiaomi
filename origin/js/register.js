define(["jquery", "jquery-cookie"], function ($) {

    function register() {

        console.log("reg模块加载成功");

        $("#username").on({

            blur: function () {

                var oValue = $(this).val();
                var oAlert = $("#alert-danger1");

                //1、用户名长度是否符合要求
                if (oValue == "") {
                    oAlert.css("display", "none");
                } else if (oValue.trim().length < 2 || oValue.trim().length > 15) {
                    oAlert.css({ "display": "block", "color": "red" }).html(' ❗️ 长度应为2~15个字符')
                    //     //判断首字母是否是字母
                } else if (/^[\d]/.test(oValue)) {
                    oAlert.css({ "display": "block", "color": "red" }).html(' ❗️ 必需以英文字母或_开头')

                } else if (/\W/.test(oValue)) {
                    oAlert.css({ "display": "block", "color": "red" }).html(' ❗️ 必需由字母、数字或下划线组成 ')
                } else {
                    $.ajax({
                        type: "post",
                        url: "../php/check.php",
                        data: {
                            username: $("#username").val()
                        },
                        success: function (result) {
                            // 解析拿到的数据
                            var obj = JSON.parse(result);
                            if (obj.code == 4) {
                                oAlert.css({ "display": "block", "color": "red" }).html(' ❗️ 该用户名已存在')
                            }
                            if (obj.code == 3) {
                                oAlert.css({ "display": "block", "color": "red" }).html(' ✅ 恭喜！用户名可用')
                            }
                        },
                        error: function (msg) {
                            console.log(msg);
                        }

                    })
                }
            },

            focus: function () {
                var oAlert = $("#alert-danger1");
                oAlert.css("display", "none");
            }
        });

        $("#password").on({

            blur: function () {

                var oValue = $(this).val();
                var oAlert = $("#alert-danger2");

                //1、用户名长度是否符合要求
                if ($(this).val() == "") {
                    oAlert.css("display", "none")
                } else if (oValue.trim().length < 2 || oValue.trim().length > 15) {
                    oAlert.css({ "display": "block", "color": "red" }).html(' ❗️ 密码长度应为2~15个字符')

                    //     //判断首字母是否是字母
                } else if (/\W/.test(oValue)) {
                    oAlert.css({ "display": "block", "color": "red" }).html(' ❗️ 密码必需由字母、数字或下划线组成 ')
                }
                else {
                    oAlert.css({ "display": "block", "color": "red" }).html(' ✅ 密码可用')
                }
            },

            focus: function () {
                var oAlert = $("#alert-danger2");
                oAlert.css("display", "none");
            }
        });


        $("#repassword").on({

            blur: function () {
                var oAlert = $("#alert-danger3");

                if ($(this).val() == "") {
                    oAlert.css("display", "none")
                } else if ($(this).val() == $("#password").val() && $(this).val()) {
                    oAlert.css({ "display": "block", "color": "red" }).html(' ✅ 密码一致')
                } else {
                    oAlert.css({ "display": "block", "color": "red" }).html(' ❗️ 请确认密码一致')
                }
            },

            focus: function () {
                var oAlert = $("#alert-danger3");
                oAlert.css("display", "none");
            }
        });


        $("#register-button").click(function () {
            $.ajax({
                type: "post",
                url: "../php/register.php",
                data: {
                    username: $("#username").val(),
                    password: $("#password").val(),
                    repassword: $("#repassword").val(),
                    createTime: (new Date()).getTime()
                },
                success: function (result) {
                    // 解析拿到的数据
                    var obj = JSON.parse(result);
                    if (obj.code) {
                        // console.log(obj.code + "," + obj.message)
                    } else {

                        // console.log("注册成功")
                        
                        $("#toast").css("display", "block");
                        $(".toast-body").html("注册成功！3秒后跳转 ...");     
                        setTimeout(function(){
                            location.assign("login.html");
                        }, 3000);
                    }
                },
                error: function (msg) {
                    console.log(msg);
                }

            })
        })

        $("#clsBtn").click(function(){
            $("#toast").css("display","none");
        })
    

    };


    return {
        register: register
    }

})
