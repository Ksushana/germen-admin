$(document).ready(function(){
  $('#courierCheck').click(function(){
      if($(this).prop("checked") == true){
        $('.courier-order-info__btn .courier__btn').removeClass( "disabled" )
      }
      else if($(this).prop("checked") == false){
        $('.courier-order-info__btn .courier__btn').addClass( "disabled" )
      }
  });
});

$(document).ready(function(){
  $('.courier-contacts__btn .courier__btn').click(function(){
    $('.courier-tabs__link--second').addClass( "js-tabs__title-active" );
    $('.courier-tabs__link--first').removeClass( "js-tabs__title-active" );
    $(".courier-tabs__content--first").css("opacity", "0");
    $(".courier-tabs__content--first").css("display", "none");
    $(".courier-tabs__content--second").css("opacity", "1");
    $(".courier-tabs__content--second").css("display", "block");
  });
});