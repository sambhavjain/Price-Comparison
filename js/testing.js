//call slider function on hover 
function start_slider(){
	$('.slider-cat m show').show('fade',500);
	
	$('.slider-cat w show').show('fade',1000);
	
	$('.slider-cat e show').show('fade',1500);

	$('.m').hover(function(){
		$('.slider-cat m ').delay(3000).hide('slide',{direction:'left'},500);
		slider();
	});
	$('.w').hover(function(){
		$('.slider-cat w ').delay(3000).hide('slide',{direction:'left'},500);
		slider();
	});
	$('.e').hover(function(){
		$('.slider-cat e ').delay(3000).hide('slide',{direction:'left'},500);
		slider();
	});
}
	
function slider() {
	
	var slide_count = $('slide-cat img').size();
	var count = 2;

	//$.each('.slider-cat',function(){
		setInterval(function(){
			$('.slider-cat #'+count).show('slide',{direction:'right'},500);
			console.log(".slider-cat #"+count);
			$(' .slider-cat #'+count).delay(3000).hide('slide',{direction:'left'},500);
			if(count == slide_count) {
				count = slide_count;
			} else if (count >=3 ){
				count = 1;
			} else {
				count = count + 1;
			}
		});
	//});
}