var adds = function(num1, num2){
  return (num1 + num2);
}
 var addThrice = function( arr, adds) {
   if (typeof adds !== "function") {
     return undefined;
   }
   var total = arr[0]
   var len = arr.length
   for(var i =1; i < len; i++) {
     var current = arr[i];
     total = adds(total, current);
   }
   return total;
};
var myTotal=
  addThrice([2,3,5], function(a,b){return a/b})
myTotal


document.querySelector("p").addEventListener("click", function(e){
  console.log(e);
})
