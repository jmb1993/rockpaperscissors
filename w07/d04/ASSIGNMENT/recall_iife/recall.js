<<<<<<< HEAD
function recursion(param1, param2, callback){
console.log(param1 + ' ' + param2 );
callback();
};
recursion("hello", "word",function(param3){
console.log(recursion()+ param3)
});



var recall = function(word){
  var sentence = ' ';
  var chatter = function(newWord, callback){
    if (typoof newWord)
  }
};
=======
//Module Pattern Javascript: Recall function (IIFE)

//declare a function that takes one argument 
var recall = function (word) {
	//declare a private variable that's a string because of closure my function will be able to access this variable
	var sentense = '';
	//declare a function that takes two arguments, a string and a callback
	var chatter = function(newWord, callback) {
		//if newWord is not an empty input add it to sentence, then return the callback function
	    if (typeof newWord !== "undefined") {
	    	sentense += newWord + ' ';
	    	//returning the callback starts the recursion
	        return callback;
	    //else return back the sentence
	    } else {
			return sentense;
	    }
	}
	//runs chatter passing it word, create a callback function call it repeatRecall
	return chatter(word, function repeatRecall(word) { 
		//and the repeatRecall callback function returns the chatter function again to create a recursion
		// recall(word) -> chatter(word, callback){} -> callback(word) -> chatter(word, repeatRecall)
		return chatter(word, repeatRecall)
	});
	//things that are reused because of closure
	//var sentense
	//function expression chatter
	//callback function repeatRecall
};

//recall('okay');
recall('Sorry,')('Your')('whole')('life')('is')('just')('a')('dream.')('I')('have')('been')('trying')('to')('tell')('you,')('someone')('has')('erased')('your')('memory.')();
>>>>>>> d547458d85cb6ee162df1a85c16156159755208b
