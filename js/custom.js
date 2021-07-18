/*=====================================================
    ---- BUTTONS GENERAL ----
=====================================================*/
$(function () {
  // This will initiate the WOW plugin.
  new WOW().init();
});

/*=====================================================
    ---- WORK Images ----
=====================================================*/
$(function () {
  $("#work").magnificPopup({
    delegate: "a", //child item selector, by clicking on it pop up will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

/*=====================================================
    ---- Carousel ----
=====================================================*/

$(function () {
  $(".team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 800,
    loop: true,
    autoplayHoverPause: true,
    autoplaySpeed: 900,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      480: {
        items: 1,
      },
      // breakpoint from 768 up
      768: {
        items: 2,
      },
      // breakpoint from 768 up
      991: {
        items: 3,
      },
    },
  });
});

$(function () {
  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 800,
    loop: true,
    autoplayHoverPause: true,
    autoplaySpeed: 900,
  });
});
$(function () {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 800,
    loop: true,
    autoplayHoverPause: true,
    autoplaySpeed: 900,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      480: {
        items: 3,
      },
      // breakpoint from 768 up
      768: {
        items: 5,
      },
      // breakpoint from 992 up
      992: {
        items: 6,
      },
    },
  });
});

/*=====================================================
    ---- Counter ----
=====================================================*/

$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 3000,
  });
});

/*=====================================================
    ---- Navigation ----
=====================================================*/

//To show/hide the navigation bar background

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      $("nav").removeClass("vesco-top-nav");
      $(".back-to-top").fadeOut();
    } else {
      $("nav").addClass("vesco-top-nav");
      $(".back-to-top").fadeIn();
    }
  });
});

//Smooth Scrolling

$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    //get / return id likes #home, #work... etc
    var section = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(section).offset().top - 50,
      },
      1250,
      "easeInOutExpo"
    );
  });
});

//Navbar closing on clicking menu options

$(function () {
  $(".navbar-collapse ul li a").on("click touch", function () {
    $(".navbar-toggle").click();
  });
});
