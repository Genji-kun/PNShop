var load = setInterval(loadingNum, 20)
function loadingNum(){
    var main = document.getElementById("main")
    var text = document.getElementById("text")
    var line = document.getElementById("line")
    var a = getComputedStyle(line,":before").getPropertyValue("width")
    var b = getComputedStyle(line).getPropertyValue("width")
    b = parseFloat(b)
    a = parseFloat(a)
    a = Math.floor(((a+20)/b)*100)
    text.innerHTML = a + "%"
    console.log(a)
    if(a == 100)
    {
        clearInterval(load)
        main.classList.add("animate__animated")
        main.classList.add("animate__fadeOut")
    }
}
setTimeout (function(){
    document.getElementById("main").style.display = "none"
},4500)
$(document).ready(function() {
    $("#go-to-top").hide()
    $(".info").hide()
    $(".YMK-info").hide()
    $("#black-space").hide()
    $("#go-to-top").css({"opacity": 1})
    $(".info").css({"opacity": 1})
    $(".YMK-info").css({"opacity": 1})
    $("#black-space").css({"opacity": 0.6})

    $(".showMenu").click(function() {
        $(".hiddenMenu").slideToggle(1000)
    })

    $(window).resize(function() {
        if (window.innerWidth > 1024)
        {
            $(".hiddenMenu").show()
        }
        else
            $(".hiddenMenu").hide()

        if(window.innerWidth <= 770)
            $(".title ul > li:last-child").hide()
        else
            $(".title ul > li:last-child").show()
    })

    $(".item").click(function() {
        $(".info .mainimage").attr("src",$(this).children('a').children('img').attr('src'))
        $(".info h1").text($(this).children('a').children('h2').text()) 
        $(".info h3").text($(this).children('a').children('h3').text())
        $(".info p").text($(this).children('a').children('p').text())
        var images = document.querySelectorAll(".thumb img")
        var number = $(this).children('a').attr("rel")
        for(var i = 0; i < images.length; i++)
        {
            var thutu = i+1
            images[i].src = `images/sp${number}_thumb${thutu}.jpg`
        }
        $(".info").fadeIn(500)
        $("#black-space").fadeIn()
    })
    $(".thumb div img").click(function(){
        $(".thumb div img").css({"border-width": 0})
        $(".info .mainimage").attr("src",$(this).attr("src"))
        $(this).css({"border": "2px solid #937C69"})
    })
    $(".youmayknow").click(function(){
        $(".YMK-info").fadeIn(500)
        $("#black-space").fadeIn()
    })
    $(".exit").click(function() {
        $(".thumb div img").css({"border-width": 0})
        $("#firstthumb").css({"border-width" : 2})
        $(".info").fadeOut(500)
        $(".YMK-info").fadeOut(500)
        $("#black-space").fadeOut()
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 435)
            $("#go-to-top").show("slow")
        else
            $("#go-to-top").hide("slow")
    })
    $("#go-to-top").click(function() {
        $("html, body").animate({
            scrollTop:0
        }, 1000);
    })
    $("#contact").click(function(){
        $("html, body").animate({
            scrollTop: 2500
        },2000);
    })
})