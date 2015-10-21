binding 'pry'



1. Starting with the next to last digit and continuing with every other digit going back to the beginning of the card, double the digit.

2. Sum all doubled and untouched digits in the number.

3. If that total is a multiple of 10, the number is valid.

For example, given the card number 4408 0412 3456 7893:

```Orig  :  4 4 0 8 0 4 1 2 3 4   5 6   7 8   9 3
Step 1:  8 4 0 8 0 4 2 2 6 4  10 6  14 8  18 3
Step 2:  8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70
Step 3:  70 % 10 == 0
```
> Write a method that will accept an argument a credit card number. If it is valid then the program should return "Valid card number, thank you", if it is not valid the program should return "Invalid credit card number!"
> 1234567890123456 #should be false
 4408041234567893 #should be true
 38520000023237 #should be true
 4222222222222 #should be true

 def luhn number
   holder = []
   split_nums = nums.to_s.split(" ").reverse
   split_nums.each_with_index do | num, index |
     if index % 2 == 0
       holder.push(num.to_i)
     else
       holder.push(num.to_i * 2)
     end
   end
   split_again = holder.join.split(" ")
   sum = split_again.map{|num| num.to_i}.reduce(:+)
   if sum % 10 == 0
     "valid card"
   else
     "not valid"
   end
 end
 
