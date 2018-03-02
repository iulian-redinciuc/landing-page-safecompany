function calcVH() {
    $('.top_section_wrapper').innerHeight( $(this).innerHeight() );
}
(function($) { 
  calcVH();
  $(window).on('orientationchange', function() {
    calcVH();
  });
})(jQuery);


