/*
 * @Description: 
 * @Author: Yale_Xin
 * @Date: 2020-03-20 18:57:13
 * @LastEditTime: 2020-03-21 15:29:47
 * @LastEditors: Yale_Xin
 */
//判断设备类型
try {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // console.log("移动设备");
    } else {
        // console.log("pc设备");
        document.getElementById("app").className = "pc";        
    }
} catch (e) { }
