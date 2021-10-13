$(document).ready(function() {
    $("#go-to-top").hide()
    $(".info").hide()
    $(".YMK-info").hide()
    $("#black-space").hide()
    $("#go-to-top").css({"opacity": 1})
    $(".info").css({"opacity": 1})
    $(".YMK-info").css({"opacity": 1})
    $("#black-space").css({"opacity": 0.6})
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
        $(".informationText").html($(this).children("a").children(".hiddenInformation").html())
        $(".exampleImg img").attr("src",$(this).children("a").children("img").attr("src"))
        $(".YMK-info h1").text($(this).children("a").children(".document").children("h2").text())
        $(".exampleImg p").text($(this).children("a").children("p").text())
        $(".YMK-info").fadeIn(500)
        $("#black-space").fadeIn()
        if(likeNum[$(this).children("a").attr("rel")] == true)
        {
            $(".like").addClass("rateLike")
            $(".dislike").hide()
            $(".like").children("a").text("Cảm ơn đánh giá của bạn!!")
        }
        else if(dislikeNum[$(this).children("a").attr("rel")] == true)
        {
            $(".dislike").addClass("rateDislike")
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
            scrollTop: 2500
        },2000);
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
                    setTimeout(function(){
                        $(".dislike").hide()
                    }, 250)
                    $(this).children("a").text("Cảm ơn đánh giá của bạn!!")
                }
                else
                {   
                    likeNum[i] = false
                    $(this).removeClass("rateLike")
                    $(".dislike").show(500)
                    $(this).children("a").text("Hữu ích ")
                    $(this).children("a").append(`<i class="far fa-thumbs-up"></i>`)
                }
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
                    $(this).addClass("rateDislike")
                    $(".like").hide()
                    $(this).children("a").text("Cảm ơn đánh giá của bạn!!")
                }
                else
                {   
                    dislikeNum[i] = false
                    $(this).removeClass("rateDislike")
                    $(".like").show(500)
                    $(this).children("a").text("Không hữu ích ")
                    $(this).children("a").append(`<i class="far fa-thumbs-down"></i>`)
                }
            }
        }
    })
})
