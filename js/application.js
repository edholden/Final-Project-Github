$(document).ready(function(){

$('.container').hide(); {  $(".flashimage").show(); }

function blink(){
    $('.flashimage').toggle( "pulsate", { times:100 } );
}

blink()


setTimeout(function() { 
        $('.flashimage').fadeOut(); $('.container').fadeIn(1300);
 }, 1500);

});
