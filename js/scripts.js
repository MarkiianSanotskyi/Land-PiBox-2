$(document).ready(function(){
   $('a[href*=#].header-bottom, a[href*=#].footer-logo, a[href*=#].to-top').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1400);
      e.preventDefault();
   });
   return false;
});

/*placeholder*/
$(document).ready(function(){
        //$.Placeholder.init({ color : "#797979" });
 });



 