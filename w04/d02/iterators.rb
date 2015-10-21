# each
# javascript

require 'pry'
#[1,2,3,4].forEach(function(num){
#  //code
#  });

  #ruby
#  my_array=[1,2,3,4,5]
#  return_of_each = my_array.each do | num |
#puts "the current number is #{num}"
  #end

## Map
#javascript
#var letters = ["a", "b", "c", "d"];
#var newArray = letters.map(function(letter){
#  return letter + " is the current letter"
#  });

#ruby
#letters = ["a", "b", "c", "d"];
#capitalized_letters = letters.map do |letter|
#  letter.upcase
#end



  #ruby
#name_array = [["zhen", 55, "sananab"], ["jason", 76, "netulg"], ["will",9001,"poop"]]
# name_array.each do | array |
#  puts "name: #{array[0].capitalize}| age: #{array[1]}| fave word: #{array[2].reverse}"
# write a program that finds the sum of all the multiples of 3 and 5 below 1000
(1..1000).select{|num| num % 3 == 0 || num % 5 == 0}.reduce(:+)


array_of_numbers = [164, 76, 147, 50, "26", "198", "38", 60, "155", 41, 134, 152, 77, "136", "108", 104, 28, 107, 129, 85, 160, "8", 178, 156, 116,
  "187", 49, 199, "190",
  42, "47", "19", 176, 16, "34", 56, 140, 154, "82", 113,
   9, "52", 179, 83, 71, 161, 10, "70", "110", "181", 185, 21, "90", 184, "74", 53,
  64, 150, 11, "66", 61, 32, 191,
  "122", 128, 169, "137", 167, 5, 87, "94", 133, 182, 96, 172, 139, "193", 89, 31, "7", 58, 135,
  15, 158, "57", "174", 40, 12, 6, "175", "180", 80, 115, 84, 141, 132, 33, 35, 29, 13, "183", 51, 73,
  168, 145, "48", 106, 138, 102, 86, 55, 148, 25, 79, 69, "124", 59, "126", "78", 43, 91, 17, "123", 37,
  "162", "196", 63, 173, 143, 197, 100, "111", 127, "200", 142, "166", 18, 67, "65", 131, 188, 120, "30", "112", "163", "1", "39", "93", 4,
  "121", 165, 117, 54, 72, "149", 20, 44, 171, "114", "130", 14, 177, "119", "125", "24", 101, 36, 98, "186",
  153, "81", 88, "189", "103", 194,
  45, 144, 62, 146, 92, 195, 27, "68", "159", "157", "3", 22, "109", 23, 170, 46, "75", 97, 105, 192, "99", "2", "95", 151, 118]

conveerted number =array_of_numbers.map{|num| num.to_i}
even_number = converted_numbers.select{ % 2 == 0}

#ruby methods
def say_hello(name)
  "hello #{name}"

end
  binding.pry
