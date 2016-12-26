'use strict';
//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/fullpage.js/dist/jquery.fullpage.min.js

//
$(document).ready(function() {
  // initialize fullscreen scroll
  $('#fullpage').fullpage({
    menu: '#menu',
    navigation: true,
    navigationPosition: 'left',
    anchors: ['famaapp', 'revista', 'tests', 'autographs', 'descargar'],
    css3: true,
    easingcss3: 'ease-in-out',
    scrollingSpeed: 1000,
    scrollBar: true,
    // verticalCentered: true,
    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);
      console.log(nextIndex);
      if(nextIndex == 1) {
        $('.device').removeClass('device--visible');
      }
    }
  });

  // toggle mobile-menu
  $('.menu-icon').click(function() {
    $(this).toggleClass('menu-icon--opened');
    $('.mobile-menu').fadeToggle().css('display', 'flex');
    $('#fp-nav').fadeToggle();
  });

  // hide mobile menu on link click

  $('.mobile-menu a, .mobile-menu button').click(function() {
    $('.menu-icon').removeClass('menu-icon--opened');
    $('.mobile-menu').fadeOut();
  });


  // check if first-screen is visible & remove device frame from viewport
  $(window).scroll(function() {
    if ($('.first-screen').hasClass('active')) {
      $('.device').removeClass('device--visible, device--full-visible');
    } else if($('.second-screen').hasClass('active')) {
      $('.device').addClass('device--visible');
      $('.device__slide').removeClass('device__slide--visible');
    } else if($('.third-screen').hasClass('active')) {
      $('.device__slide').removeClass('device__slide--visible');
      $('#slide2').addClass('device__slide--visible');
    } else if ($('.fourth-screen').hasClass('active')) {
      $('#slide4').removeClass('device__slide--visible');
      $('#slide3').addClass('device__slide--visible');
      $('.device').removeClass('device--full-visible');
    }
    else if ($('.fifth-screen').hasClass('active')) {
      $('.device').addClass('device--full-visible');
      $('#slide4').addClass('device__slide--visible');
    }
    else {
      $('.device').removeClass('device--full-visible');
      $('.device').removeClass('device--visible');
    }
  });

  // open hero-form
  $('button[data-id="hero"]').click(function() {
    $('#hero-form').fadeIn().css('display', 'flex');
  });

  // open proponer form
  $('button[data-id="proponer"]').click(function() {
    $('#proponer-form').fadeIn().css('display', 'flex');
  });

  // open contacto form
  $('button[data-id="contacto"]').click(function() {
    $('#contacto-form').fadeIn().css('display', 'flex');
  });

  // close form
  $('.close').click(function() {
    $(this).parent().fadeOut();
  });

  $('button[type="submit"]').click(function(e) {
    e.preventDefault();
    $('.form--success').fadeIn().css('display', 'flex');
    $(this).parent('form').submit();
  });
});
