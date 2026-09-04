$(function() {
  // 가로 100% 멀티메뉴
  // - 메인/서브메뉴 마우스 들어올 때, 서브메뉴 슬라이드 다운
  $(".main, .sub").on("mouseover", function() {
    $(".sub").stop().slideDown()
  })
  // - 메인/서브메뉴 마우스 나갈때 때, 서브메뉴 슬라이드 업
  $(".main, .sub").on("mouseout", function() {
    $(".sub").stop().slideUp()
  })


  // 가로 슬라이드
  // - 속도 500 시간 2000
  const speed = 500, time = 2000
  // - 슬라이드 선택
  const $slide = $(".slide")
  // - 슬라이드 컨테이너 선택
  const $container = $(".slide-container")
  // - 슬라이드 크기
  const size = $slide.width()
  // - 슬라이드 컨테이너 크기 = 슬라이드 크기 * 3
  $container.width(size * $slide.length)
  // - 타이머 함수
  //    * 컨테이너에 애니메이션
  컨테이너//    - animate( 1, 2, 3 )
  //    - 1. { left : -size }
  //    - 2. speed
  //    - 3. 종료 
  //      - 제자리
  //      - 첫 슬라이드를 맨 뒤에 추가
  //    * time
  setInterval(() => {
    $container.animate({ left: -size }, speed, function(){
      $container.css("left", "0")
      $container.append( $(".slide").first() )
    })
  }, time);

  // 레이어 팝업
  // - [공지사항 1번글]/[닫기] 클릭 시,
  //  - 레이어 팝업 토글
  $(".btn-modal").on("click", function() {
    $("#modal").toggle()
  })
})