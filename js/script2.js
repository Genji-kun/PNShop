$(document).ready(function() {
    $("#go-to-top").hide()
    $(".info").hide()
    $("#text").hide()
    
    $("#go-to-top").css({"opacity": 1})
    $(".info").css({"opacity": 1})
    $("#text").css({"opacity": 0.6})       

    var sp = document.getElementsByClassName("item")
    $(sp).hide()
    $(".age").hide()
    for (var i = 0; i < 12; i++)
        {
            $(sp[i]).show()
        }
        $(".listpage li").click(function() {
            $(".listpage li").css({
                "border-color": "#937C69"
            })
            $(this).css({
                "border-color": "#7C3618"
            })
            $(sp).hide()
            var pagenumber = $(this).children('a').attr('rel')
            for (var i = 12*(pagenumber - 1); i < 12*(pagenumber - 1) + 12; i++)
                $(sp[i]).show()
        })


    $(".sortDT").click(function() {
        if (this.id == "all")
        {
            $(".age").hide()
            var listpageNumber = $(".listpage li")
            $(listpageNumber).show()

            sp = document.getElementsByClassName("item")
            $(sp).hide()
            for (var i = 0; i < 12; i++)
            {
                $(sp[i]).show()
            }
            $(".listpage li").click(function() {
                $(".listpage li").css({
                    "border-color": "#937C69"
                })
                $(this).css({
                    "border-color": "#7C3618"
                })
                $(sp).hide()
                var pagenumber = $(this).children('a').attr('rel')
                for (var i = 12*(pagenumber - 1); i < 12*(pagenumber - 1) + 12; i++)
                    $(sp[i]).show()
            })
        }
        else if (this.id == "dog")
        {
            $(".age").show()
            $(".catlist").hide()
            $(".doglist").show()
            sp = document.getElementsByClassName("item")
            $(sp).hide()
            sp = document.getElementsByClassName("dog")

            var maxPage = Math.ceil(sp.length/12)
            var listpageNumber = $(".listpage li")
            $(listpageNumber).show()
            for (var i = listpageNumber.length; i >= maxPage; i--)
                $(listpageNumber[i]).hide()

            for (var i = 0; i < 12; i++)
            {
                $(sp[i]).show()
            }
            $(".listpage li").click(function() {
                $(".listpage li").css({
                    "border-color": "#937C69"
                })
                $(this).css({
                    "border-color": "#7C3618"
                })
                $(sp).hide()
                var pagenumber = $(this).children('a').attr('rel')
                for (var i = 12*(pagenumber - 1); i < 12*(pagenumber - 1) + 12; i++)
                    $(sp[i]).show()
            })
            $(".age input").click(function() {
                if(this.id == "kid")
                {
                    $(sp).hide()
                    sp = document.querySelectorAll(".dog.kid")
                    var maxPage = Math.ceil(sp.length/12)
                    var listpageNumber = $(".listpage li")
                    $(listpageNumber).show()
                    for (var i = listpageNumber.length; i >= maxPage; i--)
                        $(listpageNumber[i]).hide()

                    for (var i = 0; i < 12; i++)
                    {
                        $(sp[i]).show()
                    }
                    $(".listpage li").click(function() {
                        $(".listpage li").css({
                            "border-color": "#937C69"
                        })
                        $(this).css({
                            "border-color": "#7C3618"
                        })
                        $(sp).hide()
                        var pagenumber = $(this).children('a').attr('rel')
                        for (var i = 12*(pagenumber - 1); i < 12*(pagenumber - 1) + 12; i++)
                            $(sp[i]).show()
                    })
                }
                else
                {
                    $(sp).hide()
                    sp = document.querySelectorAll(".dog.adult")
                    var maxPage = Math.ceil(sp.length/12)
                    var listpageNumber = $(".listpage li")
                    $(listpageNumber).show()
                    for (var i = listpageNumber.length; i >= maxPage; i--)
                        $(listpageNumber[i]).hide()

                    for (var i = 0; i < 12; i++)
                    {
                        $(sp[i]).show()
                    }
                    $(".listpage li").click(function() {
                        $(".listpage li").css({
                            "border-color": "#937C69"
                        })
                        $(this).css({
                            "border-color": "#7C3618"
                        })
                        $(sp).hide()
                        var pagenumber = $(this).children('a').attr('rel')
                        for (var i = 12*(pagenumber - 1); i < 12*(pagenumber - 1) + 12; i++)
                            $(sp[i]).show()
                    })
                }
            })
        }
        else
        {
            $(".age").show()
            $(".doglist").hide()
            $(".catlist").show()
            sp = document.getElementsByClassName("item")
            $(sp).hide()
            sp = document.getElementsByClassName("cat")

            var maxPage = Math.ceil(sp.length/12)
            var listpageNumber = $(".listpage li")
            $(listpageNumber).show()
            for (var i = listpageNumber.length; i >= maxPage; i--)
                $(listpageNumber[i]).hide()

            for (var i = 0; i < 12; i++)
            {
                $(sp[i]).show()
            }
            $(".listpage li").click(function() {
                $(".listpage li").css({
                    "border-color": "#937C69"
                })
                $(this).css({
                    "border-color": "#7C3618"
                })
                $(sp).hide()
                var pagenumber = $(this).children('a').attr('rel')
                for (var i = 12*(pagenumber - 1); i < 12*(pagenumber - 1) + 12; i++)
                    $(sp[i]).show()
            })
            $(".age input").click(function() {
                if(this.id == "kid")
                {
                    $(sp).hide()
                    sp = document.querySelectorAll(".cat.kid")
                    var maxPage = Math.ceil(sp.length/12)
                    var listpageNumber = $(".listpage li")
                    $(listpageNumber).show()
                    for (var i = listpageNumber.length; i >= maxPage; i--)
                        $(listpageNumber[i]).hide()

                    for (var i = 0; i < 12; i++)
                    {
                        $(sp[i]).show()
                    }
                    $(".listpage li").click(function() {
                        $(".listpage li").css({
                            "border-color": "#937C69"
                        })
                        $(this).css({
                            "border-color": "#7C3618"
                        })
                        $(sp).hide()
                        var pagenumber = $(this).children('a').attr('rel')
                        for (var i = 12*(pagenumber - 1); i < 12*(pagenumber - 1) + 12; i++)
                            $(sp[i]).show()
                    })
                }
                else
                {
                    $(sp).hide()
                    sp = document.querySelectorAll(".cat.adult")
                    var maxPage = Math.ceil(sp.length/12)
                    var listpageNumber = $(".listpage li")
                    $(listpageNumber).show()
                    for (var i = listpageNumber.length; i >= maxPage; i--)
                        $(listpageNumber[i]).hide()

                    for (var i = 0; i < 12; i++)
                    {
                        $(sp[i]).show()
                    }
                    $(".listpage li").click(function() {
                        $(".listpage li").css({
                            "border-color": "#937C69"
                        })
                        $(this).css({
                            "border-color": "#7C3618"
                        })
                        $(sp).hide()
                        var pagenumber = $(this).children('a').attr('rel')
                        for (var i = 12*(pagenumber - 1); i < 12*(pagenumber - 1) + 12; i++)
                            $(sp[i]).show()
                    })
                }
            })
        }
    })
    //-------------------------------//
       
    $(".item").click(function() {
        $(".cover").hide()
        
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
        $(".cover").show()
        $(".thumb div img").css({"border-width": 0})
        $("#firstthumb").css({"border-width" : 2})
        $(".info").fadeOut(500)
        $("#text").fadeOut()
    })
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