$(function(){

  $(".reviews-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7500,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]  
  });

  $('.burger-menu').on('click', function(){
    $('.page-navigation__list').slideToggle();
  });

});
