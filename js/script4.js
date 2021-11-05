$(document).ready(function() {
    $("#go-to-top").hide()
    $(".YMK-info").hide()
    $("#black-space").hide()
    $(".YMK-info").css({"opacity": 1})
    $("#black-space").css({"opacity": 0.6})
    setTimeout (function(){
        $(".website").css( "display","block")
    },3000)
    $(".website").addClass("animate__fadeIn  animate__animated")
    setTimeout (function(){
        $(".website").removeClass("animate__fadeIn  animate__animated")
    },4000)
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
        $(".like").removeClass("rateLike animate__slideInLeft animate__animated")
        $(".dislike").removeClass("rateDislike animate__slideInRight animate__animated")
        $(".like").removeClass("animate__fadeOutLeft animate__animated")
        $(".dislike").removeClass("animate__fadeOutRight animate__animated")
        if(likeNum[$(this).children("a").attr("rel")] == true)
        {
            $(".like").addClass("rateLike")
            $(".like").show()
            $(".dislike").hide()
            $(".like").children("a").text("Cảm ơn đánh giá của bạn!!")
        }
        else if(dislikeNum[$(this).children("a").attr("rel")] == true)
        {
            $(".dislike").addClass("rateDislike")
            $(".dislike").show()
            $(".like").hide()
            $(".dislike").children("a").text("Cảm ơn đánh giá của bạn!!")
        }
        else
        {
            $(".dislike").removeClass("rateDislike")
            $(".like").show()
            $(".dislike").children("a").text("Không hữu ích ")
            $(".dislike").children("a").append(`<i class="far fa-thumbs-down"></i>`)
            $(".like").removeClass("rateLike")
            $(".dislike").show()
            $(".like").children("a").text("Hữu ích ")
            $(".like").children("a").append(`<i class="far fa-thumbs-up"></i>`)
        }
    })
    var likeNum = []
    for (var i = 0; i < $(".youmayknow").length; i++)
    {
        likeNum.push(false)
    }
    var dislikeNum = []
    for (var i = 0; i < $(".youmayknow").length; i++)
    {
        dislikeNum.push(false)
    }
    $(".like").click(function(){
        var docImg = $(".YMK-detail img").attr("src")
        var ymkImg = $(".youmayknow img")
        for(var i = 0; i < $(".youmayknow img").length; i++)
        {
            if(docImg == $(ymkImg[i]).attr("src"))
            { 
                if(likeNum[i] == false)
                {
                    likeNum[i] = true
                    $(".dislike").addClass("animate__fadeOutRight animate__animated")
                    $(".like").addClass("rateLike animate__slideInLeft animate__animated")
                    $(".dislike").fadeOut(200)
                    $(".like a").text("Cảm ơn đánh giá của bạn!!")
                }
                else
                {   
                    likeNum[i] = false
                    $(".like").removeClass("rateLike animate__slideInLeft animate__animated")
                    $(".dislike").addClass("animate__fadeInLeft animate__animated")
                    $(".dislike").show()
                    $(".dislike").removeClass("animate__fadeOutRight animate__animated")
                    $(".like a").text("Hữu ích")
                    $(".like a").append(`<i class="far fa-thumbs-up"></i>`)
                    $(".dislike").removeClass("rateDislike animate__slideInRight animate__animated")
                    $(".like").addClass("animate__fadeInRight animate__animated")
                    $(".like").show()
                    $(".like").removeClass("animate__fadeOutLeft animate__animated")
                    $(".dislike a").text("Không hữu ích")
                    $(".dislike a").append(`<i class="far fa-thumbs-down"></i>`)
                }
                break
            }
        }
    })
    $(".dislike").click(function(){
        var docImg = $(".YMK-detail img").attr("src")
        var ymkImg = $(".youmayknow img")
        for(var i = 0; i < $(".youmayknow img").length; i++)
        {
            if(docImg == $(ymkImg[i]).attr("src"))
            { 
                if(dislikeNum[i] == false)
                {
                    dislikeNum[i] = true
                    $(".like").addClass("animate__fadeOutLeft animate__animated")
                    $(".dislike").addClass("rateDislike animate__slideInRight animate__animated")
                    $(".like").fadeOut(200)
                    $(".dislike a").text("Cảm ơn đánh giá của bạn!!")
                }
                else
                {   
                    dislikeNum[i] = false
                    $(".dislike").removeClass("rateDislike animate__slideInRight animate__animated")
                    $(".like").addClass("animate__fadeInRight animate__animated")
                    $(".like").show()
                    $(".like").removeClass("animate__fadeOutLeft animate__animated")
                    $(".dislike a").text("Không hữu ích")
                    $(".dislike a").append(`<i class="far fa-thumbs-down"></i>`)
                    $(".like").removeClass("rateLike animate__slideInLeft animate__animated")
                    $(".dislike").addClass("animate__fadeInLeft animate__animated")
                    $(".dislike").show()
                    $(".dislike").removeClass("animate__fadeOutRight animate__animated")
                    $(".like a").text("Hữu ích")
                    $(".like a").append(`<i class="far fa-thumbs-up"></i>`)
                }
                break
            }
        }
    })
    $(".showComment").click(function(){
        $(".comments").toggle()
    })
    $(".exit").click(function() {
        $(this).parent().parent().fadeOut(500)
        $("#black-space").fadeOut()
        $(".like").removeClass("animate__fadeOutLeft animate__animated")
        $(".dislike").removeClass("animate__fadeOutRight animate__animated")
    })
    $("#go-to-top").click(function() {
        $("html, body").animate({
            scrollTop:0
        }, 1000);
    })
})
