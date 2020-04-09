/*
 * @Author: YaleXin
 * @Date: 2020-04-07 21:39:29
 * @LastEditTime: 2020-04-09 19:09:40
 * @LastEditors: YaleXin
 * @Description: 
 * @FilePath: \my_html5_workspace\home-page\js\clock.js
 * @祈祷不出现BUG
 */
//时钟更新
function setTime() {
    setInterval("uploadTime()", 1000);
}
function uploadTime() {
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    h = h < 10 ? ("0" + h) : h;
    m = m < 10 ? ("0" + m) : m;
    s = s < 10 ? ("0" + s) : s;
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
}