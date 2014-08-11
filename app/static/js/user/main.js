/* global $, document*/

(function(){
  'use strict';

  $(document).ready(initialize);

 function initialize(){

   $('h2').css('color', 'red');
   $('h2').css('font-size', '50px');
   $('h2').text('JuanJob');
   $('#a, #b, #c').addClass('happy');
   $('#c + ul > li').addClass('sad');

   console.log('the dom is now ready!');

   $('#red').click(makeRed);
  }

  function makeRed(){
    alert('You are red');
  }
  console.log('the dom is NOT ready');

})();

