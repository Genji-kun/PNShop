$(document).ready(function() {
    $("#go-to-top").hide()
    $(".YMK-info").hide()
    $("#black-space").hide()
    $(".YMK-info").css({"opacity": 1})
    $("#black-space").css({"opacity": 0.6})
    $(window).scroll(function() {
        if($(this).scrollTop() > 10) {
            $(".cover").css({
                "position": "fixed",
                "top": 0,
            })
        } else{
            $(".cover").css({
                "position": "fixed",
                "top": 0,
            })
        }
        if ($(this).scrollTop() >= 435)
            $("#go-to-top").show("slow")
        else
            $("#go-to-top").hide("slow")
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
    $("#go-to-top").click(function() {
        $("html, body").animate({
            scrollTop:0
        }, 1000);
    })
})
