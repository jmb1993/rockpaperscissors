require 'pry'
# EACH
# JAVASCRIPT

# [1, 2, 3, 4, 5].forEach(function(num){
#  //code block
# });

#RUBY

my_array = [1, 2, 3, 4, 5]

return_of_each = my_array.each do |num|
  puts "The current number is #{num}"
end

##MAP

##JAVASCRIPT
# var letters = ["a", "b", "c", "d"];
# var newArray = letters.map(function(letter){
#   return letter + " is the current letter"
# });

#RUBY
letters = ["a", "b", "c", "d"]

capitalized_letters = letters.map do |letter|
  letter.upcase
end

name_array = [["zhen", 55, "sananab"], ["jason", 76, "netulg"], ["will",9001,"poop"]]

name_array.each do |current_array|
  name = current_array[0].capitalize
  age = current_array[1]
  fav_word = current_array[2].reverse
  puts "name: #{name} | age: #{age} | fave word: #{fav_word}"
end

name_array.each{|array| puts "name: #{array[0].capitalize}"}



#REJECT

# odds = [1, 2, 3, 4, 5, 6].reject{|num| num % 2 == 0}

odds = (1..100).reject{|num| num % 2 == 0}

#SELECT
# evens = [1, 2, 3, 4, 5].select{|num| num % 2 == 0}
evens = (1..100).select{|num| num % 2 == 0}

#REDUCE

sum = (1..4).reduce(:+)

# WRITE A PROGRAM THAT FINDS THE SUM OF ALL THE MULTIPLES OF 3 OR 5 BELOW 1000

puts (1..1000).select{|num| num % 3 == 0 || num % 5 ==0}.reduce(:+)



array_of_numbers = [164, 76, 147, 50, "26", "198", "38", 60, "155", 41, 134, 152, 77, "136", "108", 104, 28, 107, 129, 85, 160, "8", 178, 156, 116, "187", 49, 199, "190", 42, "47", "19", 176, 16, "34", 56, 140, 154, "82", 113, 9, "52", 179, 83, 71, 161, 10, "70", "110", "181", 185, 21, "90", 184, "74", 53, 64, 150, 11, "66", 61, 32, 191, "122", 128, 169, "137", 167, 5, 87, "94", 133, 182, 96, 172, 139, "193", 89, 31, "7", 58, 135, 15, 158, "57", "174", 40, 12, 6, "175", "180", 80, 115, 84, 141, 132, 33, 35, 29, 13, "183", 51, 73, 168, 145, "48", 106, 138, 102, 86, 55, 148, 25, 79, 69, "124", 59, "126", "78", 43, 91, 17, "123", 37, "162", "196", 63, 173, 143, 197, 100, "111", 127, "200", 142, "166", 18, 67, "65", 131, 188, 120, "30", "112", "163", "1", "39", "93", 4, "121", 165, 117, 54, 72, "149", 20, 44, 171, "114", "130", 14, 177, "119", "125", "24", 101, 36, 98, "186", 153, "81", 88, "189", "103", 194, 45, 144, 62, 146, 92, 195, 27, "68", "159", "157", "3", 22, "109", 23, 170, 46, "75", 97, 105, 192, "99", "2", "95", 151, 118]

puts array_of_numbers.map{|num| num.to_i}.select{|num| num % 2 == 0}.reduce(:+)

converted_numbers = array_of_numbers.map{|num| num.to_i}
even_numbers = converted_numbers.select{|num| num % 2 == 0}
total = even_numbers.reduce(:+)
puts total


##JAVASCRIPT

# var myFunction = function(argument){
#   # do code
#   # return something
# }

##RUBY

name = "Will"

def say_hello name
  "Hello #{name}"
end


#LUHN

def luhn num
  holder = []
  split_nums = num.to_s.split('').reverse
  split_nums.each_with_index do |num, index|
    if index % 2 == 0
      holder.push(num.to_i)
    else
      holder.push(num.to_i * 2)
    end
  end
  split_again = holder.join.split('')
  sum = split_again.map{|num| num.to_i}.reduce(:+)
  if sum % 10 == 0
    "Valid card number, thanks"
  else
    "This is not a valid card number"
  end
end

binding.pry
