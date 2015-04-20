function slider() {
	$('#10 .slider-cat #1').show('fade',500);
	$('#10 .slider-cat #1').delay(3000).hide('slide',{direction:'left'},500);
	
	var outer_slide_count = $('.slider-cat').size();
	var inner_slide_count = $('.slider-cat img').size();
	var count_inner = 2;
	var count_outer = 10;

	console.log('hi outer slide count is '+outer_slide_count);
	console.log('hi inner slide count is '+inner_slide_count);
	
	$.each('.slider-cat',function(){
		
		setInterval(function(){
			
			$('#'+count_outer+' .slider-cat #'+count_inner).show('slide',{direction:'right'},500);
			console.log('#'+count_outer+' .slider-cat #'+count_inner);
			$('#'+count_outer+' .slider-cat #'+count_inner).delay(3000).hide('slide',{direction:'left'},500);
			
			if( count_inner == inner_slide_count ) {
				count_inner = 1;
			} else if( count_inner >= 3 ) {
				count_inner = 1;
			} else {
				count_inner = count_inner + 1;
			}
		},4000);	
		console.log(count_outer);
		
		if(count_outer == (outer_slide_count+9)) {
			count_outer = 10;
			console.log(count_outer);
		
		} else if (count_outer >= 12) {
			count_outer = 10;
		} else {
			count_outer = count_outer + 1;
			console.log(count_outer);
		}
	}); 
	
}