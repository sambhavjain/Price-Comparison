$.each('.slider-c',function(){
	var _id = $(this).attr('id');
	$('.arrow-p').click(function(){
		var currentSlide = $('.active-slide-c');
    	var prevSlide = currentSlide.prev();
    	console.log(prevSlide);

    	currentSlide.fadeOut(600).removeClass('active-slide-c');
        prevSlide.fadeIn(600).addClass('active-slide-c');
	});
	
	$('.arrow-n').click(function(){
		var currentSlide = $('.active-slide-c');
    	var nextSlide = currentSlide.next();
    	console.log(nextSlide);
	 	
	 	currentSlide.fadeOut(600).removeClass('active-slide-c');
    	nextSlide.fadeIn(600).addClass('active-slide-c');

	});
});