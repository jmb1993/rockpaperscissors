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
