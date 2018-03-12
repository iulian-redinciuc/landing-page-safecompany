function calcVH() {
    $('.section_wrapper').innerHeight( $(this).innerHeight() );
}
(function($) { 
  calcVH();
  $(window).on('orientationchange', function() {
    calcVH();
  });
})(jQuery);


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 3,
    mouseDrag: false,
    margin: 10,
    autoplay: true,
    loop: true
  });
});

$('#main_section .hero_item').click(function(){
  var clickedHero = $(this).attr("scroll-attr");

  $('html, body').animate({
      scrollTop: $("#" + clickedHero).offset().top
  }, 1000);
  return false;
});

$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

$(document).ready(function(){
  $('#nav-icon4').click(function(){
    if($(this).hasClass('open')) {
      $(".menu_overlay").fadeIn(500)
    } else {
      $(".menu_overlay").fadeOut(500)
    }
  })

})

$('.menu_overlay nav ul li a').click(function(){

  var clickedLink = $(this).attr('href');
  $(".menu_overlay").fadeOut(500)
  $('#nav-icon4').removeClass('open');
  $('html, body').animate({
      scrollTop: $(clickedLink).offset().top
  }, 1000);
  return false;
});