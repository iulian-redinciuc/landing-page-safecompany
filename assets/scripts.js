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