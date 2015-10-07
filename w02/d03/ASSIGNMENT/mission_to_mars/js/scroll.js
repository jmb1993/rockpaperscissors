//scrolling function
function scrollTo (element, top, duration) {
  if (duration < 0) { return };
  //get the different between target and current position on the HTML page
  var difference = top - element.scrollTop;
  var perTick = difference / duration * 10;
  setTimeout(function() {
	element.scrollTop = element.scrollTop + perTick;
	//exit out of the setTimeout if reach our target position 
	if (element.scrollTop == top) { return };
	//put our function into itself but with decrease duration so when duration is 0 zero
	scrollTo(element, top, duration - 10);
	//setTimeout wait 10 mill-seconds
	}, 10);
};