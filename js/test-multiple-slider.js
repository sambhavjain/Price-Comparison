/*var slider = function() {
  
  $('.arrow-n').click(function() {
    var currentSlide = $('.active-slide-c');
    var nextSlide = currentSlide.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide-c').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide-c');
    nextSlide.fadeIn(600).addClass('active-slide-c');
  });

  $('.arrow-p').click(function() {
    var currentSlide = $('.active-slide-c');
    var prevSlide = currentSlide.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide-c').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide-c');
    prevSlide.fadeIn(600).addClass('active-slide-c');

  });

}
$(document).ready(main);*/

(function($) {
  $.fn.slider=function() {
    
    return this.each(function() {
      
      var slider_slide = $(this);
      var slide = slider_slide.children(".slide-c .active-slide-c ");
      var arrow_next = slide.children(".arrow-n");
      var arrow_prev = slide.children(".arrow-p");

      arrow_next.click(function() {
        var currentSlide = $('.active-slide-c');
        var nextSlide = currentSlide.next();

        if(nextSlide.length === 0) {
          nextSlide = slide.first();
        }
        
        currentSlide.fadeOut(600).removeClass('active-slide-c');
        nextSlide.fadeIn(600).addClass('active-slide-c');
      });

      arrow_prev.click(function() {
        var currentSlide = $('.active-slide-c');
        var prevSlide = currentSlide.prev();

        if(prevSlide.length === 0) {
          prevSlide = slide.last();
        }
        currentSlide.fadeOut(600).removeClass('active-slide-c');
        prevSlide.fadeIn(600).addClass('active-slide-c');
    });
   });
 };
}(jQuery));  

$(document).ready(function(){
  $('#m').slider();
  $('#w').slider();
  $('#e').slider();
  $('#h-a').slider();
});

