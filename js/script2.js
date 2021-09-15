$(document).ready(function() {
    $("#go-to-top").hide()
    $(".info").hide()
    $(".infoCart").hide()
    $("#text").hide()
    $(".selectedItem").hide()
    $(".infoCart").css({"opacity": 1})
    $("#go-to-top").css({"opacity": 1})
    $(".info").css({"opacity": 1})
    $("#text").css({"opacity": 0.6}) 
    var flag = false
    
    var sp = document.getElementsByClassName("item")
    for(var i = 0; i < $(".selectedItem").length; i++)
    {
        var a = $(".selectedItem")[i]
        var b = $(".item")[i]
        $(a).children('img').attr('src', $(b).children('a').children('img').attr('src'))
        $(a).children('h3').text($(b).children('a').children('h2').text())
        $(a).children('h4').text($(b).children('a').children('h3').text())
        $(a).children('h5').text($(b).children('a').children('h3').text())
    }
    $(sp).hide()
    $(".age").hide()
    for (var i = 0; i < 12; i++)
        {
            $(sp[i]).show()
        }
    $(".sortTH input").change(function(){
        $(".listpage li").css({
            "border-color" : "#937C69"
        })
        $(".listpage li:first-child").css({
            "border-color" : "#7C3618"
        })
        var arrChecked = []
        flag = false
        $(sp).hide()
        for (var i = 0; i < $(".sortTH input").length; i++)
        {   
            var tam =  $(".sortTH input")[i]
            if (tam.checked == true)
            {
                flag = true
                arrChecked.push(tam)
            }
        }
        if (flag == false)
        {
            var maxPage = Math.ceil(sp.length/12)
            var listpageNumber = $(".listpage li")
            $(listpageNumber).show()
            for (var i = listpageNumber.length; i >= maxPage; i--)
                $(listpageNumber[i]).hide()
    
            for (var i = 0; i < 12; i++)
            {
                $(sp[i]).show()
            }
            $(".sortTH input").change(function() {
                $(".listpage li").css({
                    "border-color" : "#937C69"
                })
                $(".listpage li:first-child").css({
                    "border-color" : "#7C3618"
                })
            })
        }
        else
        {
            var arrSp = []
            for(var i = 0; i < sp.length; i++)
            {
                for (var j = 0; j < arrChecked.length; j++)
                {
                    if (sp[i].className.slice(5,sp[i].className.slice(5,1000).search(" ") + 5) == arrChecked[j].id)
                    {
                        arrSp.push(sp[i])
                    }
                }
            }

            var maxPage = Math.ceil(arrSp.length/12)
            var listpageNumber = $(".listpage li")
            $(listpageNumber).show()
            for (var i = listpageNumber.length; i >= maxPage; i--)
            {
                $(listpageNumber[i]).hide()
            }
            for (var i = 0; i < 12; i++)
            {
                $(arrSp[i]).show()
            }
            
            $(".listpage li").click(function() {
                if (flag == true)
                {
                    $(".item").hide()
                    $(".listpage li").css({
                        "border-color": "#937C69"
                    })
                    $(this).css({
                        "border-color": "#7C3618"
                    })
                    var pagenumber = $(this).children('a').attr('rel')
                    for (var i = 12*(pagenumber - 1); i < 12*(pagenumber - 1) + 12; i++)
                        $(arrSp[i]).show()  
                }
            })    
        }
    })    
    $(".listpage li").click(function() {
        if (flag == false)
        {
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
        }
        $("html, body").animate({
            scrollTop:402
        }, 1000);
    })    
    
    $(".sortDT").change(function() {
        $(".listpage li").css({
            "border-color" : "#937C69"
        })
        $(".listpage li:first-child").css({
            "border-color" : "#7C3618"
        })
        var age = document.getElementsByName("age")
        for (var i = 0; i < age.length; i++)
        {
            age[i].checked = false
        } 
        if (this.checked)
        {
            var sortTH = document.querySelectorAll(".sortTH input")
            for (var i = 0; i < sortTH.length; i++)
                sortTH[i].checked = false
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
                $(".age input").change(function() {
                    $(".listpage li").css({
                        "border-color" : "#937C69"
                    })
                    $(".listpage li:first-child").css({
                        "border-color" : "#7C3618"
                    })
                    if(this.checked == true){
                        var sortTH = document.querySelectorAll(".sortTH input")
                        for (var i = 0; i < sortTH.length; i++)
                            sortTH[i].checked = false
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
                        }
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
                sptam = sp
                $(".age input").change(function() {
                    $(".listpage li").css({
                        "border-color" : "#937C69"
                    })
                    $(".listpage li:first-child").css({
                        "border-color" : "#7C3618"
                    })
                    if(this.checked == true){
                        var sortTH = document.querySelectorAll(".sortTH input")
                        for (var i = 0; i < sortTH.length; i++)
                            sortTH[i].checked = false
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
                            sptam = sp
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
                            sptam = sp
                        }
                    }
                })
            }
        }
    })
    var numberClick = 0
    var brandTam
    $(".brands img").click(function() {
        var sortTH = document.querySelectorAll(".sortTH input")
        for (var i = 0; i < sortTH.length; i++)
            sortTH[i].checked = false
        
        if (brandTam != this)
            numberClick = 0
        brandTam = this
        numberClick++
        
        if (numberClick % 2 == 0)
        {
            $(".item").hide()
            var maxPage = Math.ceil(sp.length/12)
            var listpageNumber = $(".listpage li")
            $(listpageNumber).show()
            for (var i = listpageNumber.length; i >= maxPage; i--)
                $(listpageNumber[i]).hide()
    
            for (var i = 0; i < 12; i++)
            {
                $(sp[i]).show()
            }
        }
        else
        {
            $(".item").hide()
            $(".listpage li").css({
                "border-color" : "#937C69"
            })
            $(".listpage li:first-child").css({
                "border-color" : "#7C3618"
            })
            var brandName = document.getElementById(this.title) 
            brandName.checked = true
            var spBrand = []
            for (var i = 0; i < sp.length; i++)
            {
                if (sp[i].className.slice(5,sp[i].className.slice(5,1000).search(" ") + 5) == brandName.id)
                    spBrand.push(sp[i])
            }
            var maxPage = Math.ceil(spBrand.length/12)
                var listpageNumber = $(".listpage li")
                $(listpageNumber).show()
                for (var i = listpageNumber.length; i >= maxPage; i--)
                {
                    $(listpageNumber[i]).hide()
                }
            $(spBrand).show()
        }
    })

    //-------------------------------// Thêm số lượng giỏ hàng
    $(".cart").click(function(){
        var count = $(".menu span").text()
        count++
        $(".menu span").text(count)
        alert("Đã thêm thành công, vui lòng kiểm tra giỏ hàng !!!")
        for(var i = 0; i < $(".selectedItem").length; i++)
        {
            var slItem = $(".selectedItem")[i]           
            if( $(slItem).children('img').attr('src') == $("#firstthumb").attr('src'))
            {
                $(slItem).show()
                var sl = $(slItem).children('div').children('span').text()
                sl++
                $(slItem).children('div').children('span').text(sl)
                $(slItem).children('h5').text(thanhTien($(slItem).children('h4').text(), sl))
                break
            }
        }
        GioTrong()
    })
    //-------------------------------// Phần info giỏ hàng
    /$(".menu li:last-child").click(function(){
        $(".cover").hide()
        $(".exit").show()
        $(".infoCart").fadeIn(500)
        $("#text").fadeIn()
        $(".infoCart > img").hide()
        GioTrong()
    })
    $(".exit").click(function(){
        $(".cover").show()
        $(".infoCart").fadeOut(500)
        $("#text").fadeOut()
    })
    //-------------------------------// Thêm bớt số lượng giỏ hàng
    $(".minus").click(function(){
        var sl = $(this).siblings('span').text()
        sl--
        $(this).siblings('span').text(sl)
        var tru = $(".menu span").text()
        tru--
        $(".menu span").text(tru)
        if(sl == 0)
        {
            $(this).parent('div').parent('div').hide()
        }
        $(this).parent('div').siblings('h5').text(thanhTien($(this).parent('div').siblings('h4').text(), sl))
        GioTrong()
    })
    $(".plus").click(function(){
        var sl = $(this).siblings('span').text()
        sl++
        $(this).siblings('span').text(sl) 
        cong = $(".menu span").text()
        cong++
        $(".menu span").text(cong)
        $(this).parent('div').siblings('h5').text(thanhTien($(this).parent('div').siblings('h4').text(), sl))
    })
    //-------------------------------// Hàm tính tổng số tiền 
    function thanhTien(a,soLuong)
    {
        var chuoiBoCham =a.replaceAll('.','')
        chuoiBoCham = chuoiBoCham.replace('đ','')
        chuoiBoCham *= soLuong
        var tt = chuoiBoCham
        var dem = 0
        tt = String(tt)
        for (var i = tt.length - 1; i >= 1; i--)
        {
            dem++
            if(dem == 3)
                {
                    tt = tt.slice(0,i) + "." +tt.slice(i)
                    dem = 0
                }
        }
        var VND = " đ"
        return tt + VND
    }
    //-------------------------------// Hủy đơn hàng
    $(".cancel").click(function(){
        var sl = $(this).siblings('div').children('span').text()
        $(".menu span").text($(".menu span").text() - sl) 
        $(this).siblings('div').children('span').text(0)
        $(this).parent().hide()
        GioTrong()
    })
    //-------------------------------// Hàm giỏ trống
    function GioTrong()
    {
        if($(".menu span").text() == 0)
        {
            $(".infoCart > img").show()
            $(".infoCart h1").hide()
            $(".header").hide()
        }
        else{
            $(".infoCart > img").hide()
            $(".infoCart h1").show()
            $(".header").show()
        }
    }
    //-------------------------------//  Hàm ẩn hiện số lượng sản phẩm 
    function noProduct(dem)
    {
        if(dem == 0)
            $(".page > img").css({"display":"block"})
        else
            $(".page > img").css({"display":"none"})
    }
    //-------------------------------// Tìm kiếm sản phẩm 
    $("#searchBtn").click(function(){
        $(".item").hide()
        var kw = $("#keyword").val()
        var dem = 0
        if(kw != "")
        {
            $(".page > img").hide()
            var items = $("div.item h2")
            for (var i = 0; i < items.length; i++)
                if($(items[i]).text().indexOf(kw) >= 0)    
                {
                    $(items[i]).parent().parent().show()
                    dem++
                }
        }
        $(".listpage").hide()
        noProduct(dem)
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
            $("#go-to-top").show("fast")
        else
            $("#go-to-top").hide("fast")
    })
    $("#go-to-top").click(function() {
        $("html, body").animate({
            scrollTop:0
        }, 1000);
    })
})