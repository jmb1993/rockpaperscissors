![Waiting to exhale](http://i.giphy.com/UhpGRl1Rg8qQw.gif)

# Working with the OMDb API

We're going to practice making AJAX calls to an API, saving data to a Mongo database via Mongoose, and client-side templating. Let's build an application that allows the user to hit the OMDb API for a movie, display movie information, add the movie to a favorites list.

Step 0.
- Create a new Express App.
- Include jQuery
- Include handlebars.js

Step 1.
- Checkout http://www.omdbapi.com/
- What happens if you visit "http://www.omdbapi.com/?t=star+wars"?
- Analyze the response. What is the content type?
- Use AJAX to make a request to `http://www.omdbapi.com/?t=SOME+MOVIE`
- Hard code in a movie title
- Console.log the return

Step 2.
- Add a button on "/" that triggers the AJAX call when clicked.

Step 3.
- Add a form on "/" that that accepts a movie title, then when the button is clicked hit the OMDB API to return information on that movie. Name the submit button 'OMDB'.
- Console.log the return

Step 4.
- Instead of using console.log to show the return, append the movie information
to the DOM using Handlebars.js templating.

Step 5.
- Add a button to make a POST request, which stores the following information in a favorite movies database:
    - Movie title
    - Director
    - Actors
    - Release date
    - Plot   
- To do this, create a Mongoose Model called `Movies` and a Schema called `movieSchema`.
  - Your model should link to a `movies` collection in a Mongo database entitled `entertainment`.


Bonus
- Can you create a search box to display movie titles?
- If you click on a movie title display the movie poster.

Super Bonus
- Now that you are so awesome at this, go ahead and add 'PUT' and 'DELETE' routes to update and remove movies respectively from your `movies` collection.

What? Hungry for more!!??
- Fine! Create an avatar to appear when a user logs in using the [Gravatar](https://en.gravatar.com/) API. Now, go to bed!
