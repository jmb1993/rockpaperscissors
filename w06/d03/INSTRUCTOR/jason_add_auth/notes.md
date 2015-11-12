#Learning Objectives

* Build a full scale Ruby on Rails application
* Describe and implement user sessions and auth in Rails
* Practice using Rails helpers
* Practice with multi-realtional objects

**I do**

Frame the next two days. They will be long, their brains may hurt, its fine!!!! We will be taking in a lot of new information and implementing a lot of new things with our good friend rails. There will be a lot of little things that I will be doing that you may not remember how to implement. I will be attempting to screencast each of these builds for you to reference. Frame tun.r, this is a full scale ruby on rails application with the use of user accounts and authorization. The days will go as follows. I will build something as an example and you will build it in tun.r


#Day One Objectives
* Describe and implement validation methods
* Describe sessions and cookies
* Allow users to have secure passwords by hashing
* Describe and implement authentication methods


**I DO**

* Create a new rails app `rails new user_creation --database=postgresql`
* Go to the `Gemfile` and add `gem 'pry-rails'` to the development enviornment
* Back in terminal 'bundle install' (Make sure no one has issues with bundle install, if there are issues they may need to `brew install rbenv-bundler`, `rbenv rehash`)
* Lets make our database for this application `rake db:create`
* Before we migrate we need to make our user
* `rails g User name:string email:string`
* 'rails g controller Users new create index'
* The result of the last two commands is our controller has been scaffolded, our migration for the User has been set up with the proper data inputs, also our User model has been set up. (rails has many nice generators, however they add a lot of extra weight, you can actually scaffold an entire application but it is not recommended)
* Lets take a look at what it has done and make the adjustments needed.
  * Add `@user = User.all`
  * Add `@user = User.new` to the new route
  * Add `@user = User.new user_params` with a conditional `if @user.save redirect_to users_path else redirect_to new_user_path`
  * Add the private `user_params` method, explain what this is doing. `params.require(:user).permit(:name, :email, :password_digest)`

* Lets go to our routes page and swtich up the way they are written, this is one of the issues with scaffolding, it gets messy and unless you know where to look you may miss something, so be careful.

* Delete all the comments and the routes create by the scaffold, change the contents to `resources :user, only: [:new, :create]` for now.

* Note I have password and password confirmation, both of which we will not worry about until later.
* Head into the rails console, `rails console --sandbox`, this is a version of the rails console that will allow  you to make objects and play around with persistent data while rolling back your DB to before you entered into the console after you are done.

* Lets make a new user `User.new`
* Notice we have no attributes
* Lets make another user `will = User.new "Will", "will.shaw@ga.co"`
* Lets check to see if the user is valid `will.valid?` - this should return true because the object is currently valid and we havent set any requirements yet.
* User.new will return true or false based on wheter or not the object has been created in memory, save will return true if the save was successful or false if it wasnt
* There is a way to do this in one step with User.create({}), this is specific to your program, you may need the option to redirect accorind to the save.
* We can get the user back many ways, the easiest probably being by the `id`, we can `find_by(email: "will.shaw@ga.co")`
* Lets update our user `will.email = "will.shaw@generalassemb.ly"`, lets now grab the object from the DB, did it work? We need to save!!
* The is also a way to do this in one step, `update_attributes` if you would like to update multiple attributes `will.update_attributes(name: "Will.I.Am,", email: "will@gmail.com")`, or `update_attribute`, if you would like to update one `will.update_attribute(:name, "William")`


* The User model we created now has working name and email attributes, but they are completely generic: any string (including an empty one) is currently valid in either case. And yet, names and email addresses are more specific than this. For example, name should be non-blank, and email should match the specific format characteristic of email addresses. Moreover, since we’ll be using email addresses as unique usernames when users log in, we shouldn’t allow email duplicates in the database.

In short, we shouldn’t allow name and email to be just any strings; we should enforce certain constraints on their values. Active Record allows us to impose such constraints using validations. We are going to cover several of the most common cases, validating presence, length, format and uniqueness. Finally common validation, confirmation. And we’ll see how validations give us convenient error messages when users make submissions that violate them.

