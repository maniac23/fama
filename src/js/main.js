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
    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);
      if(nextIndex == 1) {
        $('.device').removeClass('device--visible');
        // device slide scroll animation
      } else if (index != 1 && direction == 'down') {
        $('.device__slide').css('transform', 'translateX(' + (-100 * index + 100) + '%)');
      } else if (index != 1 && direction == 'up') {
        $('.device__slide').css('transform', 'translateX(' + (200 - nextIndex * 100) + '%)');
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
    } else if ($('.fourth-screen').hasClass('active')) {
      $('.device').removeClass('device--full-visible');
    } else if ($('.fifth-screen').hasClass('active')) {
      $('.device').addClass('device--full-visible');
    } else {
      $('.device').removeClass('device--full-visible');
      $('.device').addClass('device--visible');
    }
  });

  function showPopup(text) {
    $('.form--success').fadeIn().css('display', 'flex');
    $('.form--success h2').text(text);
  }

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

  // form submit
  $('button[type="submit"]').click(function(e) {
    e.preventDefault();
    showPopup('¡Gracias por tu mensaje');
    $(this).parent('form').submit();
  });



  // reset-password form

  $('#reset-form').on('submit', function(e) {
    e.preventDefault();
    var pass = $('#reset-form input[name="password"]').val();
    var passCheck = $('#reset-form input[name="password_check"]').val();
    var currentUrl = window.location.href;
    // выбираем токен из url
    var token = new URL(currentUrl).href.split('&').filter(function(el) {if(el.match('token') !== null) return true; })[0].split('=')[1];
    var url = 'http://fama-dev.blak-it.com/api/change_password';
    // проверяем совпадают ли пароли
    if(pass !== "" && passCheck !== "" && pass === passCheck) {
      // если ок, то отправляем запрос
      $.ajax({
        type: 'POST',
        contentType: "application/x-www-form-urlencoded",
        url: url,
        crossDomain : true,
        data: {
          'token': token,
          'password': pass
        },
        dataType : "json",
        success: function () {
          showPopup('Su contraseña ha cambiado con suceso.');
        },
        error: function(error){
          showPopup('¡Disculpe! Algo ha salido mal. Inténtalo mas tarde.');
        }
      });
    } else {
      // если нет, то просим ввести заново
      showPopup('Las contraseñas introducidas no coinciden!');
      // сбрасываем введенные значения
      $('#reset-form input[name="password"]').val("");
      $('#reset-form input[name="password_check"]').val("");
    }
  });
});
