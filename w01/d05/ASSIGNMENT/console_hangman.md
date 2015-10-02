### Hangman

This weekend you will be creating the popular game of Hangman in JavaScript!

# Gameplay:

When the page loads or refreshes the game page, the game will begin and select a random word from a pre-determined list of words.

That word will be displayed in the chrome console in this format:

```
 _ _ _ _ _ _ _
Please guess a letter.
```
A prompt will get a user guess input with the following instruction :

`Please guess a letter`

The user will guess the word, one letter at a time, until they have guessed the entire word or ran out of guesses. At that point the game will alert the user that they have won or lost the game and the game will end.

The word to be guessed, represented by _ (underscore) for each unguessed letter, separated by a space. If the user has a correct guess, the _ (underscore) changes into the correctly guessed letter for each subsequent prompt.

Mid-game the prompt might look like this:

```Hangman!
j a _ a s c r i p t
Please guess a letter.
```
_ _ _

The Game will need the following objects

## Letter()

Letter is a factory function that returns a Letter object.  

## Object Properties & Methods

- `value`
  - a string
- `hidden`
  - a boolean
- `hide()`
 - a function that will set `hidden` to true
- `show()`
 - a function that will set `hidden` to false
- `render()`
  - a function that will return ` _ ` if the letter is hidden
  return the value if the letter is not hidden



## Word()

Word is a function that will return an object

## Object Properties & Methods

- `letters`
 - an array of Letter objects
- `getLetters(newWord)`
 - accepts an input argument, a string will put all letters of input argument into `letters`
- `isFound()`
 - returns true if no letters are still hidden returns false if at least one letter is hidden
- `try(letter)`
 - accepts an input argument, a string goes through letters and reveals the ones whose value mathes the input argument `letter` returns a boolean indicating if the letter was found
- `render()`
  - returns the word in its "guessed state"
  ex: for the word 'closure', if the letters l, s, and e have been guessed, this function should return the string `_ l _ s _ _ e`


## Game

Game is an Object Literal

## Object Properties & Methods

- `guesses`
 - a number
- `guessedLetters`
 - an array of strings
- `words`
 - an array of strings
- `currentWord`
 - starts as an empty string
- `startGame(wordsArray)`
 - should accept an argument, an array of strings
 - should set `guesses` to ten
 - should set `currentWord` to an instance of `word`
 - should reset the `guessedLetters` array
 - should reset the `words` array
 - should fill the `words` array with the words from
- `wordArray`
  - should select a random word from `words` and create `currentWord`, should `getLetters` for the `currentWord`
- `guess(letter)`
 - Ask the word to `try(letter)` if `letter` hasn't been tried   already
- `isOver()`
 - Returns true if `currentWord` has been guessed completely or if `guesses` is 0
- `overMessage()`
 - Returns "You win" if `currentWord` is found
 - Returns "You lose" if `guesses` is 0
 - Returns an empty string if game is not over
- `render()`
 - Displays rendered word, and number of guesses left, and the guessed letters so far


## Main Progam

* create an array of words to be used as a bank of words for the game
* start a new game using this array of words
* accept user input (using `prompt()`) and make moves in a looping manner, until the game is over
* When the game is over, the game over message should be displayed and the
program should exit.

## BONUS

Use an external .txt file for your word bank. You will need to randomly read and load one word from the file start your game using that word.
