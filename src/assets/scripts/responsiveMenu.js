//***************************RESPONSIVE MENU**********************************************//

export var responsiveMenu = function() {

// Remove no-js class
  $('html').removeClass('no-js');

  $('#toggleMenu').on('click', function() {
        if ( $(this).hasClass('js-open') ) {
          $('#nav > ul > li:not(#toggleMenu)').removeClass('js-show-element');
          $(this).removeClass('js-open');
          $(this).attr('aria-expanded', false);
          $('#geoeuskadiNav').removeClass('js-expand-element');
          $('#nav').removeClass('js-position');
        } else {
          $('#nav > ul > li:not(#toggleMenu)').addClass('js-show-element');
          $(this).addClass('js-open');
          $(this).attr('aria-expanded', true);
          $('#geoeuskadiNav').addClass('js-expand-element');
          $('#nav').addClass('js-position');
        }
    return false; 
  })

// sub menu
// ------------------------

  // When interacting with a li that has a sub menu
  $('li:has("ul")').on('mouseover keyup click mouseleave', function(e) {

      console.log("test")

      // If either -
      // tabbing into the li that has a sub menu
      // hovering over the li that has a sub menu
    if ( e.keyCode === 9 | e.type === 'mouseover' ) {

      // Show sub menu
      $(this).children('ul').removeClass('js-hide-element');
      $(this).children('ul').addClass('js-show-element');
    }

    // If mouse leaves li that has sub menu
    if ( e.type === 'mouseleave' ) {

      // hide sub menu
      $(this).children('ul').removeClass('js-show-element');
      $(this).children('ul').addClass('js-hide-element');
    }

    // If clicking on li that has a sub menu
    if ( e.type === 'click' ) {

      // If sub menu is already open
      if ( $(this).children('a').hasClass('js-openSubMenu') ) {

        // remove Open class
        $(this).children('a').removeClass('js-openSubMenu');

        // Hide sub menu
        $(this).children('ul').removeClass('js-show-element');
        $(this).children('ul').addClass('js-hide-element');

      // If sub menu is closed
      } else {

        // add Open class
        $(this).children('a').addClass('js-openSubMenu');

        // Show sub menu
        $(this).children('ul').removeClass('js-hide-element');
        $(this).children('ul').addClass('js-show-element');
      }
    } // end click event
  });


  // Tabbing through Levels of sub menu
// ------------------------

  // If key is pressed while on the last link in a sub menu
  $('li > ul > li:last-child > a').on('keydown', function(e) {

    // If tabbing out of the last link in a sub menu AND not tabbing into another sub menu
    if ( (e.keyCode == 9) && $(this).parent('li').children('ul').length == 0 ) {

      // Close this sub menu
      $(this).parent('li').parent('ul').removeClass('js-show-element');
      $(this).parent('li').parent('ul').addClass('js-hide-element');


      // If tabbing out of a third level sub menu and there are no other links in the parent (level 2) sub menu
      if ( $(this).parent('li').parent('ul').parent('li').parent('ul').parent('li').children('ul').length > 0 
         && $(this).parent('li').parent('ul').parent('li').is(':last-child') ) {

          // Close the parent sub menu (level 2) as well
          $(this).parent('li').parent('ul').parent('li').parent('ul').removeClass('js-show-element');
          $(this).parent('li').parent('ul').parent('li').parent('ul').addClass('js-hide-element');
      }
    }
  })
};
