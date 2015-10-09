// Cab constructor function
var Cab = function(color, availableSeats, passengers) {
  this.color = color;
  this.availableSeats = availableSeats;
  this.passengers = passengers;
}

Cab.prototype.acceptPassenger = function(passenger){
  if (this.availableSeats > 0) {
    this.passengers.push(passenger);
    console.log('\nHop in, ' + passenger.name);
    this.availableSeats -= 1;
  } else {
    console.log('\nSorry, ' + passenger.name + '. You\'ll have to take the next cab.');
  }
  return this.availableSeats;
}

Cab.prototype.rollCall = function() {
  console.log('\nRoll Call:\n----------');
  this.passengers.forEach(function(passenger) {
    console.log(passenger.name);
  });
  console.log('\n');
}

Cab.prototype.endRide = function() {
  // A fancy way of accepting an indeterminate number of arguments, and
  //  putting them into an array.
  var args = Array.prototype.slice.call(arguments);

  // A callback function to remove a given array of passengers
  var removePassengers = function(element, index, array) {
    // Get passenger's index in cab passengers array. If the passenger is not
    //  there, this method returns -1
    var pIndex = this.passengers.indexOf(element);
    if (pIndex >= 0) { // If the specified passenger is in the cab
      console.log('\nCiao, ' + element.name);
      this.passengers.splice(pIndex,1); // remove him/her
    }
    this.availableSeats += 1; // Increment available seats.
  };

  // Iterate over the given passenger set and call the removePassengers function.
  //  Note we have to pass in and define 'this' to mean the current 'this' (the
  //  cab object) inside the function. Otherwise, the function's 'this' will
  //  refer to the global object. See the documentation for 'forEach'.
  args.forEach(removePassengers, this);
}

// Passenger constructor function
var Passenger = function(name) {
  this.name = name;
}

// Create passenger objects
var zhen = new Passenger('Zhen');
var adam = new Passenger('Adam');
var will = new Passenger('Will');
var jason = new Passenger('Jason');
var hayley = new Passenger('Hayley');

// Create a cab.
var uberX = new Cab('black', 4, []);

// Get your passenger objects into the Cab.
uberX.acceptPassenger(zhen);
uberX.rollCall();

uberX.acceptPassenger(hayley);
uberX.rollCall();

uberX.acceptPassenger(will);
uberX.rollCall();

uberX.acceptPassenger(jason);
uberX.rollCall();

uberX.acceptPassenger(adam);
uberX.rollCall();

// Remove all your passengers.
// version 1: one at a time
// uberX.endRide(zhen);
// uberX.rollCall();
//
// uberX.endRide(hayley);
// uberX.rollCall();
//
// uberX.endRide(jason);
// uberX.rollCall();
//
// uberX.endRide(will);
// uberX.rollCall();

// version 2: all at once
uberX.endRide(zhen, hayley, jason, will);

// version 3: really all at once
// Write it so that if there are no arguments, every is taken out of the cab.
// uberX.endRide();
