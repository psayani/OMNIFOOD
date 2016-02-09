$(document).ready(function(){
    
    /*-- Sticky Navigation --*/  
    
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
            
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, 
    {
    offset: '60px'
    });
   
    /*-- Scroll Down Bottons --*/ 
   
    $('.js--scroll-to-plans').click (function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /*-- Scroll Navigation --*/ 
    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /*-- Animation on Scroll --*/ 
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {offset: '40%'});
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {offset: '40%'});
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    }, {offset: '40%'});
    
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    }, {offset: '40%'});
    
      /*-- Responsive Navigation --*/ 

    $('.js--mobile-nav-icon').click(function(){
        
        var nav= $('.js--main-nav');
        var icon= $('.js--mobile-nav-icon i');
        
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-ios-drag')){
            icon.addClass('ion-ios-close-empty');
            icon.removeClass('ion-ios-drag');
            
        } else{
            icon.addClass('ion-ios-drag');
            icon.removeClass('ion-ios-close-empty');
        }
        
        
    });
    
});




/* --

$(document).ready(function() {

$('h1').click (function(){
    $(this).css('background-color', '#ff0000');
});

});

--*/


    
