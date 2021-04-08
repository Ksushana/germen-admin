'use strict';

// (function () {
//   var headerDropdown = document.querySelector('.header__dropdown');
//   var headerAccount = document.querySelector('.header__account');
//   if (!headerDropdown) {
//     return;
//   }
//   headerAccount.addEventListener("click", function() {
//     headerDropdown.classList.add("is-shown")
//   });



// })();
jQuery(function($){
  $( ".header__account" ).click(function() {
    $( ".header__dropdown" ).addClass( "is-shown" )
  });
  $(document).mouseup(function (e){
      var block = $(".header__dropdown");
      if (!block.is(e.target)
          && block.has(e.target).length === 0) {
            $( ".header__dropdown" ).removeClass( "is-shown" )
      }
  });
});