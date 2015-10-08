console.log("all set");

var cab = function( color, avalSeats, passengers) {
  this.color = color;
  this.avalSeats = avalSeats;
  this.passengers = passengers;
  this.acceptPassengers = function(passengerName){
    if(this.avalSeats <= 1) {
    this.passenger.push(passengerName)
  } else alert("car is full");
  }
  this.rollCall = function{
    console.log(this.passengers);
  }
}
var passneger = function() {
  this.name = "name"
};
var tom = new passenger("tom")
var matt = new passenger("matt")
var will = new passenger("will")
var jmb = new passenger("jmb")
acceptPassengers(jmb)
var endRide = function() {
  this.passengers.shift()
}
