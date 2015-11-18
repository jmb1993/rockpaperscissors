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
});
