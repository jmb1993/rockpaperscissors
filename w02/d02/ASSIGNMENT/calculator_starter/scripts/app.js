<<<<<<< HEAD
window.onLoad();{
  var basicNum1 = document.getElementById("basic-num-1").value;
  var basicNum2 = document.getElementById("basic-num-2").value;
  var getClick = ("basic-calc").addEventListener("click", function(a){
    return result;
  });

var basicAnswer = document.getElementById("basic-answer").value;
var calculate = function(basicNum1, basicNum2) {
if (document.getElementById("basic-operation").value == "+") {
var sum = function(a,b){
  return (+a) + (+b);
};
sum();
}
if (document.getElementById("basic-operation").value == " *") {
var mult = function(a,b){
  return (+a) * (+b);
};
mult();
}
if (document.getElementById("basic-operation").value == " /") {
var div = function(a,b){
  return (+a) / (+b) ;
};
}
if(document.getElementById("basic-operation").value == " -") {
var sub = function(a,b){
  return (+a) - (+b);
};
return document.getElementById("basic-answer-alert").value(calculate());
}
};
}
(calculate())
=======
window.onload = function () {
  //Grab the button for basic calculation
  var basicButton = document.getElementById('basic-calc');
  //Setup the click event for the basic button
  basicButton.addEventListener("click", function () {
    //Grab the first number value
    var num1 = parseInt(document.getElementById('basic-num-1').value);
    //Grab the second number value
    var num2 = parseInt(document.getElementById('basic-num-2').value);
    //Grab the operation value
    var operator = document.getElementById('basic-operation').value;
    //Grab the answerBox
    var answerBox = document.getElementById('basic-answer-alert');

    //Adjust the answer based on the operation
    if(operator === "+"){
      answerBox.innerHTML = num1 + num2;
    }else if(operator === "-"){
      answerBox.innerHTML = num1 - num2;
    }else if(operator === "*"){
      answerBox.innerHTML = num1 * num2;
    }else if(operator === "/"){
      answerBox.innerHTML = num1 / num2;
    }
  });
};
>>>>>>> b0dc4ebfd139dda826d1dfda47bf4f0922a14110
