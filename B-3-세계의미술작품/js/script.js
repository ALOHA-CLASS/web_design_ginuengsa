$(document).ready(function(){
    // 마우스오버 메뉴
      $('.navi > li').mouseover(function(){
        $(this).find('.subMenu').stop().slideDown(300);
      }).mouseout(function(){
        $(this).find('.subMenu').stop().slideUp(300);
      });
    
    // 이미지슬라이드 위 아래
    var imgs = 2;
    var now = 0;
    
    start();
    
    function start(){
      $(".imgSlide>a").eq(0).siblings().animate({marginTop:"-300px"});
    
      setInterval(function(){
        now = now==imgs ? 0 : now+=1;
        $(".imgSlide>a").eq(now-1).animate({marginTop:"-300px"});
        $(".imgSlide>a").eq(now).animate({marginTop:"0"});
      },3000);
    }
    
    
    // 레이어 팝업
      $('.notice li:first').click(function(){
        $('#modalWrap').addClass("active");
      });
      $('.btn').click(function(){
        $('#modalWrap').removeClass("active");
      });
    
    
    });