#1
def fizzbuzzer() =
number = gets.chomp
if number % 3 == 0 && number % 5 == 0
  "fizz"
end
elsif number % 5 == 0
  "buzz"
end

elsif number % 3 == 0
  "FizzBuzz"
end
else "Sorrels"
end
end

#2
def hasher(array_to_test)
if array_to_test.length == 2
  array_to_test.each do | element |
    arrray_to_test[][0] = [key]
end

end

#3
def hash_switcher()
  hash = gets.chomp
  hash.invert
  puts hash


end
  #4
  def convert_hash()


end
    #5
 def word_reverse
   word = gets.chomp
  reversed_word = word.each do |word| word.split(" ").join(" ").reverse
     puts reversed_word
end
end

#6
def letter_reverse
string = gets.chomp
reversed_string = letter.each do |letter| letter.reverse.join(" ")
  puts reversed_string
end
end
#7
def maximus
  array = gets.chomp
  puts array.max_by(:&length)

end
