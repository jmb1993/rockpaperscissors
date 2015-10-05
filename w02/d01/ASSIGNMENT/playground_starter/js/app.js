window.onload = function () {
  var newLi = document.createElement("li");
  newLi.className = "list-item";
  newLi.textContent = "poop";
  document.getElementById("the-list").appendChild(newLi);


  var theList = document.getElementById("the-list");
  var listItems = document.getElementsByClassName("list-item")[1];
  theList.removeChild(listItems);

  document.getElementById("main-heading").innerHTML = "Im gonna do something";

  var pTags = document.getElementsByTagName("p");

  for(var i =0;i<pTags.length;i++){ pTags[i].style.color = "red"};

  document.getElementById("main-heading").style.fontFamily = "Arial";
}
