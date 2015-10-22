def fib(num)
	first_num = 0
	second_num = 1
	next_num = nil
	count = 2
	result = [0,1]
	sum = 0
	if (num <= 2)
		puts "naaaa"
	end
	while (count < num)
		count += 1
		next_num = first_num + second_num
		if next_num.even? == true
		    puts next_num
			sum = next_num + sum
		end
		first_num = second_num
		second_num = next_num
		result.push(next_num)
	end
	return result, sum
end
# fib(10)

#will's solution
def fib(limit)
sum = 0;
a = 1;
b = 1;
c = a + b;
while(sum < limit) do
  sum = sum+c
  a = b+c
  b = c+a
  c = a+b
end
sum;
end
# fib 4e6

# javascript 1 line
#function fib
# var fib = function(limit,i,arr){while(i++ < limit || console.log(arr)) arr.push( (arr[i-2]+arr[i-3]) }(10,2,[0,1]);
