//START HERE!
console.log("loaded bro!");

//make sure HTML loads before js
window.onload = function() {

	//scroll to the bottom of the page at the start so we can go back up!!
	window.scrollBy(0, 20000);

	//countdown function
	var countingDown = function () {
		var count = 10;
		for (var i = 0; i <= 10; i++) {
			setTimeout( function() {
				var myCount = document.getElementById("count"); 
				myCount.innerHTML = Math.abs(count);
				count--;
				if (myCount.innerHTML == 0) {
					scrollTo(document.body, 0, 12000);
				};
			}, i * 1100);
		};	
	};

	//add double check function to button in HTML
	var buttonSetup = function (){	
		document.getElementById("launch").addEventListener("click", function(){
			var temp = parseInt(prompt("This mission control please report current temperature in fahrenheit."));
			var fuel = parseInt(prompt("Please report fuel percentage."));
			var psw = prompt("Please report password!")

			if (temp <= 200 && fuel > 60 && psw == "POOP") {
				alert("Houston ready to take off! Start the countdown!!!");
				countingDown();
			};
		});
	};

	//run it
	buttonSetup();
};

//END HERE