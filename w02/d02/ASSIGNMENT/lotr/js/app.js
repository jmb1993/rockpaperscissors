// ==============================
//       Dramatis Personae
// ==============================

var hobbits = [
"Frodo Baggins",
"Samwise 'Sam' Gamgee",
"Meriadoc 'Merry' Brandybuck",
"Peregrin 'Pippin' Took"
];

var buddies = [
"Gandalf the Grey",
"Legolas",
"Gimli",
"Strider",
"Boromir"
];

var baddies = [
"Sauron",
"Saruman",
"The Uruk-hai",
"Orcs"
];

var lands = [
"The Shire",
"Rivendell",
"Mordor"
];

// ==============================
//           Chapters
// ==============================

var makeMiddleEarth = function() {
  console.log("Trying to make middle earth.");
  // create a section tag with an id of middle-earth
  // Add an article tag for each land, and assign the name of the land as it's id
  // inside each article tag include an h1 with the name of the land
  // append the section to the body
  document.createElement("section")
  document.section.id = "middle-earth"
  document.section.createElement("article-1")
  document.section.createElement("article-2")
  document.section.createElement("article-3")
  document.article-1.id = "h1" + lands[0]
  document.article-2.id = "h1" +lands [1]
  document.article-3.id = "h1" +lands [2]
  document.body.appendChild(section)

};

var makeHobbits = function() {
  // display an unordered list of hobbits in the shire
  // give each hobbit a class of "hobbit"
  document.body.createElement("ul")
  document.ul.id = hobbits[]
  hobbits[] class = "hobbit"

};

var keepItSecretKeepItSafe = function() {
  // create an empty div with an id of 'the-ring'
  // set the text of the div to be "O" (the letter O)
  // add the ring as a child of Frodo
  document.createElement("div")
  div.id = "the-ring"
  document.getElementById("the-ring")appendChild(document.getElementsByClassName("hobbit").hobbits[0])
};

var makeBaddies = function() {
  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"
  document.createElement("div")
  div.id = baddies[]
  baddies[] class = "baddy"
};

var makeBuddies = function() {
  // create an aside tag and append it below mordor
  // display an unordered list of buddies in the aside
  // give each of the buddies a class of "buddy"
  document.createElement("aside")
  document.body.article-3.appendChild("aside")
  document.body.aside.createElement("ul")
  ul.id = buddies[]
  buddies[] class = "buddy"
};

var leaveTheShire = function() {
  // grab the hobbits and move them to Rivendell
  document.getElementsByClassName("hobbits").insertBefore(document.article-2, document.article-1)
  removeChild(document.getElementsByName(document.body.ul))
};

var beautifulStranger = function() {
  // change the buddy 'Strider' textnode to "Aragorn"
  document.body.aside[3].changeText = "aragorn"
};

var forgeTheFellowShip = function() {
  // move the buddies to Rivendell
  // create a new div called 'the-fellowship'
  // add an h1 with the text 'The Fellowship' to this new div
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  document.getElementsByClassName("buddies").insertBefore(document.article-2, document.article-1)
document.body.createElement("div")
div.id= "the - fellowship"
document.body.div.createElement("h1")
h1.id = "The- Fellowship"
hobbits[0].insertBefore(getElementById("the - fellowship")).alert("Frodo Baggins has joined ")
hobbits[1].insertBefore(getElementById("the - fellowship")).alert( "Samwise Gamgee has joined")
hobbits[2].insertBefore(getElementById("the - fellowship")).alert("Meriadoc 'Merry' Brandybuck has joined")
hobbits[3].insertBefore(getElementById("the - fellowship")).alert("Peregrin 'Pippin' Took has joined")
buddies[0].insertBefore(getElementById("the - fellowship")).alert("Gandalf the Grey has joined")
buddies[1].insertBefore(getElementById("the - fellowship")).alert("Legolas has joined")
buddies[2].insertBefore(getElementById("the - fellowship")).alert("Gimli has joined")
buddies[3].insertBefore(getElementById("the - fellowship")).alert("Aragorn has joined")
buddies[4].insertBefore(getElementById("the - fellowship")).alert("Boromir has joined")
};

var theBalrog = function() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // add a class "the-white" to this element
  // in the style.css, add a css rule to make elements of the class "the-white"
  // have a white background and a grey border
  document.getElementById("The-Fellowship").buddies[0].changeText = "Gandalf the White"
  document.getElementsByName("Gandalf the White") class = "the white"
};

var hornOfGondor = function() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai! Put a strike through on boromir's name
  // Remove the Uruk-Hai from the Baddies on the page
return  alert("the horn of gondor has been blown!")
document.getElementsByName("the-fellowship").buddies[4].style.setProperty("text-decoration", "line-through");
document.getElementsByClassName("baddies").removeChild(baddies[2]);
};

var itsDangerousToGoAlone = function(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
document.getElementById("the-fellowship").hobbit[0].insertBefore(document.getElementById("article-3")lands[2])
document.getElementById("the-fellowship").hobbit[1].insertBefore(document.getElementById("article-3")lands[2])

  document.body.article-3.createElement("div")
  div.id = "mount-doom"
};

var weWantsIt = function() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  document.getElementById("article-3").createElement("div")
  div.id = "gollum"
  document.getElementById("the-ring").insertBefore(document.getElementById("gollum"))
document.getElementById("gollum").insertBefore(document.getElementsByTagName("article-3").lands[2])
};

var thereAndBackAgain = function() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
document.getElementById("gollum").removeChild(getElementById("the-ring"))
document.body.removeChild(getElementById("gollum"))
document.getElementsByClassName("hobbit").insertBefore(document.getElementsByTagName("article-1"))
};

// ==============================
//         Miscellaneous
// ==============================

var itWhispers = function() {
  // add a class "whispered" to the hobbit that was clicked
  // add a CSS rule in style.css for the class "whispered" to turn the text
  // color to "goldenrod"

onClick(hobbit[].style("whispered"))
};

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  // Attach chapter event listeners here!
  document.getElementById('1').addEventListener('click', makeMiddleEarth);

  document.getElementById('2').addEventListener('click', makeHobbits);
  document.getElementById('3').addEventListener('click', keepItSecretKeepItSafe);
  document.getElementById('4').addEventListener('click', makeBaddies);
  document.getElementById('5').addEventListener('click', makeBuddies);



};
