# Callback to Mars!

![reps](http://0519f170a2731643c0a9-ec45ee3cb118921cf5758d3a3db775b7.r83.cf1.rackcdn.com/92b32f75757a1f8c47fb5a1628d048584787f18f.jpg__846x0_q80.jpg)

#### Subjects covered.

- callbacks
- setTimeout
- DOM ('Vanilla' JavaScript)

## Part 1
In the HTML file there is a `button` with the name "Name button!", for that button create a function that prompts the user for an input with the message "Hey what does this button say?", when the user enters the input it will change the text on the button to the user's input.

## Part 2
There is a `button` with the name of "Count button!", for that button create a function that prompts the user for an input(a number) with the message "How many seconds should I count to before I alert DONE!?", make sure the input is a number and the function counts that many seconds before alerting "DONE".

## Part 3
There is a `button` with the name of "Scroll button!", for that button create a function that prompts the user for an input(a number) with the message "How many pixel should I scroll down?", make sure the input is a number and the function scrolls that many pixels down.

# BONUS

New findings from NASA's Mars Reconnaissance Orbiter (MRO) provide the strongest evidence yet that liquid water flows intermittently on present-day Mars.
So here at WDI we are going on a mission to mars.

Get ready for the road trip of yourself, as we are about to lanuch off!

MISSION:
	
	When the HTML page is loaded, automatically scroll all the way down to the bottom of the page.
	When the `GO!` button is clicked, it `prompts` the user for three questions.
	1. "This is mission control please report current temperature in fahrenheit."
	2. "Please report fuel percentage."
	3. "Please report password!"

	if current temperature is less than or equal to 200 
	and the fuel greater than 60 and
	the password entered is "POOP".

	`alert` Houston ready to take off! Start the countdown!!!", and starts the count down.
	The countDown is a function changes the HTML of the div that has the id "count". 
	Once the count reaches 0, scroll up the page so the rocket can reach mars.

SETUP:

	For this part of the exercise you will be working in `launch.js` file.
	In order to make our rocket take off, you will be creating two functions.

	-countdown function
	-buttonSetup function

BREAKING IT DOWN:

	Make sure to scroll to the bottom at page load with `window.scrollBy(0, 20000);`

	The function `scrollTo` is given to you used to use in order to scroll up to the top of page.
	You can run 

```javascript 
scrollTo(document.body, 0, 12000);
``` 
to scroll all the way to the top to make the rocket reach the moon.

	Create a function called `buttonSetup` select the element with id `lanuch` add a click event listener.
	Prompt the user for "This mission control please report current temperature in fahrenheit."
	Prompt the user for "Please report fuel percentage."
	Prompt the password for "Please report password!"
	if temp is less than 200 and fuel is greater than 60 and password is "POOP".
		Alert "Houston ready to take off! Start the countdown!!!"
		And run the function `coutingDown();`


	Create a function called `countingDown`
	Within this function use a setTimeout to change the text inside of the element with the id of "count" every second.
	When all 10 seconds is counted use the `scrollTo` function above to launch the rocket.


#### Finished? The is a bonus!

Do not use the `scrollTo` function given to you,
and without copying the code given to you create your own function to scroll to the top.


