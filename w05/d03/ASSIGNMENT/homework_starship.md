# STARSHIP FLEET Sinatra app

![umbra](http://41.media.tumblr.com/197ffa196198782c06e55926c6b7648d/tumblr_n1n8rxfPIn1rm3djoo1_500.jpg)

You are the manager for a fleet of alien starships, and the **Great Void Face** has demanded that you make an app to manage the starship inventory. You cannot refuse the **Great Void Face**. You really want to make an impression. Create an app that will manage all the starships and aliens in the fleet, and have the capability to Cread, Read, Update, and Destroy both starship and alien entries.

#####

## Step 0 - SETUP FILES AND DATABASE

* Make a folder for your app
* Set up your config.ru
* Set up your Gemfile
* Touch a server.rb for your controllers
* `bundle install` to install all the gems
* Create a database called `starships_app`


## STEP 1 - DATABASE SCHEMA

**MODELS:**

* An starship has many aliens
* An alien belongs to a starship
* Remember, foreign keys always go in the many, in this case there are many aliens for a starship.

* Make a schema.sql file and in it make tables for the following:


#### STARSHIPS TABLE

* serial primary key - `id`
* varchar(255) - `name`
* text - `img_url`
* varchar(255) - `description`
* varchar(255) - `star_system`

#### ALIENS TABLE

* serial primary key - `id`
* varchar(255) - `name`
* text - `img_url`
* varchar(255) - `role`
* integer - `starship_id`


## STEP 2 - DATABASE SEED

Seed your database initially with INSERTs for two starships. The star_system can be real or invented. For the image_url you can just take an image url from the widespread service known as the internet.


Seed your database with INSERTs for two aliens per starship. Each of the two alien's roles per starship should be 'captain' and 'engineer' to begin with. Remember to set the correct foreign keys (one captain per ship).

* Check your database to make sure it's all good


## STEP 3 - ROUTES AND CONTROLLERS

#### AppController class

* should have all seven RESTful actions for starships  
index route: `GET '/starships'` for all starships    
new route: `GET '/starships/new'` a form to make a new starship  
create route: `POST '/starships'` creates the new starship  
show route: `GET '/starships/:id'` for a single starship    
edit route: `GET '/starships/:id/edit'` a form to edit a starship  
update route: `PUT '/starships/:id'` updates the starship    
delete route: `DELETE 'starships/:id'` deletes a starship    


* start with a basic GET request and test from there

* should have all seven RESTful actions for aliens
* start with a basic GET request and test from there


## STEP 4 - VIEWS


#### ALIENS

* `index.erb` - should display every alien in a separate div, and the div should contain the `name`, `image`, `starship name` and the `role` of that alien. You should also have a link to the single alien for each one. The text displaying the starship name should link to the starship show page. Should also provide a link to create a new alien
* `show.erb` - Should display the single alien with all its info, including the starship name. Should also provide a link to edit the alien
* `new.erb` - Should display a form to create a new alien. The form should have a drop down of existing starships to select which the alien will belong to
* `edit.erb` - Edit form should be identical to the new form but it should also have a delete button to destroy the alien


#### STARSHIPS

* `index.erb` - should display every starship in a separate div, the div should contain all of the starship information and its image. You should have a link that sends you directly to the starship show page. Should also provide a link to create a new starship.
* `show.erb` - Should display the starship in a div, the div should contain all the starship's information. Should also provide a link to edit the starship. You should also display all the starship's aliens in separate divs; these divs should contain all the information for each alien and link to the specific alien
* `new.erb` - Should display a form to create a new starship.
* `edit.erb` - Should display a form to edit a starship, the edit form should provide a button to delete the starship.


## STEP 5

* Style your page using static public files from the public folder
* Expand your alien fleet to please the **Great Void Face**.


## BONUS

* Make it so that when you delete a starship, all of the aliens associated with that starship are also deleted.

---
