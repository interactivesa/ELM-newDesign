$(document).ready(function () {
  
  if ($(window).width() > 992) {
    $(".navbarMenu  .dropdown").hover(
      function () {
        $(this).find(".dropdown-menu").first().stop(true, true).slideDown(150);
        $(this).children(".dropdown-toggle").addClass("active");
      },
      function () {
        $(this).find(".dropdown-menu").first().stop(true, true).slideUp(105);
        $(this).children(".dropdown-toggle").removeClass("active");
      }
    );
  }
   
});


// $(".leadershipCard .btns-box .cv-open").on("click", function () {
//   console.log("opened");
//   $(this).closest(".leadershipCard").children(".hidden-popup").addClass("show");
//   $(this).closest(".col-lg-6").addClass("full-width");
  
// })

// $(".leadershipCard .hidden-popup .close").on("click", function () {
//   console.log("close");
//   $(this).parent(".hidden-popup").removeClass("show");
//   $(this).closest(".col-lg-6").removeClass("full-width");
  
// })