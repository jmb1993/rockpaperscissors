// iterators

//.Foreach

var test = [1,2,3,4,5,6,7,8]
for( var i =0; i < test.length; i++) {
  console.log(i + test[i]);
}
test.forEach(function(number, index){console.log(number + test[index])});

// .map
var test = [1,2,3,4,5,6,7,8]
var NewArray = test.map(function(number, index, array){
  return number + test[index];
})

// constructor

var Minion = function(eyes, color){
  this.eyes = eyes;
  this.color = color;
};
Minion.prototype.mutate = function(color) {
  this.color = color;
}
var larry = new Minion(1, "yellow");
larry.mutate("purple")
Minion.prototype.eatBanana = function(){
  return Minion + 'eats a banana;'
}
