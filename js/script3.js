$(document).ready(function() {
    $("#go-to-top").hide()
    
    function squareDiv(){
        $(".photo").height($(".photo").width())
    }
    function positionImg(){
        var img = $(".photo img")
        var w = $(".photo").width()
        var h = $(".photo").height()
        for(var i = 0; i < img.length; i++)
        {
            if (img[i].width > img[i].height)
            {
                img[i].height = h
                var overflow = (img[i].width - w)/2
                $(img[i]).css({
                    "margin-left": -overflow
                })
            }
            else if (img[i].width < img[i].height) 
            {
                img[i].width = w
                var overflow = (img[i].height - h)/2
                $(img[i]).css({
                    "margin-top": -overflow
                })
            }
            else
            {
                img[i].width = w
                img[i].height = h
            }
        }
    }
    squareDiv()
    positionImg()
    
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
