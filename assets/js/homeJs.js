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




    $(".cards-cont .trip-card .img-box").on("click", function () {
      $(".cards-cont .trip-card").removeClass("active")
      $(this).parent().addClass("active");
      $(".main-trip-content .years-cont").addClass("hide")


      // console.log(this , "index")
      
      // tripCard1
      if( $(".tripCard1").hasClass("active")){
        console.log("tripCard1");
        $(".main-trip-content .yr1").removeClass("hide")
      }
      else  if( $(".tripCard2").hasClass("active")){
        console.log("tripCard2");
        $(".main-trip-content .yr2").removeClass("hide")
      }
      else  if( $(".tripCard3").hasClass("active")){
        console.log("tripCard3");
        $(".main-trip-content .yr3").removeClass("hide")
      }
      else  if( $(".tripCard4").hasClass("active")){
        console.log("tripCard4");
        $(".main-trip-content .yr4").removeClass("hide")
      }
      else  if( $(".tripCard5").hasClass("active")){
        console.log("tripCard5");
        $(".main-trip-content .yr5").removeClass("hide")
      }
      else  if( $(".tripCard6").hasClass("active")){
        console.log("tripCard6");
        $(".main-trip-content .yr6").removeClass("hide")
      }



    })

    $(".trip-nav div").on("click", function () {
      // list
      // const trips = $(".cards-cont .trip-card ");
      // console.log(trips ,"trips");
      // // lenght
      // const tripsLenght = trips.length
      // console.log(tripsLenght , "tripsLenght");
      
      // get active trip
      var activeTrip = document.getElementsByClassName('active');
      const ourTrip = activeTrip[0] 
      // console.log(ourTrip , "ourTrip");

      // get index
      // var index = trips.indexOf(ourTrip);
      // console.log(index , "index");
      
      if( $(".cards-cont .trip-card ").hasClass("active")){
        if( $(this).hasClass("prev")){
          // console.log(this, "prev");

          if( $(ourTrip).hasClass("tripCard1")){
            console.log("tripCard1 prev");
          }
          else if( $(ourTrip).hasClass("tripCard2")){
            console.log("tripCard1 prev");
            $(".main-trip-content .years-cont").addClass("hide")
            $(".cards-cont .trip-card").removeClass("active")

            $(".cards-cont .trip-card.tripCard1").addClass("active")
            $(".main-trip-content .yr1").removeClass("hide")

          }
          else if( $(ourTrip).hasClass("tripCard3")){
            console.log("tripCard3 prev");
            $(".main-trip-content .years-cont").addClass("hide")
            $(".cards-cont .trip-card").removeClass("active")

            $(".cards-cont .trip-card.tripCard2").addClass("active")
            $(".main-trip-content .yr2").removeClass("hide")

          }
          else if( $(ourTrip).hasClass("tripCard4")){
            console.log("tripCard4 prev");
            $(".main-trip-content .years-cont").addClass("hide")
            $(".cards-cont .trip-card").removeClass("active")

            $(".cards-cont .trip-card.tripCard3").addClass("active")
            $(".main-trip-content .yr3").removeClass("hide")

          }
          else if( $(ourTrip).hasClass("tripCard5")){
            console.log("tripCard5 prev");
            $(".main-trip-content .years-cont").addClass("hide")
            $(".cards-cont .trip-card").removeClass("active")

            $(".cards-cont .trip-card.tripCard4").addClass("active")
            $(".main-trip-content .yr4").removeClass("hide")

          }
          else if( $(ourTrip).hasClass("tripCard6")){
            console.log("tripCard6 prev");
            $(".main-trip-content .years-cont").addClass("hide")
            $(".cards-cont .trip-card").removeClass("active")

            $(".cards-cont .trip-card.tripCard5").addClass("active")
            $(".main-trip-content .yr5").removeClass("hide")

          }
        }
        
        else if( $(this).hasClass("next")){
          // console.log(this, "next");

          if( $(ourTrip).hasClass("tripCard6")){
            console.log("tripCard6 xxxxxx");
          }
          else if( $(ourTrip).hasClass("tripCard5")){
            console.log("tripCard5 next");
            $(".main-trip-content .years-cont").addClass("hide")
            $(".cards-cont .trip-card").removeClass("active")

            $(".cards-cont .trip-card.tripCard6").addClass("active")
            $(".main-trip-content .yr6").removeClass("hide")

          }
          else if( $(ourTrip).hasClass("tripCard4")){
            console.log("tripCard4 next");
            $(".main-trip-content .years-cont").addClass("hide")
            $(".cards-cont .trip-card").removeClass("active")

            $(".cards-cont .trip-card.tripCard5").addClass("active")
            $(".main-trip-content .yr5").removeClass("hide")

          }
          else if( $(ourTrip).hasClass("tripCard3")){
            console.log("tripCard3 next");
            $(".main-trip-content .years-cont").addClass("hide")
            $(".cards-cont .trip-card").removeClass("active")

            $(".cards-cont .trip-card.tripCard4").addClass("active")
            $(".main-trip-content .yr4").removeClass("hide")

          }
          else if( $(ourTrip).hasClass("tripCard2")){
            console.log("tripCard2 next");
            $(".main-trip-content .years-cont").addClass("hide")
            $(".cards-cont .trip-card").removeClass("active")

            $(".cards-cont .trip-card.tripCard3").addClass("active")
            $(".main-trip-content .yr3").removeClass("hide")

          }
          else if( $(ourTrip).hasClass("tripCard1")){
            console.log("tripCard1 next");
            $(".main-trip-content .years-cont").addClass("hide")
            $(".cards-cont .trip-card").removeClass("active")

            $(".cards-cont .trip-card.tripCard2").addClass("active")
            $(".main-trip-content .yr2").removeClass("hide")

          }
        

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

