//***************************SCROLL UP FOR MOBILES**********************************************//

export var scrollUp = function () {
    $('.scrollup').hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $('.scrollup').fadeIn();
      } else {
        $('.scrollup').fadeOut();
      }
    });
  
    $('.scrollup').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });
};