$(document).ready(function() {
    $("#go-to-top").hide()
    $(".info").hide()
    $("#text").hide()


    $(".item").click(function() {
        $(".info img").attr("src",$(this).children('a').children('img').attr('src'))
        $(".info h1").text($(this).children('a').children('h2').text()) 
        $(".info h3").text($(this).children('a').children('h3').text())
        $(".info p").text($(this).children('a').children('p').text())
        $(".info").fadeIn(500)
        $("#text").fadeIn()
    })

    $(".exit").click(function() {
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
})