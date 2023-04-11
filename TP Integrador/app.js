$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();      
      var hash = this.hash;      
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        500,
        function () {
          window.location.hash = hash;
        }
      );
    } 
  });
});
/*-----------------------JS Carousel-------------------------------------*/
$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});
