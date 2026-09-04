$(function() {
  // 세로 100% 멀티메뉴
  // 메인/서브 마우스 올렸을 때,
  // - sub 메뉴 페이드인
  $(".main, .sub").on("mouseover", function() {
    $(".sub").stop().fadeIn()
  })

  $(".main, .sub").on("mouseout", function() {
    $(".sub").stop().fadeOut()
  })

  // 페이드 슬라이드
  let index = 0
  const speed = 500, time = 2000
  const $slide = $(".slide")
  const count = $slide.length
  $slide.not(":first").hide()
  setInterval(() => {
    index = (index + 1) % count
    $slide.fadeOut(speed)
    $slide.eq(index).fadeIn(speed)
  }, time);

  // 탭
  $(".menu-item").on("click", function() {
    $(".content-item").toggle()
    $(".menu-item").toggleClass("active")
  })

  // 레이어 팝업
  $(".btn-modal").on("click", function() {
    $("#modal").toggle()
  })
  
})