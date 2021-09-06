$(document).ready(function() {

    $("#go-to-top").hide()
    $(".info").hide()
    $("#text").hide()
    
    $("#go-to-top").css({"opacity": 1})
    $(".info").css({"opacity": 1})
    $("#text").css({"opacity": 0.6})

    var clickNumber = 0
    $(".showMenu").click(function() {
        clickNumber++
        if (clickNumber % 2 != 0)
            $(".hiddenMenu").slideDown(1000)
        else
            $(".hiddenMenu").slideUp(1000)
    })
    var prevWidth = window.innerWidth
    var infoWidth = 50
    var infoLeft = 25

    if(window.innerWidth <= 780)
    {
        $(".title ul > li:last-child").hide()
        $(".hiddenMore").show()
    }
    $(window).resize(function() {
        if (window.innerWidth > 1024)
        {
            $(".hiddenMenu").show()
        }
        else
            $(".hiddenMenu").hide()

        if(window.innerWidth <= 780)
        {
            $(".title ul > li:last-child").hide()
            $(".hiddenMore").show()
        }
        else
        {
            $(".title ul > li:last-child").show()
            $(".hiddenMore").hide()
        }
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
        $("#text").fadeIn()
    })
    $(".thumb div img").click(function(){
        $(".thumb div img").css({"border-width": 0})
        $(".info .mainimage").attr("src",$(this).attr("src"))
        $(this).css({"border": "2px solid #937C69"})
    })

    $(".exit").click(function() {
        $(".thumb div img").css({"border-width": 0})
        $("#firstthumb").css({"border-width" : 2})
        $(".info").fadeOut(500)
        $("#text").fadeOut()
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