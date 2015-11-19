<<<<<<< HEAD
$("section#canvas").mouseover(function(){
  var change = $(this).css("background-color")
})

$( "section#canvas" ).click(function() {
  var html = [ "The clicked div has the following styles:" ];

  var styleProps = $( this ).css([
    "width", "height", "color", "background-color"
  ]);
  $.each( styleProps, function( prop, value ) {
    html.push( prop + ": " + value );
  });

  $( "#result" ).html( html.join( "<br>" ) );
=======
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

>>>>>>> 63e3fea6af25c744039149ea401a2460b3ccc923
});
