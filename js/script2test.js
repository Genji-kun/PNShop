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
    //--------------------- Các function --------------------- //
 
    // Thêm phần tử HTML selectedItem
    var imgSelectedItem = []
    function addSelectedItem(){
        var img = $("#firstthumb").attr('src')
        imgSelectedItem.push(img)
        var productName = $(".info .right > h1").text()
        var price = $(".info .right h3").text()
        $(".selectedItems").prepend(`
            <div class="selectedItem">
                        <img src="${img}">
                        <h3>${productName}</h3>
                        <h4>${price}</h4>
                        <div class="sl" >
                            <a class = "minus" href ="javascript:;"><i class="fas fa-minus-square"></i></a>
                            <span>0</span>
                            <a class = "plus" href ="javascript:;" ><i class="fas fa-plus-square"></i></a>
                        </div>
                        <h5></h5>
                        <a href="javascript:;" class="cancel"><i class="fas fa-times-square"></i></a>
                    </div>

        `)
    }
    // Tính số trang và hiển thị tương ứng
    function showListPage(sanPham)
    {
        var maxPage = Math.ceil(sanPham.length/12)
            var listpageNumber = $(".listpage li")
            $(listpageNumber).show()
            for (var i = listpageNumber.length; i >= maxPage; i--)
                $(listpageNumber[i]).hide()
    }
    // Hiển thị 12 sản phẩm đầu tiên ở trang đầu
    function show12Product(sanPham)
    {
        for (var i = 0; i < 12; i++)
                $(sanPham[i]).show()
    }
    // Chuyển giao diện ở list page trở về trạng thái ban đầu, trang 1 đang được chọn
    function checkedFirstPage()
    {
        $(".listpage li").css({
            "border-color" : "#937C69"
        })
        $(".listpage li:first-child").css({
            "border-color" : "#7C3618"
        })
    }
    // Chuyển giá tiền dạng chuỗi về giá tiền dạng số
    function chuoiBoCham(a)
    {
        var kq =a.replaceAll('.','')
        kq = kq.replace('đ','')
        return kq*1
    }
    // Định dạng chuỗi số
    function chuoiTien(a)
    {
        var dem = 0
        tt = String(a)
        for (var i = tt.length - 1; i >= 1; i--)
        {
            dem++
            if(dem == 3)
                {
                    tt = tt.slice(0,i) + "." +tt.slice(i)
                    dem = 0
                }
        }
        return tt + " đ"
    }
    // Hàm tính thành tiền và hiển thị 
    function thanhTien(a, soLuong)
    {
        a = chuoiBoCham(a)
        a *= soLuong
        return chuoiTien(a)
    }
    // Hàm tính và hiển thị tổng tiền
    var total = 0;
    function tinhTongTien()
    {
        $(".total > h4").text(chuoiTien(total))
    }
    //--------------------- Các sự kiện --------------------- //
    // Hủy đơn hàng
    $(".selectedItems").on('click', '.selectedItem .cancel', function(){
        var sl = $(this).siblings('div').children('span').text()
        $(".menu span").text($(".menu span").text() - sl) 
        $(this).siblings('div').children('span').text(0)
        $(this).parent().hide()
        total -= chuoiBoCham($(this).siblings('h5').text())
        tinhTongTien()
        GioTrong()
    })
    // Hàm xử lý giao diện khi giỏ trống hoặc không
    function GioTrong()
    {
        if($(".menu span").text() == 0)
        {
            $(".infoCart > .notice").show()
            $(".infoCart h1").hide()
            $(".header").hide()
            $(".total").hide()
        }
        else{
            $(".infoCart > .notice").hide()
            $(".infoCart h1").show()
            $(".header").show()
            $(".total").show()
        }
    }
    // Hàm ẩn hiện giao diện khi không sản phẩm hoặc có
    function noProduct(dem)
    {
        if(dem == 0)
            $(".page > #noProduct > img").css({"display":"block"})
        else
            $(".page > #noProduct > img").css({"display":"none"})
    }


    var sp = $(".item")
    $(sp).hide()
    show12Product(sp)
    
    // Xử lý sự kiện chuyển trang
    $(".listpage li").click(function() {
        $(".listpage li").css({
            "border-color": "#937C69"
        })
        $(this).css({
            "border-color": "#7C3618"
        })
        if (flag == false)
        {
            $(sp).hide()
            var pagenumber = $(this).children('a').attr('rel')
            for (var i = 12*(pagenumber - 1); i < 12*(pagenumber - 1) + 12; i++)
                $(sp[i]).show()  
        }
        $("html, body").animate({
            scrollTop:402
        }, 1000);
    })
    
    // Xử lý sự kiện khi chọn lọc đối tượng (chó,mèo,tất cả)
    $(".sortDT").change(function() {
        checkedFirstPage()
        $("#keyword").val("")
        var age = document.getElementsByName("age")
        for (var i = 0; i < age.length; i++)
            age[i].checked = false
        if (this.checked)
        {
            var sortTH = $(".sortTH input")
            for (var i = 0; i < sortTH.length; i++)
                sortTH[i].checked = false
            if (this.id == "all")
            {
                sp = $(".item")
                $(".age").hide()
                showListPage(sp)
                $(sp).hide()
                show12Product(sp)
            }
            else if (this.id == "dog")
            {
                $(".age").show()
                $(".catlist").hide()
                $(".doglist").show()
                $(".item").hide()
                sp = $(".dog")
                showListPage(sp)
                show12Product(sp)
                $(".age input").change(function() {
                    checkedFirstPage()
                    $("#keyword").val("")
                    if(this.checked){
                        var sortTH = $(".sortTH input")
                        for (var i = 0; i < sortTH.length; i++)
                            sortTH[i].checked = false
                        $(sp).hide()
                        if(this.id == "kid")
                            sp = $(".dog.kid")
                        else
                            sp = $(".dog.adult")
                        showListPage(sp)
                        show12Product(sp)
                    }
                    noProduct(sp)
                })
            }
            else
            {
                $(".age").show()
                $(".doglist").hide()
                $(".catlist").show()
                $(".item").hide()
                sp = $(".cat")
                showListPage(sp)
                show12Product(sp)
                $(".age input").change(function() {
                    checkedFirstPage()
                    $("#keyword").val("")
                    if(this.checked){
                        var sortTH = $(".sortTH input")
                        for (var i = 0; i < sortTH.length; i++)
                            sortTH[i].checked = false
                        $(sp).hide()
                        if(this.id == "kid")
                            sp = $(".cat.kid")
                        else
                            sp = $(".cat.adult")
                        showListPage(sp)
                        show12Product(sp)
                    }
                    noProduct(sp)
                })
            }
        }
        noProduct(sp.length)
    })

    // Xử lý sự kiện khi chọn lọc thương hiệu
    $(".sortTH input").change(function(){
        checkedFirstPage()
        $("#keyword").val("")
        var arrChecked = []
        flag = false
        $(".item").hide()
        for (var i = 0; i < $(".sortTH input").length; i++)
        {   
            var tam =  $(".sortTH input")[i]
            if (tam.checked)
            {
                flag = true
                arrChecked.push(tam)
            }
        }
        if (flag == false)
        {
            showListPage(sp)
            show12Product(sp)
            checkedFirstPage()
            noProduct(sp.length)
        }
        else
        {
            var arrSp = []
            //Duyệt các sản phẩm đang được hiển thị, so sánh với các thương hiệu được click, nếu trùng khớp thì được thêm vào mảng
            for(var i = 0; i < sp.length; i++)
                for (var j = 0; j < arrChecked.length; j++)
                    if (sp[i].className.slice(5,sp[i].className.slice(5,1000).search(" ") + 5) == arrChecked[j].id)
                        arrSp.push(sp[i])
            showListPage(arrSp)
            show12Product(arrSp)
            $(".listpage li").click(function() {
                if(flag == true)
                {
                    $(arrSp).hide()
                    var pagenumber = $(this).children('a').attr('rel')
                            for (var i = 12*(pagenumber - 1); i < 12*(pagenumber - 1) + 12; i++)
                                $(arrSp[i]).show()  
                }
            })
            noProduct(arrSp.length)
        }
    }) 

    // Khi chọn lọc thương hiệu bằng danh sách thương hiệu ở đầu trang
    var numberClick = 0
    var brandTam
    $(".brands img").click(function() {
        $("#keyword").val("")
        var sortTH = $(".sortTH input")
        for (var i = 0; i < sortTH.length; i++)
            sortTH[i].checked = false
        
        if (brandTam != this)
            numberClick = 0
        brandTam = this
        numberClick++
        
        if (numberClick % 2 == 0)
        {
            $(".item").hide()
            showListPage(sp)
            show12Product(sp)
            noProduct(sp)
        }
        else
        {
            $(".item").hide()
            checkedFirstPage()
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
            noProduct(spBrand.length)
        }
    })
    // Thêm số lượng giỏ hàng
  
    $(".cart").click(function(){
        var count = $(".menu span").text()
        count++
        $(".menu span").text(count)
        alert("Đã thêm thành công, vui lòng kiểm tra giỏ hàng !!!")
        var isExist = false
        for (var i = 0; i < imgSelectedItem.length; i++)
        {
            if ($("#firstthumb").attr("src") == imgSelectedItem[i])
                isExist = true
        }
        if (isExist == false)
            addSelectedItem()
        var a = $(".selectedItems").on()
        var b = $(a).children(".selectedItem")
        for (var i = 0; i < b.length; i++)
        {
            if ($(b[i]).children('img').attr('src') == $("#firstthumb").attr("src"))
            {
                var slItem = $(b[i])
                $(slItem).show()
                var sl = $(slItem).children('div').children('span').text()
                sl++
                $(slItem).children('div').children('span').text(sl)
                $(slItem).children('h5').text(thanhTien($(slItem).children('h4').text(), sl))
                total += chuoiBoCham($(slItem).children('h4').text())
                break
            }
        }
        GioTrong()
    })

    // Phần info giỏ hàng
    /$(".menu li:last-child").click(function(){
        $(".cover").hide()
        $(".exit").show()
        $(".infoCart").fadeIn(500)
        $("#text").fadeIn()
        $(".infoCart > img").hide()
        GioTrong()
        tinhTongTien()
    })
    $(".exit").click(function(){
        $(".cover").show()
        $(".infoCart").fadeOut(500)
        $("#text").fadeOut()
    })
    // Thêm bớt số lượng giỏ hàng
    $(".selectedItems").on('click', '.selectedItem .minus', function(){
        var sl = $(this).siblings('span').text()
        sl--
        $(this).siblings('span').text(sl)
        var tru = $(".menu span").text()
        tru--
        total -= chuoiBoCham($(this).parent('div').siblings('h4').text())
        tinhTongTien()
        $(".menu span").text(tru)
        if(sl == 0)
        {
            $(this).parent('div').parent('div').hide()
        }
        $(this).parent('div').siblings('h5').text(thanhTien($(this).parent('div').siblings('h4').text(), sl))
        GioTrong()
    })
    $(".selectedItems").on('click', '.selectedItem .plus', function(){
        var sl = $(this).siblings('span').text()
        sl++
        $(this).siblings('span').text(sl) 
        cong = $(".menu span").text()
        cong++
        total += chuoiBoCham($(this).parent('div').siblings('h4').text())
        tinhTongTien()
        $(".menu span").text(cong)
        $(this).parent('div').siblings('h5').text(thanhTien($(this).parent('div').siblings('h4').text(), sl))
    })
    
    // Tìm kiếm sản phẩm 
    $("#searchBtn").click(function(){
        $(".item").hide()
        // trả về đối tượng all
        var sortDT = $(".sortDT")[0]
        sortDT.checked = true
        // bỏ lọc thương hiệu
        var sortTH = $(".sortTH input")
        for (var i = 0; i < sortTH.length; i++)
            sortTH[i].checked = false
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
    // Xử lý sự kiện chọn vào sản phẩm
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
    // Xử lý sự kiện chọn vào thumb
    $(".thumb div img").click(function(){
        $(".thumb div img").css({"border-width": 0})
        $(".info .mainimage").attr("src",$(this).attr("src"))
        $(this).css({"border": "2px solid #937C69"})
    })
    // Nút thoát màn hình thông tin sản phẩm
    $(".exit").click(function() {
        $(".cover").show()
        $(".thumb div img").css({"border-width": 0})
        $("#firstthumb").css({"border-width" : 2})
        $(".info").fadeOut(500)
        $("#text").fadeOut()
    })
    // Sự kiện scroll
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
    // Nút go to top
    $("#go-to-top").click(function() {
        $("html, body").animate({
            scrollTop:0
        }, 1000);
    })
})