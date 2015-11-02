require 'pry'
require 'prime'
def get_sum
  puts "enter a number"

primenum = Prime.take(gets.chomp.to_i)
sum = 0
primenum.inject{|sum,x| sum + x }
end
binding.pry
