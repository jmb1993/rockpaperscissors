// //Project Euler #6
//

// DANIEL SOLUTION REFACTORED
// var eulerSix = function(num) {
//   var sumOfSq = 0
//   var sum = 0;
//   for (var i = 1; i <= num; i++) {
//     sum += i;
//     sumOfSq += i * i;
//   }
//   return Math.pow(sum, 2) - sumOfSq;
// };


// var eulerSix = function (limit) {
//   var sum = 0;
//   var sumOfSq = 0;
//   for(var i = 0; i <= limit; i++){
//     sum += i;
//     sumOfSq += Math.pow(i, 2);
//   }
//   return Math.pow(sum, 2) - sumOfSq;
// }
//
// //Euler suggested solution
var eulerSix = function (limit) {
  var sqOfSum = Math.pow(limit*(limit+1)/2,2)
  var sumOfSq = (2*limit+1)*(limit+1)*limit/6
  return sqOfSum - sumOfSq
};
