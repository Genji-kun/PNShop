$(document).ready(function () {
    function squazeDiv() {
        $(".photo").height($(".photo").width())
    }
    squazeDiv()
    $(window).resize(function () {
        squazeDiv()
    })
    $(".photo").click(function () {
        $("#black-space").show()
        $(".info-img").show();
        $(".info-img").children('a').attr('rel', $(this).children('a').attr('rel'));
        $(".info-img img").attr('src', $(this).children().children('img').attr('src'));
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
        $(".info-img").children('a').attr('rel', thutu);
        $(".info-img img").attr('src', `photo&video/photo${thutu}.jpg`);
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
        $(".info-img").children('a').attr('rel', thutu);
        $(".info-img img").attr('src', `photo&video/photo${thutu}.jpg`);
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
            }, 2000)
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
            }, 2000)
            heartlist[stt] = false;
            $(this).css({
                "background-color": "#9e7260",
                "color": "#e2c8be"
            })
        }
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $(".cover").css({
                "position": "fixed",
                "top": 0,
            })
        } else {
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
    $("#go-to-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})
