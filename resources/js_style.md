#Javascript Style Guide

Very simply put coding style is how your code looks. By 'your' I mean **YOU**!! This is the amazing thing about coding is that it is very personal and often an extension of the programmer. However due to the team based nature of most projects it is best to follow styling conventions so others can easily read and understand your code.

Some of these conventions include:

* How and when to comment
* How to indent your code
* Appropriate use of white space
* Proper naming of variables and functions

These are just a few of a much longer list of styling conventions to be aware of when writing your code. We are going to review some of the BEST PRACTICES to follow when writing your javscript programs.

# SEMICOLONS

The use of semicolons is an enigma for most developers. The modern browser is nice enough to have a feature allowing for auto semicolon insertion. But that doesn't mean we should be lazy and not use them where they would normally be used.

We can follow a simple set of rules for semicolon usage.

##### ASSIGNMENT

```javascript

    //bad

    var firstName = 'Porky'
    var lastName = function() {
      return 'Pig'
    }

    //good

    var firstName = 'Applewood';

    var lastName = function() {
      return 'Smoked';
    };

```

#####FUNCTION INVOCATION

````javascript

    //bad

    console.log('I have no semi colon')

    canadian()

    //good

    console.log('Use a semicolon after me');

    turkey();

````

#####KEYWORDS THAT ARE COMMANDS

```javascript

    //bad

    new
    catch
    native

    //good

    break;
    return;
    continue;
    debugger;

```

#COMMAS

Commas are used as separators (in argument and parameter lists, array and object literals, etc.)

```javascript

    //bad

    var flavors = [
        'maple'
      , 'honey'
      , 'smoked'
    ];

    var brands = {
      firstName: 'applegate'
     ,lastName: 'boars head'
     ,movie: 'oscar meyer'
    };


    //good

    var flavors = [
       'maple',
       'honey',
       'smoked'
    ];

     var brands = {
      firstName: 'applegate',
      lastName: 'boars head',
      movie: 'oscar meyer'
    };

```


#WHITESPACE

Whitespace gives code air to breathe and keeps it human-readable.  Conventional spacing allows a developer to have their code readily understood by team members, complete strangers, or even by themselves when looking at their past code.

