$(document).ready(function(){
	$('#pg1').on('click',function(){
		$(this).addClass('hidden');
		console.log('click');
		$('#pg2').addClass('motion');
	})
});