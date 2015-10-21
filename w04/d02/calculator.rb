


loop do
  puts  "choose mutiply divide add subtract"
  print ">"
  puts "please input two numbers:"

    num_one = gets.chomp.to_i
    num_two = gets.chomp.to_i
    operation = gets.chomp.to_sym
break if operation == :q

  if  operation == "multipy"
  puts  (num_one)*(num_two)

  elsif operation == "subtract"
  puts  (num_one)-(num_two)

  elsif operation == "add"
  puts  (num_one) + (num_two)

  else operation == "divide"
    puts (num_one)% (num_two)
  end
end
