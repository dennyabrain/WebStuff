$(document).ready(function(){
	var touchStartX=0;
	var touchStartY=0;

	//$('.profile').draggable();
	$('.profile').on('touchstart',function(e){
		e.preventDefault();
		$('#message').text('touchStarted');
		touchStartX=e.originalEvent.touches[0].pageX;
		touchStartX=e.originalEvent.touches[0].pageY;
	});

	$('.profile').on('touchend',function(e){
		e.preventDefault();
		$('#message').text('touchEnded');
		touchStartX=0;
		touchStartY=0;
	});

	$('.profile').on('touchmove',function(e){
		e.preventDefault();
		$('#message').text('touchMoved');
		$('#coordinates').text('touched at '+e.originalEvent.touches[0].pageX+'px,'+e.originalEvent.touches[0].pageY+'px.');
		console.log(e.originalEvent.touches[0].pageX,e.originalEvent.touches[0].pageX);
		var tmp='translate('+e.originalEvent.touches[0].pageX+'px,'+e.originalEvent.touches[0].pageY+'px)';
		$(this).css('transform',tmp);
	});

});