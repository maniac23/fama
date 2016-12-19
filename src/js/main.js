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
      verticalCentered: true,
      onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            console.log(index);
          }
    });
  });
// check if first-screen is visible & remove device frame from viewport
  $(window).scroll(function(){
    if($('.first-screen').hasClass('active')){
      $('.device').removeClass('device--visible');
    } else {
        $('.device').addClass('device--visible');
    }
    });
