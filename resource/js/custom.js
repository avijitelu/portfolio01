$(function(){
    
    
/*====================== Smooth Scrolling Plugins ==================*/
    
    var scroll = new SmoothScroll('a[href*="#"]',{
        speed: 1000,
        easing: 'easeOutQuart',
    });
    
/*====================== Sticky Header ==================*/
    $(window).on('scroll', function(){
       if($(window).scrollTop() > 50){
           $('.header_area').addClass('scrollActive');
       } else {
           $('.header_area').removeClass('scrollActive');
       }
    });
    
    
});