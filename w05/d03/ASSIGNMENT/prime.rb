# solution 1

require 'prime'
sum = 0;
Prime.each(10) do |prime|
  sum = sum + prime
end
puts sum

# solution 2

sum = 0
number = 2
nth_prime = 1
while nth_prime <= 4
  test = 2
  while test <= number
    break if number % test == 0
    test += 1 
  end
  if test == number
    sum = number + sum
    nth_prime += 1
  end
  number += 1
end
puts sum