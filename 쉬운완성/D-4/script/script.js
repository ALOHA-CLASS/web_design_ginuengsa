$(function() {
  // 세로 100% 멀티메뉴
  $(".main, .sub").on("mouseenter", function() { $(".sub").stop().fadeIn(); });
  $(".main, .sub").on("mouseleave", function() { $(".sub").stop().fadeOut(); });

  // 슬라이드(페이드)
  let index = 0;
  const speed = 500, time = 2000;
  const $slide = $(".slide");
  const count = $slide.length;
  $slide.not(":first").hide();
  setInterval(function() {
    index = (index + 1) % count;
    $slide.fadeOut(speed);
    $slide.eq(index).fadeIn(speed);
  }, time);

  // 탭
  $(".menu-item").on("click", function() {
    $(".content-item").toggle();
    $(".menu-item").toggleClass("active");
  });

  // 레이어 팝업
  $(".btn-modal").on("click", function() { $("#modal").toggle(); });
});
