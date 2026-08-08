
$(function() {
    // 메뉴 슬라이드
    $(".main, .sub").on("mouseenter", function(){
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseleave", function(){
        $(".sub").stop().slideUp()
    })
    
    // 이미지 슬라이드 - 세로
    let index = 0;
    const speed = 500;
    const time = 3000;
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.height();
    const count = $slide.length;
    $container.height(size * count)
    
    setInterval(function() {
        index = (index + 1) % count;
        $container.animate({
            top: -index * size
        }, speed);
    }, time);

    // 레이어 팝업
    $(".btn-modal").on("click", function() {
        $("#modal").toggle();
    });

})