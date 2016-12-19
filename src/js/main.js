'use strict';
//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/fullpage.js/dist/jquery.fullpage.min.js

$(document).ready(function() {
    $('#fullpage').fullpage({
      navigation: true,
      navigationPosition: 'left',
      css3: true,
      easingcss3: 'ease-in-out',
      scrollingSpeed: 1000,
    });
});
