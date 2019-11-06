$(function(){

  $(".reviews-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7500,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: false
  });

  $('.burger-menu').on('click', function(){
    $('.page-navigation__list').slideToggle();
  });

});
