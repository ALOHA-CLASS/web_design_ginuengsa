$(function() {
    /* ------------------- 💛메뉴 슬라이드💛 ------------------- */
    /* ------------------- ↔ 가로 100% 멀티   ------------------- */
    $(".main, .sub").on("mouseenter", function(){
        // $(".sub").stop().fadeIn()
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseleave", function(){
        // $(".sub").stop().fadeOut()
        $(".sub").stop().slideUp()
    })
    /* ------------------- 💛이미지 슬라이드💛 ------------------- */
    /* ------------------- ↔ 가로 슬라이드      ------------------- */
    const speed = 500;
    const time = 3000;
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.width();
    const count = $slide.length;
    $container.width(size * count)
    
    setInterval(function() {
        $container.animate({
            left: -size
        }, speed, function() {
            $container.css('left','0')
            $container.append($(".slide").first());
        } );
    }, time);
    /* ------------------- 💛 레이어 팝업 💛 ------------------- */
    $(".btn-modal").on("click", function() {
        $("#modal").show();
    });

    $(".close").on("click", function() {
        $("#modal").hide();
    });
})