* So we are going to couple our new way of validating our users with some tests, this is one of the places where TDD works very well, it will allow us to be confident in our valiations, also how annoying would it be to have to make a new user every single time you need to test to see if one of your validations are working??? Super annoying!! I promise you!

* In `test/models/user_test.rb` fill int he following

```ruby
require 'test_helper'

class UserTest < ActiveSupport::TestCase

  def setup
    @user = User.new(name: "Example User", email: "user@example.com")
  end

  test "should be valid" do
    assert @user.valid?
  end
end
```

* The setup method is a special test method that allows us to setup a user before each test.
* The assert method returns true if it succeeds and false if it fails
* Lets run the test, `bundle exec rake test:models`, this should pass because again we havent set up and vaildations

* Lets add a test for the name being blank

```ruby
  test "name should be present" do
    @user.name = "    "
    assert_not @user.valid?
  end
```

* Lets add a validation method to our User so we can validate that a name is present
* To the User model `validates :name, presence: true`
* Back in the console make a new user `will = User.new({name:"", email: "will.shaw@ga.co"})`
* run the `valid?` method on it, you should return false
* check the errors for the nice messages that rails validations gives to us
* lets try to save this user, because of the faliure of the validation the save automatically fails

* Lets add a test for the email

```ruby
  test "email should be present" do
   @user.email = "     "
   assert_not @user.valid?
  end
```

* If we run the test we should get a failure, lets add the validation to the User model to make the test pass.

**You do**

- Copy tunr_app from the Instructor folder, this is a bare bones rails app, with some css added for you.
- Create a User model file, the user should have the following attributes to start, a username and email. We will add passwords later.
- Create a User controller with the 7 restful routes
- Write the validation tests and validations for the username and email to be present

**I do**
* So now that we have validated the presence of things, lets get a little deeper. We know we are going to display the users name on the site, so lets make sure they have something to actually display by validating the length.

* First thing, lets write some tests so we dont have to mess around with making a user everytime.

```ruby
  test "name should not be to long" do
    @user.name = "a" * 51
    assert_not @user.valid?
  end

  test "email should not be to long" do
    @user.email = "a" * 244 + "@emample.com"
    assert_not @user.valid?
  end
```

* Lets run the test suite, we should have two failing tests
* Lets add the proper validations for both the email and name to make sure we have the proper length

```ruby
  validates :name, presence: true, length: {maximux: 50}
  validates :email, presence: true, length: {maximum: 255}
```

* Lets run our tests, GREEN LIGHT!!

**You Do**

- Add the proper tests and validations to validate the length of your users input, these can be any length you decide, programmers choice!!


**I Do**

* So we have now tested the length and presence of both the email and the name. However our email will accept any string shorter than 255 characters, is this a good thing? What if we need that email. Lets test and validate for a true email address.

```ruby
  test "email validation should accept valid addresses" do
  valid_addresses = %w[user@example.com USER@foo.COM A_US-ER@foo.bar.org
                       first.last@foo.jp alice+bob@baz.cn]
  valid_addresses.each do |valid_address|
    @user.email = valid_address
    assert @user.valid?, "#{valid_address.inspect} should be valid"
  end
  end
```

* Note that I’ve included an optional second argument to the assertion with a custom error message, which in this case identifies the address causing the test to fail:

* Similarly, lets test for email addresses that arent right

```ruby
  test "email validation should reject invalid addresses" do
  invalid_addresses = %w[user@example,com user_at_foo.org user.name@example.
                         foo@bar_baz.com foo@bar+baz.com]
    invalid_addresses.each do |invalid_address|
      @user.email = invalid_address
      assert_not @user.valid?, "#{invalid_address.inspect} should be invalid"
    end
  end

```

* Lets add the proper validations to our user model
```ruby
 EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
```

* to the end of the email validation lets put the following `format: {with: EMAIL_REGEX}`
* run the tests again, GREEN LIGHT!!

**You Do**

- Add the validations and tests for the email, I will give you the regexp and I will leave up the test so you can have something to go against. This is one of the larger tests you will write.


**I Do**

* Now that we have gotten this far, lets check for uniquness of an email. A name may not be unique so it would be hard to test that, however tunr will have usernames and emails, we can check that both of those are unique.

