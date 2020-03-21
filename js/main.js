/*
 * @Description: 
 * @Author: Yale_Xin
 * @Date: 2020-03-20 13:14:06
 * @LastEditTime: 2020-03-21 14:53:29
 * @LastEditors: Yale_Xin
 */
// vue的逻辑代码
var app = new Vue({
    el: "#app",
    data: {
        input: "",
        isPhone: false,
        list_engine: [
            "https://cn.bing.com/search?q=",
            "https://www.baidu.com/s?wd=",
            "https://www.google.com/search?q=",
            "https://www.sogou.com/web?query=",
            "https://www.so.com/s?q=",
        ],
        s_engine: ["必应", "百度", "谷歌", "搜狗", "360"],
        engine_url: "",
    },
    methods: {
        //按下回车键
        enter: function () {
            if (this.engine_url == "") {
                this.engine_url = this.list_engine[0];
            }
            window.location.href = this.engine_url + this.input;
            console.log(this.input);
        },
        // 获得焦点
        focus: function () {
            console.log("获得");

        },
        // 失去焦点
        blur: function () {
            console.log("失去");
            document.getElementById("input").style.animationName = "input_width2short";
            document.getElementById("input").style.animationDuration = "500ms";
        },
        change: function () {
            var sl_index = document.getElementById("plan").selectedIndex;
            console.log("change:" + sl_index);
            this.engine_url = this.list_engine[sl_index];
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

