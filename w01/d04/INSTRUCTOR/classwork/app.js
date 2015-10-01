/* 
  JavaScript Objects Lession 
  @author Jason Seminara
  @date 2015-10-01
*/

// Let's make sure the app is loaded
console.log('app.js loaded');

//let's make some objects
var ford = {
  color: 'red',
  type: 'sedan',
  doorCount: 4,
  airBags: false,
  year: 1975,
  accidents:{
    2001:2,
    1980:1,
    1986:5,
    1990:2
  }
};

console.log(ford);

// EXERCISE
// Let's make some cars!
  var mustang = {
    color: 'red',
    class: 'muscle',
    horsePower: 435

  };

  var tt = {
    color: 'silver',
    class: 'sport',
    horsePower: 211
  };

  var gallardo = {
    color: 'black',
    class: 'exotic',
    horsePower: 543
  };

  //this function will print out "I'm a really..." with extra e's given the horsepower of the car
  var bonus = function(array){


    //cycle through the array provided
    for(var i=0; i<array.length; i++){
      
      var currentCar = array[i];

      //count how many e's are need based on horsepower/100
      var eS = currentCar.horsePower/100;
      
      //initialize a string to build the e's off of
      var eThing = "";
      
      //build a string with the right amount of e's
      for(var j=1; j<eS; j++){
        eThing += "e";
      }
      
      //print it
      console.log("I'm a " + currentCar.color + " " + currentCar.class + ", and I go re" + eThing + "ly fast!");
    }
  };
  var carArray = [mustang, tt, gallardo,ford];
  bonus(carArray);

// I'd have to iterate over EVERY item until I find my record
socialArray[/*300mitems*/
  { name:'jason',
    ss:'123-45-6789',
    address:'123 '
  },
  //+300million
];
for(var i =0; i<socialArray.length;i++){
  /// this might take a while... I have to sort through every citizen in the country to find me
  // I might actually be the last one in the list. :(

}

// 
socials = {
  '000-12-0987':'you',
  '000-12-0985':'you',
  '000-12-0983':'you',
  '000-12-0986':'you',
  '000-12-0986':'you',
  '123-45-6789':'me'
}


console.log(socials['123-45-6789']) // me!

