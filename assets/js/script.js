// 1
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,             // Default for desktop
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1          // Mobile: 0px - 599px
      },
      600: {
        items: 1          // Tablet: 600px - 999px
      },
      1000: {
        items: 1          // Desktop: 1000px and up
      }
    }
  });
});

