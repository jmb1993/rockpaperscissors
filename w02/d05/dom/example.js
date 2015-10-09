// iterators

//.Foreach

var test = [1,2,3,4,5,6,7,8]
for( var i =0; i < test.length; i++) {
  console.log(i + test[i]);
}
test.forEach(function(number){console.log(number + 10)});
