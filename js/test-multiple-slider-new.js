var main = function() {
  
  $('.slider-c').each(function(){
      console.log($(this).attr('id'));
      });
      
  $('.arrow-n').click(function() {
    console.log($(this).attr('id'));
    var currentSlide = $('.slide-c');
    var nextSlide = currentSlide.next();
    console.log(nextSlide);

    if(nextSlide.length === 0) {
      nextSlide = $('.slide-c').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide-c');
    nextSlide.fadeIn(600).addClass('active-slide-c');

  });
  $('.arrow-p').click(function() {
    console.log($(this).attr('id'));
    var currentSlide = $('.active-slide-c');
    var prevSlide = currentSlide.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide-c').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide-c');
    prevSlide.fadeIn(600).addClass('active-slide-c');
});

}

$(document).ready(main);