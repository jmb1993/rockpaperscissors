/*
  My little Brony
  Modified on 2015-10-14 by Jason Seminara to create a closure for the walk function
*/

// create a closure for the walk function that captures the pony and distance vars
// returns a bound function for the setInterval later.
var walkClosure = function(pony,distance){
  return function(){
    pony.css('left', distance + 'px');
    if (distance < -600){
      distance = 1625;
    } else {
      distance -= 5;
    }
  };
}



// after the body loads
$(function() {

  // generate the walk function and pass it into setInterval
  var walkingPony = function() {
    var walk = walkClosure( $('.pony') , 1625 );
    setInterval( walk, 60 );
  };

  // has the brony loaded?
  console.log( 'Loaded, Brony' );
  

  walkingPony();

  $('body').on('click', '.pony' , function() {
    console.log('hi');
    var pony = $(this).clone();
    var walk = walkClosure( pony , Math.random()*1000 );
    setInterval( walk , Math.random()*100);
    pony.appendTo($(document.body));

  });
});



