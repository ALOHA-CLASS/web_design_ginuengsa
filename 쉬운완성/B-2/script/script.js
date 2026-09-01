$(function() {
  // 가로 100% 멀티메뉴
  $(".main, .sub").on("mouseenter", function() { $(".sub").stop().slideDown(); });
  $(".main, .sub").on("mouseleave", function() { $(".sub").stop().slideUp(); });

  // 슬라이드(세로 무한반복)
  const speed = 500, time = 2000;
  const $slide = $(".slide");
  const $container = $(".slide-container");
  const size = $slide.height();
  $container.height(size * $slide.length);
  setInterval(function() {
    $container.animate({ top: -size }, speed, function() {
      $container.css("top", "0");
      $container.append($(".slide").first());
    });
  }, time);

  // 레이어 팝업
  $(".btn-modal").on("click", function() { $("#modal").toggle(); });
});
