
$(function() {
    // 메뉴 슬라이드
    $(".main, .sub").on("mouseenter", function(){
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseleave", function(){
        $(".sub").stop().slideUp()
    })

    // 이미지 슬라이드 - 가로
    let index = 0;
    const speed = 500;
    const time = 3000;
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.width();
    const count = $slide.length;
    $container.width(size * count)
    
    setInterval(function() {
        index = (index + 1) % count;
        $container.animate({
            left: -index * size
        }, speed);
    }, time);

    // 탭 기능
    $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").toggleClass("active")
    })

    // 레이어 팝업
    $(".btn-modal").on("click", function() {
        $("#modal").toggle();
    });

})