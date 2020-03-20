/*
 * @Description: 
 * @Author: Yale_Xin
 * @Date: 2020-03-20 18:57:13
 * @LastEditTime: 2020-03-20 21:18:06
 * @LastEditors: Yale_Xin
 */
//判断设备类型
try {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        console.log("移动设备");
        if (document.getElementById("app").className == "") {
            document.getElementById("app").className = "phone";
        } else {
            // 如果原来有class
            var arrClassName = document.getElementById("app").className.split("");
            var _index = arrIndexOf(arrClassName, "phone");
            if (_index == -1) {
                // 如果要添加的class在原来的class中不存在
                document.getElementById("app").className += "" + "phone";
            }
            //  如果要添加的class在原来的class中存在
        }
        //div的宽度
        console.log(document.getElementById("app").offsetWidth);
        
    } else {
        console.log("pc设备");
        if (document.getElementById("app").className == "") {
            document.getElementById("app").className = "pc";
        } else {
            // 如果原来有class
            var arrClassName = document.getElementById("app").className.split("");
            var _index = arrIndexOf(arrClassName, "pc");
            if (_index == -1) {
                // 如果要添加的class在原来的class中不存在
                document.getElementById("app").className += "" + "pc";
            }
            //  如果要添加的class在原来的class中存在
        }
    }
} catch (e) { }