```ruby
  test "email addresses should be unique" do
    duplicate_user = @user.dup
    @user.save
    assert_not duplicate_user.valid?
  end
```


* The method here is to make a user with the same email address as @user using @user.dup, which creates a duplicate user with the same attributes. Since we then save @user, the duplicate user has an email address that already exists in the database, and hence should not be valid.

* Lets add the validation to make out test pass
* to the email validation line lets add the following `uniquness: true`

* lets take this a step further
* What if I tried to make a user with the email will.shaw@ga.go and a user with the email Will.Shaw@ga.co, would it work?
* It would because the validation doesnt care about case. So lets take care of that
* change `uniquness: true` to `uniqueness: {case_sensitive: false}`
* Lets also add a way to make sure that each email is downcased before it is saved to ensure that the validation will work
* `before_save {self.email = email.downcase}`


**You do**

- To your user model add a validation that will validate that the email and username are unique. Write the proper tests for this also

# Secure passwords

* So now we know how to do a few validations, there are many we can run and many things we can validate, all of which are quite simple and straight forward. Again this is one of the places where TDD comes in handy.

* We have seen passwords mentioned. Lets talk about implementing them.
* So lets go ahead and add a password to our user model.
* From terminal `rails g migration add_password_to_users password:string`
* In the rails sandbox, what is the problem with this? Discuss amongst yourselves.
* So lets let bcrypt do some work for us, to your user model add the following line `has_secure_password`
* lets rollback to before the previous migration and lets add the proper migration. Rolling back isnt a goodthing when you have a ton of data but for now it is just easier. BAD FORM. `rails generate migration add_password_digest_to_users password_digest:string`
* So we are using a new key work here, `password_digest`, this is the result of the confirmed password and the password matching and being hashed. The bcrypt gem will hash / salt the string into a new string. Hasing is different from encryption in the sense that it is only one way, an encryption is meant to be decoded somewhere along the line a hash is not.


* Lets add `has_secure_password` to the user model
* Lets run our tests again. Something happened!! Our test fail now, because we have a validation that we are not meeting in our first few tests anymore.
* Lets fix that by adding `password: "poop", password_confirmation: "poop"`

* Sweet all of our tests pass again.

**You do**

- In your Gemfile, make sure bcrypt is uncommented and from terminal run bundle install
- In your user model add the following line `has_secure_password`
- Add a password_digest field to your user model, run the migration and fix the proper test to make sure the tests pass.
- Be sure to update your user_params accordingly also


**I do**

- So last thing I think I want to validate is that the length of the password has been entered properly. I want my users to have the most awesome of awesome passwords. We could spice this up with regexps etc but for now I just want to know they used more than 4 characters.

- So first I will write my tests then pass them

```ruby
test "password should be present (nonblank)" do
   @user.password = @user.password_confirmation = " " * 6
   assert_not @user.valid?
 end

 test "password should have a minimum length" do
   @user.password = @user.password_confirmation = "a" * 5
   assert_not @user.valid?
 end
```

* note the double assignment here. I am saying both of these values should be equal to this. Kind of like JS where you can set two variables at once.

* so lets run our tests, RED LIGHT! Failure, why? Oh right lets right the validations that make this test pass.

```ruby
validates :password, presence: true, length: {minimum: 6}
```

* So the presence validation combined with the min length will prevent blank strings and also make sure the length is not less than 6

**You Do**

- Add the proper test and validation to make sure your password is the length you choose and not blank.

# We should be close to the afternoon

**I Do**
* One thing that is important is to give users the ability to sign up. We can now create a user and validate them, so lets give our website the ability to accept them.

* Lets update our view for a minute

* I am going to be using bootstrap so we can look at something pretty while doing this. You will not need this for tun.r in the slightest.
* in the `Gemfile`, `gem 'twitter-bootstrap-rails'`,in the terminal  `bundle install`, in the terminal `rails generate bootstrap:install static`

