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
