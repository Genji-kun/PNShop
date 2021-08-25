$(document).ready(function() {
    $("#go-to-top").hide()

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
    $("#go-to-top").click(function() {
        $("html, body").animate({
            scrollTop:0
        }, 1000);
    })

})