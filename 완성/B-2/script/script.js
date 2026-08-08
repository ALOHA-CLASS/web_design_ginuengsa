
$(function() {
    // 메뉴 슬라이드
    $(".main, .sub").on("mouseenter", function(){
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseleave", function(){
        $(".sub").stop().slideUp()
    })

    /* ------------------- 무한 반복 💛 ------------------- */
    
    // 이미지 슬라이드 - 세로 (💛무한반복) 
    // * 마지막 이미지가 슬라이드 되면 다시 첫 번째 이미지가 슬라이드 되는 방식
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

    
    

    
    

    
    // 레이어 팝업
    $(".btn-modal").on("click", function() {
        $("#modal").toggle();
    });

})