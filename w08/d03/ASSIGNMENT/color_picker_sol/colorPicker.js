$(function() {

	//mouse move event to track mouse movement
	$( "#canvas" ).on( "mousemove", function( event ) {
	  hsl = [
        Math.round(event.offsetX),
        Math.round(event.offsetY) + "%",
        50 + "%"
    	];

	  $("#canvas").css('background','hsl('+ hsl.join(',') +')');
	
	});

	//mouse click to trigger the color check
	$("#canvas").click(function() {

		$('#hsl').text('hsl(' + hsl.join(',') + ')')
		var rgbv = $("#canvas").css("background-color");
		$('#rgb').text(rgbv);

		//match against a regular expression
		function rgb2hex(rgb){
		 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

		 return ("#" +
		  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
		  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
		  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) );
		}
		$('#hex').text(rgb2hex(rgbv))
		
		alert( rgb2hex(rgbv) );
	})
	
});
