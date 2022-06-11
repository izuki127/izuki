$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
    });
    /* Id指定したものにスクロールで移動する機能 */
   $(function(){    
    $('.shopimg').slick({
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 400,
    });
});
  /* slickにより自動再生を実装 */