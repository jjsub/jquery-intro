/*globla $, document */

(function(){
  'use stric';
  //this is the same the other function just without naming

 $(document).ready(function(){
   $('#add-boxes').click(addBoxes);
 });

 function addBoxes(){
   var num = $('#box-num').val *1;
   for(var i = 0; i<num; i++){
     var $box = $('<div>');
      $box.text(i);
   }
 }

})();

