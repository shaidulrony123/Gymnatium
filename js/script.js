$(function () {

  'use strict'

  // **********************************
  //       banner slider start
  //  ***********************************

  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });

  // **********************************
  //        banner slider end
  //  ***********************************



  // **********************************
  //       veno box slider start
  //  ***********************************

  $('.venobox').venobox();

  // **********************************
  //        veno box slider end
  //  ***********************************



  // **********************************
  //       testimonal slider start
  //  ***********************************

  $('.testi_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // **********************************
  //        testimonal slider end
  //  ***********************************


  // **********************************
  //       count up slider start
  //  ***********************************

  $('.counterr').counterUp({
    delay: 10,
    time: 1000
  });

  // **********************************
  //        count up slider end
  //  ***********************************


  // **********************************
  //       client_logo slider start
  //  ***********************************

  $('.client_logo_main').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: '<i class="fas fa-chevron-right nextarrow"></i>',
    prevArrow: '<i class="fas fa-chevron-left prevarrow"></i>',
  });

  // **********************************
  //        client_logo slider end
  //  ***********************************

  // **********************************
  //       team slider start
  //  ***********************************

  $('.team_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // **********************************
  //        team slider end
  //  ***********************************







});