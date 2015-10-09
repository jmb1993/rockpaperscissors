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
  // Create a section tag with an id of middle-earth
  // Add an article tag for each land, and assign the name of the land as its id
  // Inside each article tag, include an h1 with the name of the land
  // Append the section to the body
};

var makeHobbits = function() {
  // Display an unordered list of hobbits in the shire
  // Give each hobbit a class of 'hobbit'
};

var keepItSecretKeepItSafe = function() {
  // Create an empty div with an id of 'the-ring'
  // Add the ring as a child of Frodo
};

var makeBaddies = function() {
  // Display an unordered list of baddies in Mordor
  // Give each of the baddies a class of "baddy"
};

var makeBuddies = function() {
  // Create an aside tag and append it below mordor
  // Display an unordered list of buddies in the aside
  // Give each of the buddies a class of "buddy"
};

var leaveTheShire = function() {
  // Grab the hobbits and move them to Rivendell
};

var beautifulStranger = function() {
  // Change the buddy 'Strider' textnode to 'Aragorn'
};

var forgeTheFellowShip = function() {
  // Move the the buddies to Rivendell
  // Create a new div called 'the-fellowship'
  // Add an h1 with the text 'The Fellowship' to this new div
  // Add each hobbit and buddy one at a time to 'the-fellowship'
  // After each character is added, make an alert that they have joined your party
};

var theBalrog = function() {
  // Change the 'Gandalf' textNode to 'Gandalf the White'
  // Add a class "the-white" to this element
  // In the style.css, add a CSS rule to give elements of the class "the-white"
  //   a white background and a grey border
};

var hornOfGondor = function() {
  // Pop up an alert that the Horn of Gondor has been blown
  // Boromir's been killed by the Uruk-hai! Put a line through Boromir's name
  // Remove the Uruk-Hai from the Baddies on the page
};

var itsDangerousToGoAlone = function(){
  // Take Frodo and Sam out of the fellowship and move them to Mordor
  // Add a div with an id of 'mount-doom' to Mordor
};

var weWantsIt = function() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
};

var thereAndBackAgain = function() {
  // Remove Gollum and the Ring from the document
  // Remove all the baddies from the document
  // Move all the hobbits back to the shire
};

// ==============================
//         Miscellaneous
// ==============================

var itWhispers = function() {
  // Add a class "whispered" to the hobbit that was clicked
  // Add a CSS rule in style.css for the class "whispered" to turn the text
  //   color to "goldenrod"
};

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  // Attach chapter event listeners here!
  document.getElementById('1').addEventListener('click', makeMiddleEarth);
};
