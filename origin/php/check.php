<?php
    header('content-type:text/html;charset="utf-8"');

    //定义一个统一的返回格式
    $responseData = array("code" => 0, "message" => "");

    //将前端传输到后端的数据全部加载在页面上
    $username = $_POST['username'];

    //先给所有获取到的数据做一个简单的表单验证
    if(!$username){
        $responseData['code'] = 1;
        $responseData["message"] = "用户名不能为空";
        //将数据按统一数据返回格式返回
        echo json_encode($responseData);
        exit;
    }

    $link = mysqli_connect("127.0.0.1", "root", "root");

    //判断数据库是否链接成功
    if(!$link){
        $responseData['code'] = 2;
        $responseData["message"] = "服务器忙";
        //将数据按统一数据返回格式返回
        echo json_encode($responseData);
        exit;
    }
    mysqli_set_charset($link, "utf8");

    mysqli_select_db($link, "xiaomi");


    //准备sql验证是否已经被注册
	$sql = "SELECT * FROM userinfo WHERE username='{$username}'";

	$res = mysqli_query($link, $sql);

	$row = mysqli_fetch_assoc($res);

	if(!$row){
        $responseData['code'] = 3;
		$responseData['message'] = "恭喜！用户名可用";
		echo json_encode($responseData);
		exit;
	}else{
		$responseData['code'] = 4;
		$responseData['message'] = "用户名重名";
		echo json_encode($responseData);
		exit;
	}
	mysqli_close($link);
?>