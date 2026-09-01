$(function() {
  // 세로 아래메뉴
  $(".main-menu li").on("mouseover", function() { $(this).find(".sub-menu").stop().slideDown(); });
  $(".main-menu li").on("mouseout", function() { $(this).find(".sub-menu").stop().slideUp(); });

  // 슬라이드(가로 무한반복)
  const speed = 500, time = 2000;
  const $slide = $(".slide");
  const $container = $(".slide-container");
  const size = $slide.width();
  $container.width(size * $slide.length);
  setInterval(function() {
    $container.animate({ left: -size }, speed, function() {
      $container.css("left", "0");
      $container.append($(".slide").first());
    });
  }, time);

  // 레이어 팝업
  $(".btn-modal").on("click", function() { $("#modal").toggle(); });
});
