$(document).ready(function () {
    function squareDiv() {
        $(".photo").height($(".photo").width())
    }
    squareDiv()
    $(window).resize(function () {
        squareDiv()
    })
    var listnum = 0;
    var maxlistnum = Math.ceil($(".photo").length/12) - 1
    function changePage(listnum)
    {
        $(".photo").hide()
        for (var i = listnum*12; i < listnum*12+12; i++)
        {
            $($(".photo")[i]).show()
        }
        $("html, body").animate({
            scrollTop: $($(".title")[0]).offset().top
        }, 1000);
    }
    $(".photo").hide()
    changePage(listnum)
    $(".prev-imglist").click(function(){
        if (listnum != 0)
        {
            listnum--
            changePage(listnum)
        }
    })
    $(".next-imglist").click(function(){
        if (listnum != maxlistnum)
        {
            listnum++
            changePage(listnum)
        }
    })
    $(".photo").click(function () {
        $("#black-space").show()
        $(".info-img").show();
        $(".otherComments").html($(this).children(".hiddenComment").html())
        $(".info-img").children('a').attr('rel', $(this).children('a').attr('rel'));
        $(".info-img .frame img").attr('src', $(this).children().children('img').attr('src'));
        $(".info-img .download").attr('href', $(this).children().children('img').attr('src'));
        var thutu = $(".info-img").children('a').attr('rel') * 1;
        if (thutu <= 1)
            $(".info-img .prev").hide()
        else
            $(".info-img .prev").show()
        if (thutu >= $(".photo").length)
            $(".info-img .next").hide()
        else
            $(".info-img .next").show()
        if(heartlist[thutu-1] == true)
        {
            $(".heart").css({
                "background-color": "#ff8072",
                "color": "#ffd8cf"
            })
        }
        else{
            $(".heart").css({
                "background-color": "#9e7260",
                "color": "#e2c8be"
            })
        }
    })
    $(".exit").click(function () {
        $(this).parent().parent().fadeOut(500)
        $("#black-space").fadeOut()
    })
    $(".info-img .prev").click(function () {
        var thutu = $(".info-img").children('a').attr('rel') * 1
        thutu--;
        $(".info-img").children('a').attr('rel', thutu)
        var photo = $(".photo")
        $(".otherComments").html($(photo[thutu-1]).children(".hiddenComment").html())
        $(".info-img .frame img").attr('src', `photo&video/photo${thutu}.jpg`);
        $(".info-img .download").attr('href', `photo&video/photo${thutu}.jpg`);
        $(".info-img .next").show()
        if (thutu <= 1)
            $(".info-img .prev").hide()
        else
            $(".info-img .prev").show()
        
        if(heartlist[thutu-1] == true)
        {
            $(".heart").css({
                "background-color": "#ff8072",
                "color": "#ffd8cf"
            })
        }
        else{
            $(".heart").css({
                "background-color": "#9e7260",
                "color": "#e2c8be"
            })
        }
    })
    $(".info-img .next").click(function () {
        var thutu = $(".info-img").children('a').attr('rel') * 1
        thutu++;
        $(".info-img").children('a').attr('rel', thutu)
        var photo = $(".photo")
        $(".otherComments").html($(photo[thutu-1]).children(".hiddenComment").html())
        $(".info-img .frame img").attr('src', `photo&video/photo${thutu}.jpg`);
        $(".info-img .download").attr('href', `photo&video/photo${thutu}.jpg`);
        $(".info-img .prev").show()
        if (thutu >= $(".photo").length)
            $(".info-img .next").hide()
        else
            $(".info-img .next").show()

        if(heartlist[thutu-1] == true)
        {
            $(".heart").css({
                "background-color": "#ff8072",
                "color": "#ffd8cf"
            })
        }
        else{
            $(".heart").css({
                "background-color": "#9e7260",
                "color": "#e2c8be"
            })
        }
    })

    //----------------tim-----------------//
    var heartlist = [];
    for (var i = 0; i < $(".photo").length; i++) {
        heartlist.push(false)
    }
    $(".info-img .heart").click(function() {
        var stt = $(".info-img").children('a').attr('rel')*1 - 1
        if(heartlist[stt] == false)
        {
            $("#addHeart").addClass("animate__animated animate__fadeInDown")
            $("#addHeart").show()
            setTimeout(function () {
                $("#addHeart").removeClass("animate__animated animate__fadeInDown")
                $("#addHeart").fadeOut(500)
            }, 1200)
            heartlist[stt] = true;
            $(this).css({
                "background-color": "#ff8072",
                "color": "#ffd8cf"
            })
        }
        else
        {
            $("#removeHeart").addClass("animate__animated animate__fadeInDown")
            $("#removeHeart").show()
            setTimeout(function () {
                $("#removeHeart").removeClass("animate__animated animate__fadeInDown")
                $("#removeHeart").fadeOut(500)
            }, 1200)
            heartlist[stt] = false;
            $(this).css({
                "background-color": "#9e7260",
                "color": "#e8d2ca"
            })
        }
    })
    $(".commentShow").click(function(){
        $(".comments").toggle();
        $(".frame").toggleClass("frame-commentShow-clicked")
        $(".commentShow").toggleClass("commentShow-clicked")
    })
    $("#sendComment").click(function () {
        var stt = $(".info-img").children('a').attr('rel')*1
        var newComment = $(".inputComment input").val()
        if (newComment != "") {
            $(".otherComments").prepend(`
                    <div class="comment active">
                        <div class="avt">
                            <img src="images/user.png" alt="user"/>
                        </div>
                        <div class="commentContent">
                            <p>${newComment}</p>
                        </div>
                    </div>
            `)
            var photo = $(".photo")
            $(photo[stt-1]).children(".hiddenComment").prepend(`
                <div class="comment">
                            <div class="avt">
                                <img src="images/user.png" alt="user"/>
                            </div>
                            <div class="commentContent">
                                <p>${newComment}</p>
                            </div>
                        </div>
            `)
        }
        setTimeout(function () {
            $(".comments .comment").removeClass("active")
        }, 1000)

        $(".inputComment input").val("")
    })
    $(window).scroll(function () {
        var lane = $($(".title")[1]).offset().top - 10;
        if ($(this).scrollTop() < lane) {
            $(".imglist").addClass("list-active")
            $(".vidlist").removeClass("list-active")
        } else {
            $(".vidlist").addClass("list-active")
            $(".imglist").removeClass("list-active")
        }
        if ($(this).scrollTop() >= 435)
            $("#go-to-top").show("slow")
        else
            $("#go-to-top").hide("slow")
    })
    $(".imglist").click(function() {
        $("html, body").animate({
            scrollTop: $($(".title")[0]).offset().top
        }, 1000);
    })
    $(".vidlist").click(function() {
        $("html, body").animate({
            scrollTop: $($(".title")[1]).offset().top
        }, 1000);
    })
    $("#go-to-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})
