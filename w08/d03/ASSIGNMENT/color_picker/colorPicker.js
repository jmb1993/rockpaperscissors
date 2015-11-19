$(function() {
	$('#canvas').on("mousemove", function(event){
		hsl = [
		Math.round(event.offsetX),
		Math.round(event.offsetY), + "%",
		50 + "%"
		];
	})
	$('#canvas').css('background-color', 'hsl(' + hsl.join(',') + ')');

	$('#canvas').click(function(){
		$('#hsl').text('hsl' + hsl.join(',') + ')');
		var rgbv = $("#canvas").css("background-color");
		$('#rgb').text(rgbv);
	})

});
