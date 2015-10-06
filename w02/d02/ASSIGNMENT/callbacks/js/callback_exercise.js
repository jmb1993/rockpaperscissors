window.onload = function(){
  
  // whenever I get an event, I'll tell you who triggered it.
  var tattler = function(e){
    var link = e.target;
    console.log(e.target.innerHTML);
    //e.target
   // e.preventDefault();
  }

  // figure out who triggered the event by accessing the target
  // grab the lyrics list and listen for events as the bubble up.
  var callmeLyricsList = document.querySelector('.callmeLyrics').addEventListener( 'click', tattler);
}