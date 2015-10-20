# WERE GOING TO MAKE A CALCULATOR
#
# MAKE A FILE CALLED calculator.rb
#
# PROMPT THE USER TO INPUT A MATH OPERATION ADD - SUBTRACT - MULTIPLY - DIVIDE, THE OPTIONS SHOULD BE PRINTED TO THE CONSOLE
#
# PROMPT THE USER FOR TWO MORE NUMBERS. ONCE THE TWO THE TWO NUMBERS HAVE BEEN INPUT PRINT THE RESULT OF PERFORMING THE PROVIDED MATH OPERATION WITH THE TWO NUMBERS

loop do
  puts "Please select a math operation"
  puts "add\nsubtract\nmultiply\ndivide"
  puts "Or q to quit"
  print "> "
  operation = gets.chomp.to_sym

  break if operation == :q

  puts "Please input two number: "
  print "Num 1 -> "
  num_one = gets.chomp.to_i
  print "Num 2 -> "
  num_two = gets.chomp.to_i

  if operation == :add
    puts "The answer is #{num_one + num_two}"
  elsif operation == :subtract
    puts "The answer is #{num_one - num_two}"
  elsif operation == :multiply
    puts "The answer is #{num_one * num_two}"
  elsif operation == :divide
    puts "The answer is #{num_one / num_two}"
  end
end
