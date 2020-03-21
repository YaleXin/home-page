/*
 * @Description: 
 * @Author: Yale_Xin
 * @Date: 2020-03-20 13:14:06
 * @LastEditTime: 2020-03-21 15:39:45
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
        },
        // 获得焦点
        focus: function () {
            // 触发 input_width2long 动画
            document.getElementById("input").style.animationName = "input_width2long";
            document.getElementById("input").style.animationDuration = "500ms";
            setTimeout(function () {
                //700ms后取消动画 否则 input_width2long 动画只生效一次
                document.getElementById("input").style.animation = "none";
            }, 700);
            // 获得焦点后宽度变大
            document.getElementById("input").style.width = "249px";

        },
        // 失去焦点
        blur: function () {
            // 触发 input_width2short 动画
            document.getElementById("input").style.animationName = "input_width2short";
            document.getElementById("input").style.animationDuration = "500ms";
            setTimeout(function () {
                //700ms后取消动画 否则 input_width2short 动画只生效一次
                document.getElementById("input").style.animation = "none";
            }, 700);
            // 失去焦点后宽度变小
            document.getElementById("input").style.width = "100px";
        },
        change: function () {
            // document.getElementById("input").placeholder = "11111";
            var sl_index = document.getElementById("engine_select").selectedIndex;
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

