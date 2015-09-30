console.log("app.js loaded");

var combineWords = function (firstWord, secondWord) {
  var combination = firstWord + " " + secondWord;
  return combination;
};

// REFERENCE - by just using the variable that the function is defined as
var combineWordsTwo = combineWords;

// INVOKING - we invoke by adding the () to the end of a function
var combineWordsReturn = combineWords("Hello", "WDI");

/*
a:
Write a function sumOfThree that will accept three numbers as input argument
and return their sum

b:
Write a function productOfThree that will accept three number as input arguments
and return their product


BONUS
Write a function that takes the result of the two above functions,
and 'feeds' them to Math.pow(a,b). Console this result.
*/


//SOLUTIONS

//A
var sumOfThree = function(numOne, numTwo, numThree){
  var sum = numOne + numTwo + numThree;
  return sum;
};


//B
var prodOfThree = function(num1,num2,num3){
  var value = num1 * num2 * num3;
  return value;
};

//C
//DRY
var powOfSumOfThreeProdOfThree = function (numOne, numTwo){
  var pow = Math.pow(numOne,numTwo);
  return pow;
};

//NON DRY
var bonus = function () {
  return Math.pow(sumOfThree(1, 2, 3), prodOfThree(2, 3, 4))
};

powOfSumOfThreeProdOfThree(sumOfThree(1, 2, 3), prodOfThree(2, 2, 2));



//DRY EX

//MOIST
// var thisWeekTimes = [52, 51, 53, 52, 54];
// var lastWeekTimes = [54, 57, 58, 53, 54, 58];
// var weekBeforeTimes = [100, 102, 142, 133, 123, 141, 120];
//
// var sum = 0;
// for (var i = 0; i < thisWeekTimes.length; i++) {
//   sum += thisWeekTimes[i];
// }
// var thisWeekAvg = sum / thisWeekTimes.length;
//
// var sum = 0;
// for (var i = 0; i < lastWeekTimes.length; i++) {
//   sum += lastWeekTimes[i];
// }
// var lastWeekAvg = sum / lastWeekTimes.length;
//
// var sum = 0;
// for (var i = 0; i < weekBeforeTimes.length; i++) {
//   sum += weekBeforeTimes[i];
// }
// var weekBeforeAvg = sum / weekBeforeTimes.length;
//
// console.log(thisWeekAvg);
// console.log(lastWeekAvg);
// console.log(weekBeforeAvg);


//DRY

var thisWeekTimes = [52, 51, 53, 52, 54];
var lastWeekTimes = [54, 57, 58, 53, 54, 58];
var weekBeforeTimes = [100, 102, 142, 133, 123, 141, 120];

var averageFinder = function(array){
  var sum = 0;
  var arrayLength = array.length;
  for (var i = 0; i < arrayLength; i++){
    sum += array[i];
  }
    return sum/arrayLength;
};
console.log(averageFinder(thisWeekTimes));


//Function are passed two things, the keyword "this" and the arguments "array"
var doSomething = function () {
  console.log(arguments[2]);
};


var showArgs = function (arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
};


// * Write a function called `sayHelloTo` that accepts one input argument (string)
//   called `name` and returns a hello message to that name
// sayHelloTo("JimBob"); // This should return "Hello, JimBob."

var sayHelloTo = function(name) {
  return "Hello, " + name;
};

// * Write a function called `bigOrSmall` that accepts one argument, a number, and return "This number is big" if the number is greater than 10, and "This number is small" otherwise
var bigOrSmall = function (num1){
  if(num1 > 10){
    return "this number is big";
  }
  return "this number is small";
};


// * Write a function called `oddOrEven` that accepts one argument, a number, and returns "This number is odd" if the number is odd, and "This number is even" if the number is even

var oddOrEven = function(num){
  return (num % 2 === 0) ? "This number is even" : "This number is odd";
}

// * Write a function called `embiggen` that accepts one argument, a string, and returns a CAPS LOCKED version of the string with an exclamation at the end

var embiggen = function(string) {
  return string.toUpperCase() + "!";
};

// * Write a function called `reverser` that accepts one argument, a string, and returns a reversed version of the string
var reverser = function(str){
  var reversedString='';
  for(var i = str.length-1; i >= 0; i--){
    reversedString = reversedString + str[i];
  };
  return reversedString;
};

var reverserTwo = function(string) {
  return string.split('').reverse().join('');
};

// Pounds to Kilograms
//
// How would you convert 120lbs to kilograms?

// Find the conversion for pounds to kilograms

// There are 2.2046226218 pounds in 1 kilogram. So, if you want to do the calculation in your head, multiply your kilogram figure by 2.2 to get an approximate figure for pounds.

var lbsToKilo = function (lbs) {
  return lbs / 2.2046226218;
};



//DEBUGGING


var isEqual = function () {
  var a = "A";
  var b = "B";
  console.log(a);
  console.log(b);
  if(a === b){
    return "KEWL"
  }
  return "NOT KEWL";
};
