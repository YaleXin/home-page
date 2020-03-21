/*
 * @Description: 
 * @Author: Yale_Xin
 * @Date: 2020-03-20 13:14:06
 * @LastEditTime: 2020-03-21 11:38:50
 * @LastEditors: Yale_Xin
 */
// vue的逻辑代码
var app = new Vue({
    el: "#app",
    data: {
        input: "",
        isPhone: false,
        select: false,
        s_engine: ["必应", "百度", "谷歌", "搜狗", "雅虎", "360", "SOSO", "有道"],
    },
    methods: {
        //按下回车键
        enter: function () {
            window.location.href = "https://cn.bing.com/search?q=" + this.input;
            console.log(this.input);
        },
        // 获得焦点
        focus: function () {
            console.log("获得");

        },
        // 失去焦点
        blur: function () {
            console.log("失去");

        },
        change: function () {
            console.log("change");
        },
    }
});


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

