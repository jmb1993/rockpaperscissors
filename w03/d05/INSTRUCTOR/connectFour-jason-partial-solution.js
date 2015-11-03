/**
AUTHOR: Jason Seminara, 2015-10-18
DESC: A Connect4 solution for General Assembly/WDI Bacon

*/

'use strict';

// This is an alternative to the 'Constructor' pattern, called the 'Module Pattern'. 
// Essentially, the whole application is wrapped in a IIFE (Immediately Invoked Functional Expression).
// The IIFE encloses all the variables and returns the whole package to the variable 'board'.
// All variables are contained within the 'closure' of the IIFE and are always accessible to the functions within.
var board = (function () {

  var _board = [];
  var MAX_COLS, MAX_ROWS, SEARCH_OFFSET; 

  // safely walks over a 2d array and returns 
  // undefined if we've gone out of bounds in the first dimension
    // In JS, accessing a 2d array is dangerous (errors) if we try to access 
    //   an undefined element in the 1st dimension of the array.   
    // (e.g. a[-3][1] will produce an error, since a[-3] is undefined, and we're trying to access [1] of undefined)
  var safeLookup =  function (arr, a, b) {
    // this is a 'ternary operator'. It's a shortended version of an IF statement
    // someVal = (Boolean condition) ? do_if_true : do_if_false;
    return (a in arr) ? arr[a][b] : undefined;
  }


  return {
    init: function (cols, rows) {

      // these variables will serve as globals for our application 
      MAX_COLS = cols;
      MAX_ROWS = rows;
      SEARCH_OFFSET = Math.floor(7 / 2);
      var i = 0;
      
      // testing purposes: change this to an empty array when in production
      var arr = ['a'+i, 'b'+i, 'c'+i, 'd'+i, 'e'+i, 'f'+i];

      // use the inherent properties of a for-loop to init an array., and add n items for each iteration
      // grow the array until some specified length
      for (_board = []; _board.length < MAX_COLS; _board.push([])){
        //for(var blanks =[]; blanks.length< MAX_ROWS; blanks.push(' ')){}
      }
      return _board;
    },
    play: function (col, player) {
      _board[col].push(player);
      return [col, _board[col].length-1]
    },


    show: function () {
      
      // Our board is organized by column arrays standing on their heads (zero on bottom)
      // in order to print this in the proper order, we need to be clever about which rows are on top
      // we'll iterate the rows downwards since we're printing top-down and the rows left-right


      var boardView =[];
      for(var j=MAX_ROWS-1;j>=0;j--){
        
        // collect the values into an array (we'll convert into a string later)
        var line = [];

        for(var i=0;i<MAX_COLS;i++){

          // pretty-print a space if the value is undefined. it'll help make a grid onscreen.
          line.push( _board[i][j] || ' ')  
        }
        // add to the boardView with '|' as the separator 
        boardView.push( '|'+line.join("|") )
      }

      // add a bottom row
      boardView.push('-------------');

      // Print out a pretty board with newLines
      console.log(boardView.join('\n'))
      return;
    }, 


    // A win can be defined as a series of tokens of the same color/player in any of 4 directions: h,v,diag1, diag2
    // If a win is tested for upon each play, it stands to reason that the newest token played
    //   would have completed a 'win' (connected 4 like tokens).
    // Therefore, we'd need to check only 3 tokens to my left, and 3 to my right: [ooxXxxo].
    // The win must be detected in 4 directions, (horizontal, vertical, diag ascending, diag descending).
    // See loop below for details

    detectWin: function (pos) {
      // the incoming pos param is a tuple (an array with two items [x,y])
      // let's split them into two variables, since the square brackets can easily pile up and become unreadable.
      var col = pos[0];
      var row = pos[1];

      // we're going to loop only once below, but we need to record our progress in a data structure
      var winMatrix = {
        h:  [],
        v:  [],
        d1: [],
        d2: []
      }

      // Our offset is a range of numbers with our position in the center. (see the init fn)
      // in order to start at the proper position, we'll force the start position into 
      // the negative and count forward until we reach the same number on the positive side
      // (e.g. if the SO is 3, we'll count -3...0...3, where our target is at 0th position) 
      for (var i = -(SEARCH_OFFSET); i <= SEARCH_OFFSET; i++) {
        
        //console.log(col, row+i, _board[col][row+i]);

        // if we remember our geometric rotations across the x,y grid, 
        // horizontal lines can be defined as (-): x-->,y (x grows, y stable)
        // vertical lines (|) : x,y--> (x stable, y growing)
        // ascending vertical (/): x-->,y--> (both x and y grow at the same rate(x=y))
        // descending vert (\) : x-->,<--y (x grows as y decreases)

        // we're using a helper function called safeLookup to return either the value in an array or undefined
        winMatrix.h.push(  safeLookup( _board, col+i, row   ));
        winMatrix.v.push(  safeLookup( _board, col  , row+i ));
        winMatrix.d1.push( safeLookup( _board, col+i, row+i ));
        winMatrix.d2.push( safeLookup( _board, col+i, row-i ));

      }


      // This is another IIFE that binds testForWin and winMatrix
      var wins = (function( testForWin , possibleWin){
        
        return function(n){
          // Sneaky trick (thanks @williamFShaw): join the collected array into a comma-separated list (CSV)(the default)
          // and test it against the regexp we defined earlier.
          // 
          // if our test passes, we'll add it to our array, and check the length later
          return testForWin.test( possibleWin[n].join() );
        };

        // This is how to construct a Regular Expression (regex)
        // any winning play will contain 'x,x,x,x' or 'o,o,o,o'
        // the forward-slash creates a Regexp object
      })( /(x,x,x,x|o,o,o,o)/, winMatrix )


      

      // Walk over the winning arrays and check to see if any of them match our winning pattern
      // The best semantic iterator for this would be to go to each of them and collect the ones 
      //   that match our test criteria, collecting the matches in an array.
      // If we have an array of ANY length, we've detected a win.

      // NOTE: We could have walked over using a for(a in b){} loop, but what's the fun in that??
      // We'll use JS's built-in filter function, which does exactly what we need. Unfortunately, we 
      //   can't use this function on an object.
      // Fortunately, we can get the Object's keys as an array and iterate over those! Huzzah!
      // We don't care which order we iterate, just get each one
      
      // double !! coerces the value to a real Boolean: 0 --> false 
      return !! Object.keys( winMatrix ).filter( wins ).length;

    }
  }
})();



board.init(7, 6)
var j = 3
while (j--){


  for(var i=0; i<6;i=i+2)
    board.play(i,'x')
  for(var i=0; i<6;i++)
    board.play(i,'o')
}
board.detectWin([3,3])
board.show()