$(document).ready(function () {

    // Partners Slider 
    $('.owl-carousel-news').owlCarousel({
      loop: false,
      margin: 20,
      nav: false,
      dots: true,
      rtl: true,
      autoplay: false,
      responsive:{
        0:{
          items:1,
          slideBy:1,
        },
        575:{
          items:2,
          slideBy:2,
        },
        1000:{
          items:3,
          slideBy:3,
          margin: 15,
        },
        1400:{
          items:4,
          slideBy:1,
          
        }
      }
    })


});

jQuery(function ($) {
  "use strict";

  var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

  var $counters = $(".counter");

  /* Start counting, do this on DOM ready or with Waypoints. */
  $counters.each(function (ignore, counter) {
    var waypoint = new Waypoint({
      element: $(this),
      handler: function () {
        counterUp(counter, {
          duration: 2000,
          delay: 10,
        });
        // this.destroy();
      },
      offset: "bottom-in-view",
    });
  });
});

