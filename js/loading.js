var load = setInterval(loadingNum, 20)
function loadingNum() {
    var main = document.getElementById("main")
    var text = document.getElementById("text")
    var line = document.getElementById("line")
    var a = getComputedStyle(line, ":before").getPropertyValue("width")
    var b = getComputedStyle(line).getPropertyValue("width")
    b = parseFloat(b)
    a = parseFloat(a)
    a = Math.floor(((a + 20) / b) * 100)
    text.innerHTML = a + "%"
    console.log(a)
    if (a == 100) {
        main.classList.add("animate__animated")
        main.classList.add("animate__fadeOut")
    }
}
setTimeout(function () {
    document.getElementById("main").style.display = "none"
    clearInterval(load)
}, 3500)