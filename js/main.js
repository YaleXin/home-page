/*
 * @Description: 
 * @Author: Yale_Xin
 * @Date: 2020-03-20 13:14:06
 * @LastEditTime: 2020-03-21 15:56:32
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
        place_engine: ["微软Bing搜索-国内版", "百度一下，你就知道",
            "Google", "搜狗搜索引擎，上网从搜狗开始", "360搜索，SO靠谱"],
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
                //5500ms后取消动画 否则 input_width2long 动画只生效一次
                document.getElementById("input").style.animation = "none";
            }, 550);
            // 获得焦点后宽度变大
            document.getElementById("input").style.width = "249px";

        },
        // 失去焦点
        blur: function () {
            // 触发 input_width2short 动画
            document.getElementById("input").style.animationName = "input_width2short";
            document.getElementById("input").style.animationDuration = "500ms";
            setTimeout(function () {
                //550ms后取消动画 否则 input_width2short 动画只生效一次
                document.getElementById("input").style.animation = "none";
            }, 550);
            // 失去焦点后宽度变小
            document.getElementById("input").style.width = "100px";
        },
        change: function () {

            var sl_index = document.getElementById("engine_select").selectedIndex;
            document.getElementById("input").placeholder = this.place_engine[sl_index];
            this.engine_url = this.list_engine[sl_index];
        },
    }
});

