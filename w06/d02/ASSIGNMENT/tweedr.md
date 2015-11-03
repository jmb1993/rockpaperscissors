#### Learning Objectives

- Build a web app following the rails MVC structure
- Create a database and seed file using Rails conventions
- Use rails console to test/inspect the database and associated models

# Tweed.r

Your assignment tonight is to build a simple text/status-based social media app.

![Imgur](http://i.imgur.com/2LlEyPd.png)

### Step 1 - New App

Create a new Rails app in your day folder. Make sure that your database is set
to PostgreSQL.

### Step 2 - Models

#### Make 2 Models, Tweed, and Comment. 

Tweeds should have many comments. Comments should belong to Tweeds.
Generate a new migration for your 'tweeds' table.
Generate a new migration for your 'comments' table.
Once you have created your migration

### Step 3 - Routing and Controllers

Each of the routes should be directed towards an action on your controller.

##### User Stories
- As a user I want see all of the posted tweeds on the homepage, so that I can browse quickly and easily.
- As a user I want to be able to view an individual tweed, so that I can focus on one entry.
- As a user when I view an individual tweed, I want to see its comments.
- As a user I want to be able to post a new tweed, so that I can share my thoughts with my friends.
- As a user I want to be able to edit a tweed, so that I can fix a mistake I made.
- As a user I want to be able to delete a tweed, so that future employers will not know what I did that one night.
- As a user I want to be able to comment on an individual tweed.

### Step 4 - Seeds

After defining your routes and associated controller actions you should create a
seed file. The seed file should  have a few tweeds, and each tweed should have atleast one comment.

### Step 5 - Views

Create all the views neseccary to accomplish the User Stories. 

#BONUS 

Make log-ins sessions so that user can sign up and and view, post, edit, delete their own tweeds.

