#Super Secret Diary

![Diary](https://lh6.ggpht.com/5pe2dLIdEB88M8nW6VmaStz3gkmQubU99VvGurFY4-LYsqcnBrKwhjuavYsd=w300)

## Sessions, Log-in, posts

Tonight we are making a simple app which will allow the user to create a new account, log in with sessions to view their own blog posts, and create new blog posts.

### Step 0.
- Create a new Express app.

### Step 1.
- Install the server-side dependencies.

### Step 2.
- In server create the session code

GET Routes
- Setup a home route
- Setup a login route
- Setup a create-user route
- Setup a user/:id route

When the home route is hit, the server checks if the user has a session. If there isn't a session server will redirect the user to login route.

POST Routes
- Setup a create-user route
- Setup a login route
- Setup a user/:id route

When the user creates or logs in successfully, it redirects the user to their own user route.


### Step 3.

- Create the Mongo/Mongoose files (Schema)
- Create the methods that will find user in db (compare passwords)
- Create the methods that will create a new user
- Create the methods that will create a new post
- Create the methods that will find all posts

### Step 4.

- Create the home HTML handlebars
- Create the login HTML handlebars
- Create the user HTML handlebars

Setup the handlebars files to display data.
Make sure the `<form action=` is hitting the correct route.

Make sure when the user hits their own id route, it renders all the posts they made.

When they submit a new post, it should add to the database as well as to the HTML.


Bonus: CSS
