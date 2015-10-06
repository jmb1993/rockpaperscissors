// clocks.js
// Solution code

var clockRun = function() {
	// Capture and store DOM elements
	var secondHand = document.getElementById('second-hand');
  var minuteHand = document.getElementById('minute-hand');
	var hourHand = document.getElementById('hour-hand');

	// Timings of hands once around the clock
	var totalSeconds = 60.0;
	var totalMinutes = 60.0;
	var totalHours = 12.0;

  // Initialize clock hand angles to current time
	var currentTime = new Date();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();
  var secondAngle = currentSeconds * 360/totalSeconds;
	var minuteAngle = ( currentMinutes + currentSeconds/totalSeconds ) * 360/totalMinutes;
	var hourAngle = ( currentHours + currentMinutes/totalMinutes + currentSeconds/(totalMinutes * totalSeconds )) * 360/totalHours;

	// Length of interval in seconds
	var secondInterval = 1;
	var minuteInterval = 1;
	var hourInterval = 1;

  // Functions to rotate the clock hands
	var moveSecond = function() {
		secondAngle = secondAngle + secondInterval * (360/totalSeconds);
		var rotateString = 'rotate(' + secondAngle + 'deg)';
		secondHand.style.transform = rotateString;
	};

	var moveMinute = function() {
		minuteAngle = minuteAngle + minuteInterval * (360/(totalMinutes * 60));
		var rotateString = 'rotate(' + minuteAngle + 'deg)';
		minuteHand.style.transform = rotateString;
	};

	var moveHour = function() {
		hourAngle = hourAngle + hourInterval * (360/(totalHours * 60 * 60));
		var rotateString = 'rotate(' + hourAngle + 'deg)';
		hourHand.style.transform = rotateString;
	};

  // Rotate each clock hand every second
  setInterval(moveSecond, secondInterval * 1000);
	setInterval(moveMinute, minuteInterval * 1000);
	setInterval(moveHour, hourInterval * 1000);
}

// We just need to reference the function clockRun not run it, so no "()"
window.addEventListener('load', clockRun);
