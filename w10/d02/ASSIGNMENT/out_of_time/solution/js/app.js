$(document).ready(function() {
  console.log("Welcome to vault tec...");

  //grab the button
  var setButton = $('#set')
  var startButton = $('#start');
  var stopButton = $('#stop');
  var resetButton = $('#reset');

  //set variables
  var trackTime;
  var seconds = 0;
  var minutes = 0;
  var hour = 0;

  //clicked set button
  setButton.on('click', function() {
    var setTime = parseFloat(prompt("Please enter time in minutes"));
    // clear everything enter new time
    clearInterval(trackTime);
    trackTime = null;
    // convert time into hous and minutes
    if (setTime >= 60) {
      hour = Math.floor(setTime / 60.0);
      minutes = setTime - (hour * 60);
      console.log(hour + 'hour');
      console.log(minutes + 'minutes');
    }else{
      hour = 0;
      minutes = setTime;
    };
    renderTime(0, minutes, hour);

    // count down to the set time
    trackTime = setInterval( function() {
      seconds--;
      //render the time on html
      renderTime(seconds, minutes, hour);
      // if second is 0 or less and we still have minutes left 
      if (seconds <= 0 && minutes > 0) {
        seconds = 59;
        minutes--;
        renderTime(seconds, minutes, hour);
        // if minutes is 0 or less and we still have hour left
        if (minutes <= 0 && hour > 0) {
          minutes = 59;
          hour--;
          //render the time on html
          renderTime(seconds, minutes, hour);
        } 
      }
      if (seconds == 0 && minutes == 0 && hour == 0) {
        clearInterval(trackTime);
        alert("Cryogenic stasis is over and the vault dweller is free to comeout!")
      }
    },
    //run the function every second
    1000);
  });

  //clicked start button
  startButton.on('click', function() {
  	if (!trackTime) {
      // if an trackTime doesn't exists set trackTime as setInterval with a function
  		trackTime = setInterval( function() {
  			seconds++;
        //render the time on html
			  renderTime(seconds, minutes, hour);
        // if second is 60 or greater increse the minute 
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
          //render the time on html
          renderTime(seconds, minutes, hour);
          // if minutes is 60 or greater increse the hour 
          if (minutes >= 60) {
            minutes = 0;
            hour++;
            //render the time on html
            renderTime(seconds, minutes, hour);
          } 
        }
  		},
      //run the function every second
      1000)
    } 
  });

  // clear trackTime and reset trackTime
  stopButton.on('click', function() {
  	clearInterval(trackTime);
  	trackTime = null;
  });

  // clear trackTime, reset trackTime, and reset trackTime in memory
  resetButton.on('click', function() {
    clearInterval(trackTime);
    seconds = 0;
    minutes = 0;
    hour = 0;
  	renderTime(0, 0, 0);
  });

}); 
// Closes document.ready function

//render function
var renderTime = function(seconds, minutes, hour) {
  var stopwatch = $('#stopwatch');
  // find the current displayed time on the html
  var html = stopwatch.html(); 
  // break apart the time by :
  var timeArray = html.split(":"); 
  // using input to set the time array
  timeArray[0] = hour;
  timeArray[1] = minutes;
  timeArray[2] = seconds;
  var time = timeArray.join(":");
  // render the new time on to html
  stopwatch.text(time);
};