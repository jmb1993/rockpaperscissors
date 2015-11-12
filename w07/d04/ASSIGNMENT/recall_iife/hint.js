//hint: iife, closure, callback

//function statement
function greet(name) {
	console.log('Hello ' + name + '!');
}
greet('Bob');

//function expression
var greetings = function(name) {
	console.log('Hello ' + name + '!');
};
greetings('Sara');

//immediatly invoke function expression (IIFE)
var greetNow = function(name) { 
	console.log('Hello ' + name + '!') 
}("John");

//IIFE in action
var sayByeBug = function(name) {
	return function () {
		console.log("Byyye! " + name);
	}
};
sayByeBug('Bunny')();

//IIFE with closure 
var addThenAddTenAfter = function(num1) {
	//notice the addThenAddTenAfter function always has access to daNumTen
	var daNumTen = 10;
	return function(num2) {
		console.log(num1 + num2 + daNumTen)
	};
};
addThenAddTenAfter(4)(5);

//callback function
function mySandwich(param1, param2, callback) {
    alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
    //notice callback function is being run here, wonder if it's possible to create recursion with this...
    callback();
};
//notice how the un-named function is the callback that will alert "Finished eating my sandwich."
mySandwich('ham', 'cheese', function() {
    alert('Finished eating my sandwich.');
});