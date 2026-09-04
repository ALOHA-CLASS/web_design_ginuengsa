$(function() {
  // 세로 아래메뉴
  // 메인메뉴 하나에 마우스 올렸을 때,
  // - 해당 서브메뉴만 슬라이드 다운
  $(".main-menu li").on("mouseover", function() {
    $(this).find(".sub-menu").stop().slideDown()
  })
  // 메인메뉴 하나에 마우스 벗어날 때,
  // - 해당 서브메뉴만 슬라이드 업
  $(".main-menu li").on("mouseout", function() {
    $(this).find(".sub-menu").stop().slideUp()
  })

  // 페이드 슬라이드
  // - index 0
  let index = 0
  // - 속도 500 시간 2000
  const speed = 500, time = 2000;
  // - 슬라이드 선택
  const $slide = $(".slide")
  // - 슬라이드 개수
  const count = $slide.length
  // - 첫 슬라이드 빼고 숨김
  $slide.not(":first").hide()
  // - 타이머 함수
  //    * 페이드 효과
  //      - index : 0 1 2 순환
  //      - 슬라이드 페이드 아웃
  //      - index 슬라이드 페이드 인
  //    * time
  setInterval(() => {
    index = (index + 1) % count
    $slide.fadeOut(speed)
    $slide.eq(index).fadeIn(speed)
  }, time);

  // 탭
  // - 탭 메뉴 클릭 시,
  //  - 탭 컨텐츠 토글
  //  - 탭 메뉴 active 클래스 토글
  $(".menu-item").on("click", function() {
    $(".content-item").toggle()
    $(".menu-item").toggleClass("active")
  })

  // 레이어 팝업
  // - [공지사항 1번글]/[닫기] 클릭 시,
  //  - 레이어 팝업 토글
  $(".btn-modal").on("click", function() {
    $("#modal").toggle()
  })
})