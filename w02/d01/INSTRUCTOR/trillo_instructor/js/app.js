window.onload = function() {
  console.log("Hi");

  //Grab the delete buttons and add the click event to all of them
  var deleteButtons = document.getElementsByClassName("delete");
  for(var i =0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener("click", deleteCard);
  }

  //Grab the finish buttons and add the click event to all of them
  var finishButtons = document.getElementsByClassName("finish");
  for(var j =0; j < finishButtons.length; j++){
    finishButtons[j].addEventListener("click", finishCard);
  }

  //Grab the new card button and add the event to it
  var newCardButton = document.getElementById("new-card-button");
  newCardButton.addEventListener("click", addCard)

};

var addCard = function() {
  //Grab the value of the input box
  var cardText = document.getElementById("new-card-text").value;

  //create the delete button
  var deleteButton = document.createElement("span");
  deleteButton.className = "delete";
  deleteButton.innerHTML = "X";

  //create the finish button
  var finishButton = document.createElement("span");
  finishButton.className = "finish";
  finishButton.innerHTML = "Finish";

  //add listeners to the newly created buttons
  deleteButton.addEventListener('click', deleteCard);
  finishButton.addEventListener('click', finishCard);

  //create the new card
  var newCard = document.createElement("li");
  newCard.innerHTML = cardText;
  newCard.appendChild(deleteButton);
  newCard.appendChild(finishButton);
  newCard.classList.add("card");
  newCard.classList.add("todo")

  //grab the list and prepend the new card
  var todoList = document.getElementsByClassName('card-list')[0];
  todoList.insertBefore(newCard, todoList.firstChild);
  cardText.innerHTML = "";
};

var finishCard = function() {
  // grab the node of the completed card, move it over to the delete column
  var doneColumn = document.getElementsByClassName("card-list")[1];
  var task = this.parentElement;
  task.classList.remove("todo");
  task.classList.add("done");
  doneColumn.insertBefore(task, doneColumn.firstChild);
  this.remove();
}

var deleteCard = function() {
  // remove the card from the DOM
  this.parentElement.remove();
}
