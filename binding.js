// flag是发送验证码的标识，为true才会发送
var flag = false;
// pn指的就是手机号的input
var pn = document.getElementById("phone-number");
// username值学籍号的input
var username = document.getElementById("username");
// parentn值家长的input
var parentn = document.getElementById("parentname");
// console.log(mobile_code);
var sendphone='18839533791,13939489984'
// check()为form表单进行校验，学籍号和手机号没有输入时不可以进行提交的
function check() {
    // username,usernameMsg 为学生学籍号的input的值
    var username = document.getElementById("username");
    var usernameMsg = document.getElementById("usernameMsg");
    // parentn,parentnameMsg 为家长姓名的input的值
    var parentn = document.getElementById("parentname").value;
    var parentnameMsg = document.getElementById("parentnameMsg");
    // pn,pnumberMsg 为手机号的input的值
    var pn = document.getElementById("phone-number").value;
    var pnumberMsg = document.getElementById("pnumberMsg");
    // mobile_code,codeMsg 为验证码的input的值
    var mobile_code = document.getElementById("mobile_code").value.length;
    var codeMsg = document.getElementById("codeMsg");

    // 全局变量，如果isPass为false就不能点击确定，进行绑定学生
    var isPass = true;
    // 复选框，用户协议
    var checkbox=document.getElementById("checkbox").checked;
    // console.log(checkbox);
    // 校验学籍号
    var length = username.value.length;
    if (length != 19) {
        usernameMsg.innerText = "学籍号长度必须是19位";
        isPass = false;
    } else {
        usernameMsg.innerText = "";
    }

    if (!(/^[\u4e00-\u9fa5]{2,4}$/.test(parentn))) {
        parentnameMsg.innerText = "姓名格式错误";
        isPass = false;
    } else {
        pnumberMsg.innerText = "";
    }

    // 校验手机号
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(pn))) {
        pnumberMsg.innerText = "请输入有效手机号";
        isPass = false;
    } else {
        pnumberMsg.innerText = "";
    }

    if (mobile_code != 6) {
        codeMsg.innerText = "验证码错误";
        isPass = false;
    } else {
        codeMsg.innerText = "";
    }
    if (checkbox!=true) {
        alert('请先同意用户协议');
        isPass = false;
    }
    return isPass;
}
// 当学籍号的input失去焦点是会触发该函数，进行学籍号的校验
function checkUserName(uesrname) {
    var usernameMsg = document.getElementById("usernameMsg");
    var length = username.value.length;
    if (length != 19) {
        usernameMsg.innerText = "学籍号长度必须是19位";
    } else {
        usernameMsg.innerText = "";
        
        // $.ajax({
        //     type: "POST",
        //     dataType: "json",
        //     url: "data.php",
        //     data: {
        //         studentn: username.value
        //     },
        //     success: function (msg) {
        //         console.log(msg);
        //     },
        //     error: function (XMLHttpRequest, textStatus, errorThrown) {
        //         console.log(XMLHttpRequest.status);
        //         console.log(XMLHttpRequest.readyState);
        //         console.log(textStatus);
        //     }
        // });
    }
}

// 当学籍号的input失去焦点是会触发该函数，进行学籍号的校验
function isName(parentname) {
    var parentnameMsg = document.getElementById("parentnameMsg");
    var pname = parentn.value;
    console.log(pname);
    if (!(/^[\u4e00-\u9fa5]{2,4}$/.test(pname))) {
        parentnameMsg.innerText = "姓名格式错误";
    } else {
        parentnameMsg.innerText = "";
        // $.ajax({
        //     type: "POST",
        //     dataType: "json",
        //     url: "data.php",
        //     data: {
        //         parentname: parentn.value
        //     },
        //     success: function (msg) {
        //         console.log(msg);
        //     },
        //     error: function (XMLHttpRequest, textStatus, errorThrown) {
        //         console.log(XMLHttpRequest.status);
        //         console.log(XMLHttpRequest.readyState);
        //         console.log(textStatus);
        //     }
        // });
    }
}
// 当手机号的input失去焦点是会触发该函数，进行手机号的校验
function Phonenumber(phones) {
    var pnumberMsg = document.getElementById('pnumberMsg');
    // var length = phones.value.length;
    var phones = phones.value;
    console.log(phones);
    console.log(sendphone);
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(phones))) {
        pnumberMsg.innerText = "请输入有效手机号";
        // return false;
    } else {
        pnumberMsg.innerText = "";
        // $.ajax({
        //     type: "POST",
        //     dataType: "json",
        //     url: "data.php",
        //     data: {
        //         sjh: pn.value
        //     },
        //     success: function (msg) {
        //         console.log(msg);
        //     },
        //     error: function (XMLHttpRequest, textStatus, errorThrown) {
        //         console.log(XMLHttpRequest.status);
        //         console.log(XMLHttpRequest.readyState);
        //         console.log(textStatus);
        //     }
        // });

        flag = true;
    }
}
// 以下是发送验证码的功能
var counts = 60;
var btn = document.getElementById("btn")
var pnlength = document.getElementById("phone-number").value.length;
var usernameMsg = document.getElementById("usernameMsg");
function settime(val) {
    if (flag == true) {
        if (counts == 0) {
            btn.style.backgroundColor = "#3FD1AD"
            val.removeAttribute("disabled");
            val.value = "发送验证码";
            counts = 60;


        // $.ajax({
        //     type: "POST",
        //     dataType: "json",
        //     url: "data.php",
        //     data: {
        //         sjh: pn.value
        //     },
        //     success: function (msg) {
        //         console.log(msg);
        //     },
        //     error: function (XMLHttpRequest, textStatus, errorThrown) {
        //         console.log(XMLHttpRequest.status);
        //         console.log(XMLHttpRequest.readyState);
        //         console.log(textStatus);
        //     }
        // });
            
            return false;
        } else {
            btn.style.backgroundColor = "#E5E5E5"
            val.setAttribute("disabled", true);
            val.value = "重新发送(" + counts + ")";
            counts--;
        }
        setTimeout(function () {
            settime(val);
        }, 1000);
    } else if (pnlength == 0) {
        pnumberMsg.innerText = "请输入手机号";
    }
}