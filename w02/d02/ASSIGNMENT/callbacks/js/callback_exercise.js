window.onload = function(){
  
  // whenever I get an event, I'll tell you who triggered it.
  var tattler = function(e){
    var link = e.target;
    link.href = "https://youtu.be/fWNaR-rxAic?t=" + link.dataset.poopBaconPoop;

  
    console.log(e.timeStamp);
  if(e.timeStamp%2 ===0){
    console.log("stopped");
    e.preventDefault();
  }
}
  // figure out who triggered the event by accessing the target
  // grab the lyrics list and listen for events as the bubble up.
  var callmeLyricsList = document.querySelector('.callmeLyrics').addEventListener( 'click', tattler);
}