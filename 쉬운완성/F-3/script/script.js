$(function() {
  // 가로 100% 멀티메뉴
  $(".main, .sub").on("mouseenter", function() { $(".sub").stop().slideDown(); });
  $(".main, .sub").on("mouseleave", function() { $(".sub").stop().slideUp(); });

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

  // 탭
  $(".menu-item").on("click", function() {
    $(".content-item").toggle();
    $(".menu-item").toggleClass("active");
  });

  // 레이어 팝업
  $(".btn-modal").on("click", function() { $("#modal").toggle(); });
});
