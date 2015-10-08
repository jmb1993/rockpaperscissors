window.onload = function() {
	console.log('loaded');

	// Invoke your chain of functions and listeners within window.onload
var tileArray = [A,A, B,B,C,C,D,D,E,E]
}
var makeAndDisplayTiles = function() {
for(var i = 0; i < tileArray.length; i++){
	for(var j = 0; j < tileArray[i]; j++){
		if(tileArray[i][j] == "A") {
			document.getElementsByName(".column").append(<div class="column" data-value= "A" </div> );
			if(tileArray[i][j] == "B" ) {	document.createElement("column").append(<div class="column" data-value= "B" </div> );

			if(tileArray[i][j] == "C" ) {	document.createElement("column").append(<div class="column" data-value= "C" </div> );
			if(tileArray[i][j] == "D" ) {	document.createElement("column").append(<div class="column" data-value= "C" </div> );
			if(tileArray[i][j] == "E" ) {	document.createElement("column").append(<div class="column" data-value= "C" </div> );
}
			}
		}
	}
}
    }
}
var addEventsToTiles = function() {
document.getElementsByClassName("column").addEventListener("click", function(){
	var makePlay = function(){
		 this.tileArray[].document.createElement("class").style("found");
		 this.class.value = ( "clicked");
		 if(document.getElementsByName("clicked")> 2) {
			 var checkForMatch = function() {
				 if (this.document.getElementsByName("clicked").tileArray[].value === this.document.getElementsByName("clicked").tileArray[].value);
				 return var matches = 1;
			else {
				document.getElementsByName("class").style().value = ();
			}

			 }
		 }
	}
})
var checkForWin = function() {
	if(matches == 10) {
		document.getElementsByTagName("Div").value = "won"
	}
}
}
}
var startGame = function(){
	document.getElementsByTagName("start-button").addEventListener("click", function(){
		return shuffle();
	})
}
// USE THIS TO SHUFFLE YOUR ARRAYS
function shuffle(tileArray) {
	for(var j, x, i = tileArray.length; i; j = Math.floor(Math.random() * i), x = tileArray[--i], tileArray[i] = tileArray[j], tileArray[j] = x);
		return tileArray;
};
