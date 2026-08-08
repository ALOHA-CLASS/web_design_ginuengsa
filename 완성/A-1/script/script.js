$(function() {
    /* ------------------- 💛메뉴 슬라이드💛 ------------------- */
    /* ------------------- ↔ 가로 멀티        ------------------- */
    $(".main-menu").on("mouseover", function(){
        // $(".sub-menu").stop().fadeIn()
        $(".sub-menu").stop().slideDown()
    })
    $(".main-menu").on("mouseout", function(){
        // $(".sub-menu").stop().fadeOut()
        $(".sub-menu").stop().slideUp()
    })
    /* ------------------- 💛이미지 슬라이드💛 ------------------- */
    /* ------------------- ↕ 세로 슬라이드      ------------------- */
    const speed = 500;
    const time = 3000;
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.height();
    const count = $slide.length;
    $container.height(size * count)
    setInterval(function() {
        $container.animate({
            top: -size
        }, speed, function() {
            $container.css('top','0')
            $container.append($(".slide").first());
        });
    }, time);
    /* ------------------- 💛 탭(공지+갤러리) 💛 ------------------- */
    $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").toggleClass("active")
    })
    /* ------------------- 💛 레이어 팝업 💛 ------------------- */
    $(".btn-modal").on("click", function() {
        $("#modal").toggle();
    });

})