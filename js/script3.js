$(document).ready(function () {
    function squareDiv() {
        $(".photo").height($(".photo").width())
    }
    setTimeout(function () {
        $(".website").css("display", "block")
        squareDiv() //Chỉnh khung ảnh thành vuông lúc mới vào
    }, 3000)
    $(".website").addClass("animate__fadeIn  animate__animated")
    setTimeout(function () {
        $(".website").removeClass("animate__fadeIn  animate__animated")
    }, 4000)
    $(window).resize(function () {
        if (window.innerWidth > 770) {
            $("div.cover > nav").show()
        }
        else {
            $("div.cover > nav").hide()
        }
        squareDiv() //Chỉnh khung ảnh thành vuông sau mỗi lần thay đổi kích thước window
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
    // Hiện 12 ảnh đầu tiên
    $(".photo").hide()
    for (var i = 0; i < 12; i++)
    {
        $($(".photo")[i]).show()
    }
    //
    $(".prev-imglist").click(function(){
        if (listnum != 0)
        {
            $(".next-imglist").removeClass("unChangePage")
            listnum--
            changePage(listnum)
            if(listnum == 0)
            {
                $(".prev-imglist").addClass("unChangePage")
            }
        }
    })
    $(".next-imglist").click(function(){
        if (listnum != maxlistnum)
        {
            $(".prev-imglist").removeClass("unChangePage")
            listnum++
            changePage(listnum)
            if(listnum == maxlistnum)
            {
                $(".next-imglist").addClass("unChangePage")
            }
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
            heartlist[stt] = true;
            $(this).css({
                "background-color": "#ff8072",
                "color": "#ffd8cf"
            })
            $(".heartReact").removeClass("animate__fadeOut animate__animated")
            $(".heartReact").show()
            $(".heartReact").addClass("animate__heartBeat animate__animated")
            setTimeout(function () {
                $(".heartReact").removeClass("animate__heartBeat animate__animated")
                $(".heartReact").addClass("animate__fadeOut animate__animated")
                $(".heartReact").hide()
            }, 1000)
        }
        else
        {
            heartlist[stt] = false;
            $(this).css({
                "background-color": "#9e7260",
                "color": "#e8d2ca"
            })
        }
    })
    $(".heartReact").hide()
    $(".frame img").dblclick(function() {
        var stt = $(".info-img").children('a').attr('rel')*1 - 1
        if(heartlist[stt] == false)
        {
            heartlist[stt] = true;
            $(".info-img .heart").css({
                "background-color": "#ff8072",
                "color": "#ffd8cf"
            })
        }
        $(".heartReact").removeClass("animate__fadeOut animate__animated")
        $(".heartReact").show()
        $(".heartReact").addClass("animate__heartBeat animate__animated")
        setTimeout(function () {
            $(".heartReact").removeClass("animate__heartBeat animate__animated")
            $(".heartReact").addClass("animate__fadeOut animate__animated")
            $(".heartReact").hide()
        }, 1000)
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
    //-------------------------------------------//
    $(".showMenu").click(function () {
        $("div.cover > nav").toggle()
    })
})