```
<h1>Sign Up</h1>

<%= form_for @user, :html => {:class => "form-group center"} do |f| %>
    <%= f.label :name, "First name:", class: "control-label"%>
    <%= f.text_field :name%>
    <%= f.label :email, "Email:", class: "control-label"%>
    <%= f.text_field :email%>
    <%= f.label :password, "Password:", class: "control-label"%>
    <%= f.password_field :password%>
    <%= f.label :password_confirmation, "Confirm Password:", class: "control-label"%>
    <%= f.password_field :password_confirmation%>
    <%= f.submit%>
<%end%>
```

**You Do**

- Create a form in the user new view. This form should accept the following inputs, username, email, password and password_confirmation. It should have a class of form.

**I do**
- Set up a users page and the users show page.

**You do**
- Set up the users page and the user show page for tunr
- The users page should show the users username and email, each user div should have a class of user
- The users show page should have a welcome message with the users username and have a button to delete the user if they would like.

**I do**
- Now lets say our user inputs so bad information, right now we have no way of telling the user what they did wrong. However if you remember back to before, validations give us some pretty nice error messages. Lets use those to our advantage.

```
<% if @user.errors.any? %>
  <div class="error_messages">
    <h2>Form is invalid</h2>
    <ul>
      <% for message in @user.errors.full_messages %>
      <li><%= message %></li>
      <% end %>
    </ul>
  </div>
  <% end %>
```

**You do**
- Add some better error handling to your application. To the form for the sign up add the error handling. Note that if you are using a redirect when the user save fails you will not see the errors as the controller is reloading, it must be a render.

# Sessions

- So we now have the ability to make a user and have them persist in our database. This is all well and good but it is very limited. Every modern website gives you the ability to log in , log out and save your state if you wish. This is called a session. Explain a session more, where the data is stored, how it is stored and then we will go into implementation.

- A very important fact is that HTTP is stateless, meaning it treats every transaction as its own piece, unable to persist any data from the previous request. So in order to cicumvent the HTTP short coming we use a session, a session is just a semi permenant connection between two computers. The most common way to store a session is in a cookie. Which is just a small piece of text placed on the users browser and because cookies persist from one page to the next they can store data.


- The easiest way to think about a session, wheter it be in rails or some other framework is to think about it RESTfully. Meaning treat the log in page as the new form, which has a create post route, and treat the log out button as a delete route.


**I Do**

- So the first thing we need to do is create a controller, so we can control the flow of our application.
- `rails g controller Sessions new`, the reason I don't want to scaffold the create and destroy routes is similar to before, because the scaffold also creates views. We dont need those for now.
- So now that we have our controller, lets make the routes that give us the ability to hit the controllers.
```
get    'login'   => 'sessions#new'
post   'login'   => 'sessions#create'
delete 'logout'  => 'sessions#destroy'
```

**You do**
- Create a sessions controller, with new, create and delete
- Add the proper routes for your sessions to your rails app.


**I Do**
- Now that we have the routes to hit our controller lets make a view so we can send information to our server.

```
<%= form_for :session, url: login_path,  :html => {:class => "container"} do |f| %>
    <h1>Log In</h1>
    <% flash.each do |message_type, message| %>
      <div class="alert alert-<%= message_type %>"><h1><%= message %></h1></div>
    <% end %>
    <div class="form">
    <%= f.label :username, "Username:"%>
    <%= f.text_field :username%>
    <%= f.label :password, "Password:"%>
    <%= f.password_field :password%>
    <%= f.submit "Log In"%>
  </div>
  <p>New user? <%= link_to "Sign up now!", new_user_path %></p>
<%end%>
```

- Lets also change the home route to the login_path instead of the new path. This will give us the option to signup or login.

**You Do**
- Add a form for your user to login. Change your root route to the login path.

**I do**

- To the create controller lets add the logic.
```
  user = User.find_by(username: params[:session][:username])
  if user && user.authenticate(params[:session][:password])
    binding.pry
    redirect_to user
  else
    flash.now[:danger] = "Invalid email/password combination"
    render 'new'
  end
```

- Note I am finding the user by the username, checking to see if the user is there and then checking to see if the password is legit. If it is log me in and send me my page. If it isnt send me back to the login and give me an error message. But hey, why isnt active record taking care of the errors for me? Unfortunately without the validations there will be no nice error messages.

