(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '.sideNav'
  });

})(jQuery); // End of use strict

$(document).ready(function(){
    $("#dev-d").show();
    $("#pen-d").hide();
    $("#dev").click(setDev);
    $("#pen").click(setPen);

    $("#marker-pen").click(setPen);
    $("#marker-dev").click(setDev);


    $('#nav-expander').click(function(){
      $("#tNav").show(800);
      $("body").removeClass("ttbody");
      $("body").addClass("tbody");
      $("#nav-expander").removeClass("hideki");
      $("#nav-expander").addClass("hidekiHI");

    });
    $('#pingu').click(function(){
      $("#tNav").hide(800);
      $("body").removeClass("tbody");
      $("body").addClass("ttbody");
      $("#nav-expander").removeClass("hidekiHI");
      $("#nav-expander").addClass("hideki");

    });

});

function setDev(){
  $("#dev").addClass("active");
  $("#pen").removeClass("active");
  $("#marker-dev").addClass("bg-primary");
  $("#marker-pen").removeClass("bg-primary");
  $("#dev-d").show();
  $("#pen-d").hide();
}

function setPen(){
  $("#pen").addClass("active");
  $("#dev").removeClass("active");
  $("#marker-pen").addClass("bg-primary");
  $("#marker-dev").removeClass("bg-primary");
  $("#dev-d").hide();
  $("#pen-d").show();
}