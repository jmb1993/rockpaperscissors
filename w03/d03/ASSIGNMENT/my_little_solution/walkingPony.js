/*
  My little Brony
  Modified on 2015-10-14 by Jason Seminara to create a closure for the walk function
*/

// create a closure for the walk function that captures the pony and distance vars
// returns a bound function for the setInterval later.
var walkClosure = function(pony,distance){
  return function(){

    //console.log(distance)
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
  // This is an IIFE (Immediately Invoked Function Expression)
  (function() {
    var walk = walkClosure( $('.pony') , 1625 );
    setInterval( walk, 60 );
    //console.log(walkClosure)
  })();

  // has the brony loaded?
  console.log( 'Lowded, Brony' );

  $('body').on('click', '.pony' , function() {
    console.log('hi');

    // clone the pony
    var pony = $(this).clone();

    // Compose a new function, using the new clone and a new random starting value
    var walk = walkClosure( pony , Math.random()*1000 );

    // 
    setInterval( walk , Math.random()*100);
    pony.appendTo($(document.body));

  });
});



