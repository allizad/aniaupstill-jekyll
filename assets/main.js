import "./layout/*.js";

import "./main.scss";

import $ from 'jquery';
import slick from 'slick-carousel';

$( document ).ready(function() {
  $(".slider").slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: "<i class='icon-arrow-left slick-icon-position position-left'></i>",
    nextArrow: "<i class='icon-arrow-right slick-icon-position position-right'></i>",
    mobileFirst: true
  });
});
