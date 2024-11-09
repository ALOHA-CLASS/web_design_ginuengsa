
$(function() {
    // 메뉴 슬라이드
    $(".main-menu li").on("mouseover", function(){
        // $(this).find(".sub-menu").stop().fadeIn()
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function(){
        // $(this).find(".sub-menu").stop().fadeOut()
        $(this).find(".sub-menu").stop().slideUp()
    })

    // 이미지 슬라이드 - 세로
    // let index = 0;
    // const speed = 500;
    // const time = 3000;
    // const $slide = $(".slide")
    // const $container = $(".slide-container")
    // const size = $slide.height();
    // const count = $slide.length;
    // $container.height(size * count)
    
    // setInterval(function() {
    //     index = (index + 1) % count;
    //     $container.animate({
    //         top: -index * size
    //     }, speed);
    // }, time);

    // 이미지 슬라이드 - 가로
    // let index = 0;
    // const speed = 500;
    // const time = 3000;
    // const $slide = $(".slide")
    // const $container = $(".slide-container")
    // const size = $slide.width();
    // const count = $slide.length;
    // $container.width(size * count)
    
    // setInterval(function() {
    //     index = (index + 1) % count;
    //     $container.animate({
    //         left: -index * size
    //     }, speed);
    // }, time);
    

    // 페이드 슬라이드
    let index = 0;
    const speed = 500;
    const time = 3000;
    const $slide = $(".slide")
    const count = $(".slide").length;
    $slide.not(":first").hide()
    
    setInterval(function() {
        index = (index + 1) % count;
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    }, time);
    

    // 탭 기능
    // $("#btn-notice").on("click", function() {
    //     $("#content-notice").show()
    //     $("#content-gallery").hide()
    //     $(".menu-item").removeClass("active")
    //     $(this).parent().addClass("active")
    // })
    // $("#btn-gallery").on("click", function() {
    //     $("#content-notice").hide()
    //     $("#content-gallery").show()
    //     $(".menu-item").removeClass("active")
    //     $(this).parent().addClass("active")
    // })

    // 레이어 팝업
    $(".btn-modal").on("click", function() {
        $("#modal").show();
    });

    $(".close").on("click", function() {
        $("#modal").hide();
    });

})