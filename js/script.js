$(document).ready(function() {
    $(".info").hide()
    $(".info").css({"opacity": 1})
    setTimeout (function(){
        $(".website").css( "display","block")
    },3000)
    $(".website").addClass("animate__fadeIn  animate__animated")
    setTimeout (function(){
        $(".website").removeClass("animate__fadeIn  animate__animated")
    },4000)
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
        $(".informationText").html($(this).children("a").children(".hiddenInformation").html())
        $(".exampleImg img").attr("src",$(this).children("a").children("img").attr("src"))
        $(".YMK-info h1").text($(this).children("a").children(".document").children("h2").text())
        $(".exampleImg p").text($(this).children("a").children("p").text())
        $(".YMK-info").fadeIn(500)
        $("#black-space").fadeIn()
    })
    $(".exit").click(function() {
        $(this).parent().parent().fadeOut(500)
        $("#black-space").fadeOut()
    })
    $(".off").click(function() {
        $(".thumb div img").css({"border-width": 0})
        $("#firstthumb").css({"border-width" : 2})
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
            scrollTop: 15000
        }, 500);
    })
})
