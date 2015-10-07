window.onLoad = function () {
  var doneCards = document.getElementsByClassName("done");
  for(var i =0; i < doneCards.length; i++) {
    doneCards[i].addEventListener("click", function(){
      this.style.display = "none";
    })
  }
var newCardButton = document.getElementById("new-card-button");
newCardButton.addEventListener("click", function(){
  var newText = document.getElementById("new-card-text");
  var textValue = newText.value;
  console.log(textValue);
  newText.value = "";
})
};