**You do**

- In your app set up your create route. Similar to what we just did.

**I do**

- So now that we have the ability to log a user in lets go ahead and save some information so we can persist this one user across our entire applicaiton. A few eeks ago we used modules. This is where we actually see where they come in handy!
- Rails convenientently made a module for our sessions and users when we scaffolded them. Lets check these out now.
- So as we can see we have the sessions_helper. There is one controller our entire application is inheriting from, ApplicationController, so the easiest way to include all of the session methods across our application is to include this module in that controller. Ruby inheritance makes so much sense!!!

**You do**
- Include the sessions_helper module into your ApplicationController


**I do**
- Adding a session is actually super easy! Rails makes it nice with the session keyword.
- `session[:user_id] = user.id` will store a cookie on our browser and allow the information to persist across the application. This is a temporary cookie which exprires immediately when the browser is closed.
- So lets use our module and make a log in method

```ruby
def log_in(user)
    session[:user_id] = user.id
end

```

- Awesome now we have a way to make a session. So lets add to our applications create route for session the log_in method for the found user.

**You do**

- Add the log_in method to your session_helper.rb, add the log_in method to your create controller.

**I do**
- Awesome we are now at the point where we are persisting data across our application via a cookie. So now we dont have to go get the user every time but we do need a way to get the user at least once. So lets write a method current_user which will allow us to grab our current_user.

 - Send this for explination of the ||= operator, may be easier for them to read and ask questions than stall the class for this reason.

```
What the *$@! is ||= ?
The ||= (“or equals”) assignment operator is a common Ruby idiom and is thus important for aspiring Rails developers to recognize. Although at first it may seem mysterious, or equals is easy to understand by analogy.

We start by noting the common pattern of incrementing a variable:

  x = x + 1
Many languages provide a syntactic shortcut for this operation; in Ruby (and in C, C++, Perl, Python, Java, etc.), it can also appear as follows:

  x += 1
Analogous constructs exist for other operators as well:

  $ rails console
  >> x = 1
  => 1
  >> x += 1
  => 2
  >> x *= 3
  => 6
  >> x -= 8
  => -2
  >> x /= 2
  => -1
In each case, the pattern is that x = x O y and x O= y are equivalent for any operator O.

Another common Ruby pattern is assigning to a variable if it’s nil but otherwise leaving it alone. Recalling the or operator || seen in Section 4.2.3, we can write this as follows:

  >> @foo
  => nil
  >> @foo = @foo || "bar"
  => "bar"
  >> @foo = @foo || "baz"
  => "bar"
Since nil is false in a boolean context, the first assignment to @foo is nil || "bar", which evaluates to "bar". Similarly, the second assignment is @foo || "baz", i.e., "bar" || "baz", which also evaluates to "bar". This is because anything other than nil or false is true in a boolean context, and the series of || expressions terminates after the first true expression is evaluated. (This practice of evaluating || expressions from left to right and stopping on the first true value is known as short-circuit evaluation. The same principle applies to && statements, except in this case evaluation stops on the first false value.)

Comparing the console sessions for the various operators, we see that @foo = @foo || "bar" follows the x = x O y pattern with || in the place of O:

  x    =   x   +   1      ->     x     +=   1
  x    =   x   *   3      ->     x     *=   3
  x    =   x   -   8      ->     x     -=   8
  x    =   x   /   2      ->     x     /=   2
  @foo = @foo || "bar"    ->     @foo ||= "bar"
Thus we see that @foo = @foo || "bar" and @foo ||= "bar" are equivalent. In the context of the current user, this suggests the following construction:

@current_user ||= User.find_by(id: session[:user_id])
Voilà !

(By the way, under the hood Ruby actually evaluates the expression @foo || @foo = "bar", which avoids an unnecessary assignment when @foo is nil or false. But this expression doesn’t explain the ||= notation as well, so the above discussion uses the nearly equivalent @foo = @foo || "bar".)
```


**You do**

- Add the current_user method to your sessions_helper

**I do**

- Lets write a method to see if our user is logged in. This will allow us to change the apperance of our layout based off of the log in status
