$(document).ready(function() {
  $(window).scroll( function(){
      $('.fadedown').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object ){
              $(this).addClass('showme');
          }
          if( bottom_of_window < bottom_of_object ){
              $(this).removeClass('showme');
          }
      });
  });
});

$('.navbar-brand').css('display', 'none');
$('.navbar-brand').fadeIn(1500);

$('.nav-item').css('display', 'none');
$('.nav-item').fadeIn(2500);

$('.hero h1').css('display', 'none');
$('.hero h1').fadeIn(3500);

$('.hero h3').css('display', 'none');
$('.hero h3').fadeIn(4500);

$('.hero img').css('display', 'none');
$('.hero img').fadeIn(4500);

$('.hero-foot').css('display', 'none');
$('.hero-foot').fadeIn(4500);

