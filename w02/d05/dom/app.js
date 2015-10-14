window.onload{
  var Cell = function(value){
    this.value = " ",
    this.playable =  true
    Cell.prototype.setState= function(letter){
    this.value =letter;
    this.playable = false;
  };
      }


  }
var board = {
  cells: [],
  current player: "",
  winner: ""
  var startGame = function(){
    this.player == "x";
    this.winner = " "


document.getElementsByClassName("cell").addEventListener("click", function(e){
  Cell.value == prompt("enter your move x/o");
  if (Cell.value == "x") {
    return Cell.value = x  Cell.innerHTML = "x";
   {
      else if (Cell.value == "o") {
        return Cell.value == o  Cell.innerHTML = "o"; {
          else alert("invalid choice");
        }
      }
    }
  }
})

}
  }

  var game = {
    board: board,
    start: function() {
      board.startGame
    }

  }
}


}
