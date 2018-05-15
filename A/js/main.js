$( document ).ready(function() {

  $('.nav-button').on('click' , function(){
      $('body').toggleClass('slide')
  });

  $('.navigasi').children().on('click',function(){
 			$('body').toggleClass('slide')
 		});

  $(function(){
    smoothScroll(1000);
  });
  function smoothScroll (duration) {
    $('a[href^="#"]').on('click', function(event) {
        var target = $( $(this).attr('href') );
        if( target.length ) {
           event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 61
            }, duration);
        }
    });
   }


   $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

        if(wScroll >= $('.page-1').offset().top - 80  && wScroll < $('.page-2').offset().top - 80 ){
            $('.nav-1').addClass('nav-active');
          }
          else{
           $('.nav-1').removeClass('nav-active');
          }
        if(wScroll >= $('.page-2').offset().top - 80  && wScroll < $('.page-3').offset().top - 80 ){
            $('.nav-2').addClass('nav-active');
          }
          else{
           $('.nav-2').removeClass('nav-active');
          }

        if(wScroll >= $('.page-3').offset().top - 80  && wScroll < $('.page-4').offset().top - 80 ){
            $('.nav-3').addClass('nav-active');
          }
          else{
           $('.nav-3').removeClass('nav-active');
          }

        if(wScroll >= $('.page-4').offset().top - 80  && wScroll < $('.page-5').offset().top/1.1 ){
            $('.nav-4').addClass('nav-active');
          }
          else{
           $('.nav-4').removeClass('nav-active');

          }

        if(wScroll >= $('.page-5').offset().top/1.1   ){
            $('.nav-5').addClass('nav-active');
          }
          else{
           $('.nav-5').removeClass('nav-active');
           
          }


        
        
    });
   

      
    
  });



