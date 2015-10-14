$( document ).ready( function() {

  // Dramatis Personae
  var friends = [
    'Doc Brown',
    'Einstein',
    'Copernicus',
    'Marvin Berry'
  ];

  var enemies = [
    'Biff Tannen',
    'Max Peterson',
    'Match',
    'Skinhead',
    'The Libyan nationalists'
  ];

  //Make into an object with fname:  and lname: "McFly"
  var family = [
    'Marty',
    'George',
    'Lorraine',
    'Dave',
    'Linda'
  ]

  var pointsOfInterest = [
    'Clock Tower',
    'Twin Pines Mall',
    'Lyon Estates',
    'Peabody Farm',
    'Hill Valley HighSchool'
  ];

  var $body = $( "body" );

  //------ Part 1 - Save the Clock Tower!--------

  function makeHillValley() {
    // Create a section tag with an id of hillValley;
    // Add each point of interest as an article tag
    // Inside each article tag include an h1 with the name of the point of interest
    // Append hillValley to your document body
var hillValley = $("section").attr("hillValley")
var $theClockTower = $("article").append([pointsOfInterest])
$body.append(hillValley)
  };
  makeHillValley();


  // If makeHillValley worked then the below will be useful.
  var $theClockTower = $( "article" )[0];
  var $mall          = $( "article" )[1];
  var $mcFlyhome     = $( "article" )[2];
  var $peabodyFarm   = $( "article" )[3];
  var $hillValHi     = $( "article" )[4];


  // ------ Part 2 - Hello, McFly! Anyone Home? -----


  // Make a constructor function, and assign each name in the `family` array to the key `fname` and assign the last name 'McFly' to the key `lname`. For example, Marty's dad might be assigned to the variable dad; `dad.fname + ' ' + dad.lname` should print 'George McFly'.
  var makeMcFlys = function(){
    lastname: "McFly"
var dad = family[1] + lastname,
var mom = family[2] + lastname,
var Marty = family[0] + lastname,
var Dave = family[3] + lastname,
var Lorraine = family[4] + lastname,
  }


  // Create a <ul> called familyList( Notice I'm outside of a function so other functions can see/use me).
var familyList = $("ul").attr("familyList").addClass(makeMcFlys())


  function displayMcFlys() {
    // Display an unorded list of Marty's family.
    // Give each McFly a class of 'family'
$familyList.addClass("family")
$family[0].attri("marty")
   makeMcFlys();
    // Give Marty an id of 'marty';



  };
  displayMcFlys();

  // ------ Part 3 - Great Scott! --------

  function deLoreanTest() {
    // Take Marty from his home and place him at the Twin Pines Mall, with Doc and Doc's dog, Einstein.

$pointsOfInterest[1].append(family[0])

   // Find the id 'timer' and set its display to `block`.
$("#timer").css("display", "block")

  };
  deLoreanTest();

  // Oh No!! The Libyan nationalists have arrived seeking revenge on Doc for doublecrossing them, and stealing their plutonium.

  function ohNoTheyFoundMe(){
    // Create an `<li>` element and put the Libyan nationalists from the enemies array inside it.  Add this <li> to the Twin Pines Mall article.
$("li").append(enemies[4])
$mall.append("li")
    // Add a text decoration which puts a line through Doc's name since the Libyans shot him :(
$(friends[0]).css("text-decoration", "strikethrough")

  };
  ohNoTheyFoundMe();

  // ----- Part 4 - This is Heavy

  function goingBackInTime(){
    // Use this function to get Marty to HillValley circa 1955.




   // Find an element with id `nineteen-fifty-five`.
   $("#nineteen-fifty-five").toggleClass("destination-time").addClass("present-time")
   // Find an element with id `nineteen-eighty-five`.
   $("#nineteen-eighty-five").toggleClass("destination-time").addClass("last-time-departed")
   // Change the element with the id `nineteen-eighty-five` so that it now has the class `last-time-departed`.
   // Change the element with the id `nineteen-fifty-five` so that is now has the class `present-time`.


  // Set the `Twin Pines Mall` element to display none
  $mall.css("display", "none")
    // Set the element with the id `mall` to display none
    $(pointsOfInterest[1]).css("display", "none")
  // Set the `Peabody Farm` element to display block
  $peabodyFarm.css("display","block")
    // Set the element with the id `farm` to display block
$(pointsOfInterest[]).css("display","block")
  // Remove Marty's family from the `Lyon Estate` article.
$("#lyon-es-1955").remove(family)


  // Find Marty and put him in the `Peabody Farm`.
$peabodyFarm.append(family[0]);

  };
  goingBackInTime();


  // ------ Part 5 - It's 'Make like a tree, and leave', Biff! -------

  function makeLikeATree() {

  // People think Marty's name is Calvin Klein.  Give him the property `aka`, and assign 'Calvin' to it.
  // Also Marty's mom, Lorraine isn't a McFly yet.  Change her last name to 'Baines'.
$(McFly[0]).append("aka").attr("Calvin")
$(McFly[2]).lastname("Baines")

  // Marty needs to get to the Enchantment Under the Sea dance so his mom and dad can fall in love, but Biff and his goons have other plans.
  // Create a new div called 'enchantment-dance' within Hill Valley HighSchool.
$hillValHi.append("div").attr("enchantment-dance")


  // Add each enemy(especially Max Peterson, and omit the Libyans!) one at a time to the enchantment dance.  After each enemy is added, make  an alert that warns Marty of each enemy's arrival.
$("#enchantment-dance").append(enemies[0]).alert("Biff has joined")
$("#enchantment-dance").append(enemies[1]).alert("Max has joined")
$("#enchantment-dance").append(enemies[2]).alert("Match has joined")
$("#enchantment-dance").append(enemies[3]).alert("Skinhead has joined")

  // Meanwhile, take the line-through text decoration off of Doc's name and put him at the Clock Tower along with his dog(circa 1955), Copernicus.
$(friends[0]).css("text-decoration", "none")
  };
  makeLikeATree();

  // ----- Part 6 - It's your cousin, Marvin; Marvin Berry ------

  function itsMarvinBerry(){
    // Find the element with the id 'marty-fade' and set its display to block.
$("# marty-fade").css("display", "block")

    // George knocks out Biff.
    // Change the color of the 'i' in Biff to black so that Biff now has a black i (get it?).
$(enemies[0]).css("display", "text-color: black")

  };
  itsMarvinBerry()

  // ------- Part 7 - 1.21 Gigawatts ----------


  function outtaTime(){
    // The Clock Tower is about to get struck by lightning. Get Marty over there as quickly as possible!

   // Use setInteval to give the clock tower image the appearance of being in a lighting storm:
     // setInterval will take 2 arguments. The first argument is an anonymous function that will change the opacity of the image.  The second argument is the interval of time between each invocation of the function.  For instance, window.setInterval(function(){alert('hello')}, 1000) will alert "hello" once every second(or 1000ms). Hint: One setInterval is probably not enough.



    // Set the element with the id 'nineteen-eighty-five' and class `last-time-departed` to now have the class `destination-time`

  };
  outtaTime();


  function getBackToTheFuture(){

    // Send Marty back to his time.
    // Set the element with the id `nineteen-fifty-five` to now have the class `last-time-departed`.
    // Set the element with the id nineteen-eighty-five to now have the class `present-time`.

    // Use clearInterval to stop the flickering of the clock tower image.


   // Set the `Peabody Farm` element to display none
     // Set the element with the id `farm` to display none
   // Set the `Twin Pines Mall` element to display block
    // Set the element with the id `mall` to display block


    // Put Marty, Doc, Einstein, and the Libyan nationalists at the mall.  Since Doc is wearing a bulletproof vest thanks to Marty, give Doc a 3px solid white border around his name.  Put a line through the Libyans since they crashed.



    // Dance up and down like Doc; You finished the homework!!!



  };
  getBackToTheFuture();
} );
