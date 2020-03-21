/*
 * @Description: 
 * @Author: Yale_Xin
 * @Date: 2020-03-20 18:57:13
 * @LastEditTime: 2020-03-21 09:25:03
 * @LastEditors: Yale_Xin
 */
//判断设备类型
try {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        console.log("移动设备");
        // console.log(document.getElementById("app").offsetWidth);
        // document.getElementById("app").style.height="100px";
        // console.log(document.getElementById("app").offsetHeight);
        // console.log("width:"+document.getElementById("input_div").offsetWidth);
        
        // document.getElementById("input_div").style.height = document.getElementById("input_div").offsetWidth*0.08.toString()+"px";
        
    } else {
        console.log("pc设备");
        document.getElementById("app").className = "pc";
        
    }
} catch (e) { }
