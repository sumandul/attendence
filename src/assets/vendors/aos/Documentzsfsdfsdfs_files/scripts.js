// A $( document ).ready() block.
$(document).ready(function () {
  // heroslider
  $(".hero .owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    items: 1,
  });

  // hide overlay thumbnai in video
  $(".videos .thumb").click(function () {
    $(this).hide();
    $(this)
      .parent()
      .find("iframe")
      .attr("src", $(this).parent().find("iframe").attr("src") + "?autoplay=1");
  });

  // partner slider
  $(".partners .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // aos animation initialize
  AOS.init();

  // videoGallery
  $(".videoList .item").click(function () {
    var url = $(this).data("url");

    if ($(this).hasClass("active")) {
      removeActiveClass();
    }
    $(this).addClass("active");
    $(".videoList .item").not(this).removeClass("active");
    $(".video .video-player").attr("src", url);
    $(this)
      .closest(".videos")
      .find("iframe")
      .attr("src", url + "?autoplay=1");
  });
  var firstVideo = $(".videoList .item:first-child").data("url");
  $(".videos iframe").attr("src", firstVideo);

  function removeActiveClass() {
    $(".videoList .item").removeClass("active");
  }

  //navbartoggler

  $("header .navbar-toggler").click(function () {
    $(this).find("i").toggleClass("la-bars la-times");
  });
});
