console.log("loaded bro")

// // Seinna solution
// var reverse = function(str) {
//   var stringArray = str.split('').join('').split('');
//   var forward = stringArray.join('');
//   var backwards = stringArray.reverse().join('');
//   return forward === backwards;
// }

// // Wong solution
// var palindrome = function(string) {
//    var lowerString = string.toLowerCase();
//    var forward = '';
//    var reverse = '';
   
//    for (var j = 0; j < lowerString.length; j++) {
//        reverse += lowerString[j];
//        for (var i = lowerString.length - 1; i >= 0; i--) {
//            forward += lowerString[i];
//         }
//    }
//    if (forward === reverse) {
//         return true;
//    }   
//    else {
//         return false;
//    }
// }

// // Naina solution
// var isPalindrome = function(string){
//   var noSpace = string.toLowerCase().replace(/ /g, "");
//   noSpace = noSpace.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "");
//   var len = noSpace.length-1;
//   var pal = true;
//   for (var i = 0; i < noSpace.length; i++){
//     if (noSpace[i] != noSpace[len-i]){
//       pal = false;
//     }
//   }
//   return pal;
// }

// function checkPalindrome(){
// inputVal = $('input').val();
// if( inputVal.split('').reverse().join('') === inputVal ){
//  console.log(true);
// }
// else{
//  console.log(false);
// }
// };


// $('#button-one').on('click', function(){
//  checkPalindrome()
// });

// // Zhen one-liner
// var p=function(w,s){while(s++ < w.length||console.log(true)) if(w[s]!=w[(w.length-1)-(s)])return false}("a",0);

// // AK's solution
// function isPalindrome(str) {
//   var s = str.toLowerCase().split(' ').join('');
//   for (var i=0; i < s.length/2; i++) {
//     if (s[i] != s[s.length - (i+1)]) {
//       return false;
//     }
//   }
//   return true;
// }

var isPalindromeTwo = function(string) {
	var normalized = string.replace(/ /g,'').toLowerCase();
	var halfLength = (normalized.length / 2);
	var frontHalf = normalized.slice(0, Math.ceil(halfLength));
	var backHalf = normalized.slice(Math.floor(halfLength), normalized.length);
	return (frontHalf === backHalf.split('').reverse().join(''));
};

// Will Shaw 2015-10-19
function isPalindrome(string) {
  var normalized = string.replace(/ /g, '').toLowerCase();
  if(normalized.length <= 1){ return true };
  if(normalized.charAt(0) != normalized.charAt( normalized.length - 1)){return false}
  return isPalindrome(normalized.substr(1, normalized.length - 2))  
}

// Adam Cooper 2015-10-19
var drome = function(string) {
  var specials = /[ !@#\$%\^&\*\(\)_\-\+={}\[\]\\\|:;"'<,>\.\?\/]/g;
  var stripped = string.toLowerCase().replace(specials, '');
  return (stripped === stripped.split('').reverse().join(''));
}

// Jason Seminara 2015-10-20
var jasonIsPalindrome = function(word,verbose){
  // normalize the string
  word = word.replace(/\W+/g,'').toLowerCase();
  
  // This is an IIFE that uses the head and tail of the string and uses recursion to continue to call the function until the pointers overtake each other 
  return (function _testPos(head,tail){
    
    // base case
    if(tail<head) return true;
    
    if(verbose) console.log(head,tail, word[head], word[tail])
    
    // recurse here
    return (word[head] === word[tail]) ? _testPos(head+1, tail-1) : false; 
  })( 0, word.length-1 );
}

console.log(drome('Will'));
console.log(drome('node'));
console.log(drome('Palindromes are everywhere'));
console.log(drome('nOoN'));
console.log(drome('Racecar'));
console.log(drome('A man, a plan, a canal: Panama!'));
console.log(drome("Go hang a salami! I'm a lasagna hog!"));
