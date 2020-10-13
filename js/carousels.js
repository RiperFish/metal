$(document).ready(function () {
  /* HERO CAROUSELS START */
  $('.carrousel').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    lazyLoad: 'ondemand',
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  /* $('.carousel__mobile').slick({
    dots: true,
    prevArrow: '#prev',
    nextArrow: '#next',
    lazyLoad: 'ondemand',
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
  }); */
  /* HERO CAROUSELS END */
});