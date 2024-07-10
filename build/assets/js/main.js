(function ($) {
  "use strict";

  $(window).ready(function () {
    $(".tractour-loader").fadeOut();
    $("#spinner").delay(200).fadeOut("slow");
  });

  new WOW().init();
})(jQuery);
