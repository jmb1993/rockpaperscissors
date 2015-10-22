# Step 1

You will need to create the following file structure in the folder for today

```
+-- module_practice
    +-- models
        +-- person.rb
    +-- modules
        +-- piglatin_module.rb
    +-- app.rb
```

# Step 2

The `person.rb` file should be a `Person` class. It should have the following methods:

- `initialize`
 - which accepts an argument, a string, and sets an instance variable for `catchphrase`
- `speak_piglatin`
 - which will use return a string of pig latin based on the `catchphrase`

# Step 3

In the `piglatin_module.rb` file create a `Piglatin` module, the module should have the following methods:

- a class method called `piglatin_module_version`
 - which will return the module version, in this case it will be `V1.0`
- `convert_word`
 - which will accept an argument, a string, and convert the word to pig latin
- `to_pig_latin`
 - which will accept an argument, a string, it will send each word in the string to the `convert_word` method. It will return the converted string

# Step 4

In `app.rb` create a new person and have them log to the console some pig latin.

# Bonus

Create a `Dog` class and have it speak in pig latin.
