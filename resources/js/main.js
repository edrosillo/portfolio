$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  });

(function ($) {
  "use strict";

  // manual carousel controls
  $('.next').click(function () { $('.carousel').carousel('next'); return false; });
  $('.prev').click(function () { $('.carousel').carousel('prev'); return false; });

})(jQuery);
