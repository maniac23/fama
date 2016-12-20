'use strict';
//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/fullpage.js/dist/jquery.fullpage.min.js

//
$(document).ready(function() {
  // initialize fullscreen scroll
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'left',
    css3: true,
    easingcss3: 'ease-in-out',
    scrollingSpeed: 1000,
    scrollBar: true,
    // verticalCentered: true,
    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);
      console.log(index);
    }
  });

  // toggle mobile-menu
  $('.menu-icon').click(function(){
    $(this).toggleClass('menu-icon--opened');
    $('.mobile-menu').fadeToggle().css('display', 'flex');
  });

  // hide mobile menu on link click

  $('.mobile-menu a, .mobile-menu button').click(function(){
    $('.menu-icon').removeClass('menu-icon--opened');
    $('.mobile-menu').fadeOut();
  })
});
// check if first-screen is visible & remove device frame from viewport
$(window).scroll(function() {
  if ($('.first-screen').hasClass('active')) {
    $('.device').removeClass('device--visible');
  } else if ($('.fifth-screen').hasClass('active')) {
    $('.device').addClass('device--full-visible');
  } else {
    $('.device').removeClass('device--full-visible');
    $('.device').addClass('device--visible');
  }
});
