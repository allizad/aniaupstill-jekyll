import "./layout/*.js";

import "./main.scss";

import $ from 'jquery';
import slick from 'slick-carousel';

$( document ).ready(function() {
  $(".slider").slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000
  });
});