![Where's Waldo]
(http://data3.whicdn.com/images/62839403/original.jpg)

* Use soft tabs set to 2 spaces.

```javascript

    // bad

    function() {
    ∙∙∙∙var jason;
    }

    // bad

    function() {
    ∙var will;
    }

    // good

    function() {
    ∙∙var adam;
    }

```

* Place 1 space between parantheses and curly brackets.

```javascript

    // bad

    function sausage(){
      console.log('Booooo sausage');
    }

    // good

    function suiteSuiteBacon() {
      console.log('Gift from heaven');
    }
```

* Use one space between operators.

```javascript
    // bad

    var x=y+42;

    // good

    var x = y + 42;
```

* Use indentation when making long method chains (cleaner and makes logic seem more apparent line-by-line) and place the method name with period on each new line.

```javascript

    // bad

    $('#thing').spinIt().workIt().flipIt().reverseIt();

    // good

    $('#thing').spinIt()
               .workIt()
               .flipIt()
               .reverseIt();
 ```
 * Leave a blank line after blocks and before the next statement

```javascript

    // bad

    if (day === xmas) {
      return 'please be bacon!';
    }
    return 'itsssss bacon';

    // good

    if (day === xmas) {
      return 'please be bacon';
    }

    return 'itsssss bacon';

    // bad

    var obj = {
      foo: function() {
        return 'foo';
      },
      bar: function() {
        return 'bar';
      }
    };
    return obj;

    // good

    var obj = {
      foo: function() {
        return 'foo';
      },
      bar: function() {
        return 'bar';
      }
    };

    return obj;

```

#COMMENTS

Comments are a useful way to explain your code as you write it.  Also, when looking at code for learning purposes, adding comments can aid in understanding similar to pencilling notes or underlining in a textbook.

* Use `/* ... */` for multiline comments.

```javascript
    /*
      This function takes bacon as input.
      It returns a cooked bacon as output
    */
    function getTheMeat(bacon) {
      ...code...
    };

```

* Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment.

```javascript
    // This is how you express exponents in JS. This example is 8^2.
    Math.pow(8,2);
```

#NAMING CONVENTIONS

Name things semantically. Names should be descriptive and informative.

* Avoid single letter names. Be descriptive with your naming.

```javascript
    // bad

    function a() {
      return  l * w;
    }

    // good

    function area() {
      return length * width
    }
 ```

* Use camelCase (no spaces, first letter lowercase, every other word beginning uppercase, no spaces/underscores) when naming objects, functions, and instances.

```javascript

    // bad

    var LOLz = {};
    var crispy_bacon = {};
    function eat bacon() {
      return 'yummmmmmmm';
    }

    // good

    var lolz = {};
    var crispyBacon = {};
    function eatBacon() {
      return 'yummmmmmmm';
    }
```

#VARIABLES

Always use `var` to declare variables. Else, GLOBAL VARIABLES will be created. Global variables should be avoided (for reasons that we will explain throughout the course).

```javascript
    // bad

    notEatingBacon = 'its so gooddddd';

    // good

    var eatingBacon = 'its so goooddddd';
```


#STRINGS

* A JavaScript string stores a series of characters like 'John Doe'. A string can be any text inside double or single quotes.

Lets start getting into the habit of following these BEST PRACTICES when using our strings moving forward.


#####USE SINGLE QUOTES FOR YOUR STRINGS

```javascript

    var firstName = 'Applewood';

    var lastName = 'Smoked';

```

#####LONG STRINGS

If a string is longer than 80 characters long it is BEST PRACTICE to split the string into multiple lines and concatinate(join) the string

```javascript

    //bad

    var baconQuote = 'I work out Monday, Tuesday, Wednesday; take Thursday off; then I work out Friday and Saturday. So sometimes I\'ll eat whatever I want on Thursday, like a big breakfast of pancakes and bacon and eggs and stuff. You can eat a big, hearty breakfast because you\'re going to burn off most of it during the day anyway.';

    //good

    var baconQuote = 'I work out Monday, Tuesday, Wednesday; 
    take Thursday off; then I work out Friday and Saturday. 
    So sometimes I\'ll eat whatever I want on Thursday, 
    like a big breakfast of pancakes and bacon and eggs and stuff. 
    You can eat a big, hearty breakfast because you\'re going to burn off most of it during the day anyway.';

    //or

    var baconQuote = [
      'I work out Monday, Tuesday, Wednesday;',
      'take Thursday off; then I work out Friday and Saturday.',
      'So sometimes I\'ll eat whatever I want on Thursday,',
      'like a big breakfast of pancakes and bacon and eggs and stuff.',
      'You can eat a big, hearty breakfast because you\'re going to burn off most of it during the day anyway.'].join('')

```

# Creating new Arrays

JavaScript arrays are used to store multiple values in a single variable.

```javascript

    // You can create an array using the built-in Constructor

    var bacon = new Array();

    // but literal syntax should be preferred

    var bacon = [];


```


# Creating new Objects

```javascript

    var bacon = new Object();
    bacon.name = 'Bacon';
    bacon.private = false; // You should also try to avoid using reserved words like 'private' when naming variables and properties

    // preferred

    var bacon = {
      name: 'Bacon',
      hidden: false
    }

```

# Object Properties

To access properties of an object, use dot notation instead of subscript notation.

```javascript

    var bacon = {
      name: 'Bacon',
      rank: 1,
      dept: 'meat'
    }

    // preferred -- to access John McClane's rank
    bacon.rank

    // can also...
    bacon['rank']

```

#FUNCTIONS

Functions should be assigned to a variable.  This is due to scope, hoisting, and other topics that will become clearer throughout the course.

```javascript
    // preferred

    var bacon = function() {
      return 'mmm mmmm good';
    };

    // not preferred

    function bacon() {
      return 'so so good';
    }

```

To call (use) a function, input the function name followed by ```();```

  ```javascript
    bacon(); // returns 'mmm mmmm good'
  ```

#TYPE CASTING

Javascript type casts.  This means that Javascript often makes assumptions about the way we want to use datatypes.  Sometimes this is helpful.  Sometimes this is frustrating.  But all of the time, it must be considered when using Javascript.  Here are a few trouble cases to watch for.

 * Equality operator
    -- Use ``` === ``` instead of ``` == ``` for equality comparisons.  ``` === ``` is an exact comparison between two objects; ``` == ``` allows for typcasting.

```javascript

    42 == '42'; // returns true

    // preferred

    42 === '42'; // returns false

```
* Addition operator

    -- Adding a number to a string will typecast the number to a string and append the number to the string.  If you are seeking to add the numerical value of the string to the number, use parseInt().

```javascript
    // string + number = newString
    42 + '42'; // returns '4242'
    'bacon' + 10; // returns 'bacon10'
    10 + 'bacon'; // returns '10bacon'

    // parseInt(string) + number = newNumber or NaN
    42 + parseInt('42'); // returns 84
    parseInt('bacon') + 10; // returns NaN
```
