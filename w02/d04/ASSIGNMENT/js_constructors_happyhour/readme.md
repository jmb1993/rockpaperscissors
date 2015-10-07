##Tonight, we HH! :beer::beer::beer:

I'm pretty sure we're walking, but just in case we need to take cabs, let's be prepared...

###File Setup
- Create a new `index.html` and `cabs.js`
- Link your JavaScript file appropriately! (No need for CSS today)
- Open `index.html` in Chrome.

###Cab
Write a `Cab` constructor function.

Your `Cab` should have the following attributes:
- `color` (a string)
- `availableSeats` (a number)
- `passengers` (an array)

And behaviors:
- `acceptPassenger`: a function that takes a passenger object and adds it to the existing array of passengers. Will there be room for each of your passengers? How many seats area available?
- `rollCall`: a function that logs a message to the console saying which passengers are riding in the cab.
- `endRide`: a function that removes a passenger from your `Cab`. You can make this as simple or complicated as you'd like.

###Passenger
Write a `Passenger` constructor function.

Your `Passenger` should have the following attribute:
- `name` (a string)

###Let's Go!

- Create 4 passenger objects (perhaps 4 of your koala classmates...)

- Create a cab. Maybe it's a `yellowCab` or an `uberBlack`...

- Get your passenger objects into the `Cab` using the `acceptPassenger` function. Will everyone have a seat?

- Remove all of your passengers one at a time with the `endRide` function.  **Bonus** if you remove everyone all at once.
