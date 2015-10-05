
var wordBank = ["america", "canada", "mexico", "china", "japan"]

// LETTER FACTORY

var Letter = function(letter) {
  return {
val: letter,
hidden: true,
hide: function() {
   this.hidden = true;
}
show:  function() {
   this.hidden = false
}
render:  function() {
  if (this.hidden === true) {
  return this.val = '_';
} else { return this.val
}
}
};
};

// WORD FACTORY

var Word = function() {
  return {
    letters: [],
    getLetters: function(newWord) {
      for (var i = 0; i < newWord.length; i++) {
        this.letters.push(letter(newWord[i]));
      }
      }
      };
    };
var isFound = function() {
  for(var i =0; i <this.letters.length; i++)
  if(this.letters[i].hidden) {
return false
}
return true
},
try: function(letter) {
var selected === false;
for(var i =0; i <this.letters.length; i++ ) {
  if(letter == this.letters[i].val) {
    this.letters[i].hidden = false;
    selected = true;
  }
  return selected
}
};

render: function() {
var renderedState = " ";
for(var i = 0; i < this.letters.length; i++) {
  renderedState += this.letters[i].render();
  if (i<this.letters.length-1) {
    renderedState += " "
  }
  return renderedState;
}
  }
}




// GAME

var game = {
guesses: 0,
guessedLetters: [],
words: [],
currentWord: " "
startGame = function(wordArray) {
this.currentWord = word()
this.guessedLetters = [];
this.wordArray =
this.guesses === 10
}
wordsArray = function() {
  return
    currentWord = words[Math.floor(Math.random()*words.length)];
}
guess: function(letter) {
for(var i = 0; i <this.guessedLetters.length; i++) {
  if( letter === this.guessedLetters[i]) {
    var newPick = prompt("That letter has already been picked- pick a new letter!");
    return this.guess(newPick);
  }
  if (! this.currentWord.try(letter)) {
    this.guess -= 1;
  }
}
this.guessedLetters.push(letter);
}
isOver = function() {
  if (guesses === 0 || word.isFound === true) return true
} else {
  return false
}
overMessage = function() {
  if word.isFound === true);
  return "You win" {
    else if (guesses = 0) return "You lose"
  }  else return " "
}
render = function () {
  console.log(this.currentWord.render(), "guesses" + this.guesses, "guessed letters" + this.guessedLetters,)
}
};

// Start game

var play = function() {
  Game.startgame(wordBank);
  while game.isOver === false
  var userGuess = prompt("guess a letter")
  game.render()
}
console.log(game.overMessage());
var newGame = prompt("play again y/n?")
if (newGame === "y") {play()};
else {console.log("see you later!")}
