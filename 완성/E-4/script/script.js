
$(function() {
    // 메뉴 슬라이드
    $(".main-menu li").on("mouseover", function(){
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function(){
        
        $(this).find(".sub-menu").stop().slideUp()
    })

    // 이미지 슬라이드 - 가로 (💛무한반복) 
    // * 마지막 이미지가 슬라이드 되면 다시 첫 번째 이미지가 슬라이드 되는 방식
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
    
    // 레이어 팝업
    $(".btn-modal").on("click", function() {
        $("#modal").toggle();
    });

})