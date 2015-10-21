![ruby](https://d13yacurqjgara.cloudfront.net/users/129901/screenshots/1444306/ruby_teaser.png)

# REPS

### Topics covered 

- REPS with creating methods
- REPS with iteration and nested collections
- REPS with methods on numbers, strings, arrays, hashes
- REPS!!!

Create a reps.rb file and put your code in there for tonight's homework.

## Warmup

Write a method `lengths` that accepts a single parameter as an argument, namely
an array of strings. The method should return an array of numbers where each
number is the length of the corresponding string.

```ruby
words = ["hello", "what", "is", "up", "dude"]
lengths(words)  # => [5, 4, 2, 2, 4]
```

---

## For Real Now

### Round 1

Write a method `fizzbuzzer` that accepts a single parameter as an argument, a number, and will return the following:

	- The string "Fizz" if the number is evenly divisible by 3
	- The string "Buzz" if the number is evenly divisible by 5
	- The string "FizzBuzz" if the number is evenly divisible by 3 AND 5
	- The string "Sorrels" if the number is not divisible by 3 OR 5

```ruby
fizzbuzzer(3) # => "Fizz"
fizzbuzzer(5) # => "Buzz"
fizzbuzzer(15) # => "FizzBuzz"
fizzbuzzer(19) # => "Sorrels"
```

### Round 2

Write a method `hasher` that accepts a single parameter as an argument, an array of arrays, and returns a hash based on the following conditions:

	- if there are two elements in a nested array, then element 1 becomes a key of the hash and element 2 becomes the value
	- if there is one element in a nested array, then the single element becomes the key, and the value should be set to nil
	- if a nested array is empty or has more than 2 elements, then it should be excluded from the hash

So given:

```ruby
array_to_test = [ ["Husker","Adama"], ["DrRobotmck"], [] ]
hasher(array_to_test)  # => {"Husker" => "Adama", "DrRobotmck" => nil}
```

### Round 3

Write a method `hash_switcher` that accepts a single parameter as an argument. The parameter can be either a single hash, or an array of hashes.

	- if a single hash is given, the method should return a hash with the keys and values switched
		- i.e. `hash_switcher({"hello" => "world"}) => {"world" => "hello"}`
	- if an array of hashes is given, then return an array where the keys and values of every hash have been switched
		- i.e. `hash_switcher([ {"hello" => "world"}, {"yo" => "lo"} ]) => [{"world" => "hello"}, {"lo" => "yo"}]`

```ruby
hash_switcher({"hello" => "world"})
# => {"world" => "hello"}

hash_switcher([ {"hello" => "world"}, {"yo" => "lo"} ])
# => [{"world" => "hello"}, {"lo" => "yo"}]
```

### Round 4

Write a method `convert_hash` that accepts as arguments two arrays.

	- If one or both of the arguments are not arrays then the method should return `nil`
	- If both arguments are arrays, but both are not of equal length
		- the method should return `Your input is bad and you should feel bad`
	- If they are both of equal length and have 2 elements, then iterate over the arrays creating a hash from the values of both arrays
		- the key should be from the first array
		- the value should be from the second array

i.e.

```ruby
convert_hash(["happy", "sad"], ["joy", "sorrow"])
# => {"happy" => "joy", "sad" => "sorrow"}
convert_hash(["happy", "sad"], ["joy"])
# => "Your input is bad and you should feel bad"
convert_hash(["happy happy"], 5)
# => nil
```

### Round 5

Write a method `word_reverse` that accepts a single argument, a string. The
method should return a string with the order of the words reversed. Don't worry
about punctuation.

```ruby
word_reverse("this aint a song for the broken hearted")
# => "hearted broken the for song a aint this"
word_reverse("no silent prayer for the faith departed")
# => "departed faith the for prayer silent no"
```

### Round 6

Write a method `letter_reverse` that accepts a single argument, a string. The
method should return a string with the order of the words preserved, but each
word's letters reversed. Don't worry about punctuation.

```ruby
letter_reverse("this aint a song for the broken hearted")
# => "siht tnia a gnos rof eht nekorb detraeh"
letter_reverse("no silent prayer for the faith departed")
# => "on tnelis reyarp rof eht htiaf detraped"
```

### Round 7

Write a method `maximus` that accepts a single argument, an array of words. The method
should return the longest word in the array. In case of a tie, the method should
return the word that appears first in the array.

```ruby
maximus(["cow", "goat", "buffalo", "dog"]) # => "buffallo"
maximus(["moose", "rabbit", "jaguar", "fox"]) # => "rabbit"
```

### BONUS Round

Given the following nested collection:

pokemon =
[
  {
    name: "Bulbasaur",
    national_id: 1,
    sp_atk: 65,
    sp_def: 65,
    species: "seed pokemon",
    speed: 45,
    types: {
      type_a: "grass",
      type_b: "poison"
    },
    weight: "15.2lbs"
  },
  {
    name: "Charmander",
      national_id: 4,
      pkdx_id: 4,
      sp_atk: 60,
      sp_def: 50,
      species: "flammable pokemon",
      speed: 65,
      types: {
          type_a: "fire",
      type_b: "lizard"
      },
      weight: "85lbs"
  },
  {
    name: "Squirtle",
      national_id: 7,
      pkdx_id: 7,
      sp_atk: 50,
      sp_def: 64,
      species: "water pokemon",
      speed: 43,
      types: {
            type_a: "water",
      type_b: "turtle"
      },
      weight: "90lbs"
  }
]

Write a program that will return a string with the following information:
- The name of each Pokemon and it's ID number separated by a |
- The species with every word capitalized and the weight separated by a |
- The types separated by a //**Example**:

bash
Bulbasaur | 1
Species: Seed Pokemon | Weight: 15.2lbs
Types: grass // poison


