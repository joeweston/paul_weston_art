import '../styles/index.scss';
import 'lightbox2/dist/css/lightbox.min.css';


import $ from "jquery";

import lightbox from "lightbox2";


$(document).ready(function() {

  lightbox.option({
    'fitImagesInViewport' : true,
    'wrapAround' : true
  });

  //let screenWidth = window.innerWidth;

  let logoHeight = parseInt($("h1").css("height").slice(0, -2));


  $(window).scroll(function(){
  $("#header").css("top", function(){
    if (window.innerWidth < 620){
      return 0;
    }
    let scroll = $(window).scrollTop();
    if(scroll<290){
      return 0;
    } else if (scroll > 732){
      let logoHeight = parseInt($("h1").css("height").slice(0, -2));
      return -logoHeight;
    }
    return (290 - scroll)/5;
    });
  });


});

