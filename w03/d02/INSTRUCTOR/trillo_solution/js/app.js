window.onload = function() {
  console.log("Hi");

  //Grab the delete buttons and add the click event to all of them
  $('#done-column').on('click', '.delete', deleteCard);

  //Grab the finish buttons and add the click event to all of them
  $('#todo-column').on('click', '.finish', finishCard);

  //Grab the new card button and add the event to it
  $('#new-card-button').on('click', addCard);
};

var addCard = function() {
  //Grab the value of the input box
  var inputBox = $('#new-card-text')
  var cardText = inputBox.val();

  //create the delete button
  var deleteButton = $('<span>');
  deleteButton.addClass("delete");
  deleteButton.text('X');

  //create the finish button
  var finishButton = $('<span>');
  finishButton.addClass('finish');
  finishButton.text('Finish');

  //add listeners to the newly created buttons
  deleteButton.on('click', deleteCard);
  finishButton.on('click', finishCard);

  //create the new card
  var newCard = $('<li>');
  newCard.text(cardText);
  newCard.append(deleteButton);
  newCard.append(finishButton);
  newCard.addClass('card');
  newCard.addClass('todo');

  //grab the list and prepend the new card
  var todoList = $('.card-list').eq(0);
  todoList.prepend(newCard);
  inputBox.val('')
};

var finishCard = function() {
  // grab the node of the completed card, move it over to the delete column
  var doneList = $('.card-list').eq(1);
  var task = $(this).parent();
  task.removeClass('todo');
  task.addClass('done');
  doneList.prepend(task);
  $(this).remove();
};

var deleteCard = function() {
  // remove the card from the DOM
  this.parentElement.remove();
};
