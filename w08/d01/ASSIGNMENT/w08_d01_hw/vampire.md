# Vampires!

![Interview with the Vampire](https://mischiefmanagedsite.files.wordpress.com/2014/05/3.gif)

### Completion
At least 3 parts of this homework.

Here is a helpful guide http://mongoosejs.com/docs/
### Setup
  - Create the server.js file
  - Create the HTML and an app.js file.
  - Create the model.js

### Part 1
Setup the server.js file.
Write the code that will require and instantiate all dependencies, connect to your local database via mongoose, setup the port which you will be listening on, etc.

In the model.js 
Create the Schemas and Models for your vampires.

Each vampire should have   
  - name is string
  - hair_color is string
  - eye_color is string
  - dob is data
  - loves is array
  - location is string
  - gender is string
  - victims is int

Export the Model and Import in the server.js file.
Import the data in with the `seed.js`, then seed.

Here is a code example to seed into the database.
```javascript
var potatoBag = [/* a humongous amount of potato objects */];
Potato.collection.insert(potatoBag, onInsert);
function onInsert(err, docs) {
    if (err) {
        // TODO: handle error
    } else {
        console.info('%d potatoes were successfully stored.', docs.length);
    }
}
```

### Part 2
#### Create by comparison

Create a button called [victims] in HTML when clicked, hit your server.
Create a route in server when hit, finds the data using mongoose, returns that data and using ajax create a Div for each vampire, that display the following info for each vampire.

Name of the vampire and number of victims they have.
If the vampire has
  - have greater than 500 victims make the text red.
  - have greater than 150 AND fewer than 500 victims make the text black.
  - have fewer than or equal to 150 victims make the text grey.

### Part 3
#### Create by exists or does not exist

Create a button called [eyes] in HTML when clicked, hit your server.
Create a route in server when hit, finds the data using mongoose, returns that data and using ajax create a Div for each vampire, that display the following info for each vampire.

Name of the vampire and color of it's eyes.
If the vampire has
  - brown eyes make the text brown.
  - green eyes make the text green.
  - blue eyes make the text blue.

### Part 4
#### Create by values

Create a button called [love] in HTML when clicked, hit your server.
Create a route in server when hit, finds the data using mongoose, returns that data and using ajax create a Div for each vampire, that display the following info for each vampire.

Name of the vampire and things it loves, and it's date of birth.
If the vampire has
  - loves brooding make the text pink.
  - born before 1800 make the text purple.
  - born before 1400 make the text teal.
  - born before 800 make the text orange. 

### Bonus
And make pretty CSS!~

