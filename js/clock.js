//时钟更新
function setTime() {
    w1 = window.screen.height;
        document.getElementById("mainBody").style.height = w1;
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