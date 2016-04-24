$(document).ready(function(){
	$.ajax({
	  url: 'https://api.wit.ai/message',
	  data: {
	    'q': 'hey',
	    'access_token' : 'BCLVS7SGO5QFTJETQIUUCDTIGKGSN6DT'
	  },
	  dataType: 'jsonp',
	  method: 'GET',
	  success: function(response) {
	      console.log("success!", response);
	  }
	});
});