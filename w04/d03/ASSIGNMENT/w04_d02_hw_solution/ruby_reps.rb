# Warmup
words = ["hello", "what", "is", "up", "dude"]
def lengths(ary)
	ary.map { |w| w.length }
end
#lengths(words)  # => [5, 4, 2, 2, 4]

# Round 1
def fizzbuzzer(num)
	case
	when (num%3 == 0) && (num%5 == 0)
	  "FizzBuzz"
	when (num%3 == 0)
	  "Fizz"
	when (num%5 == 0)
	  "Buzz"
	else
	  "Sorrels"
	end
end
#fizzbuzzer(3) # => "Fizz"
#fizzbuzzer(5) # => "Buzz"
#fizzbuzzer(15) # => "FizzBuzz"
#fizzbuzzer(19) # => "Sorrels"

# Round 2
def hasher(ary)
	hashy = {}
	for each in ary
		if each.length > 0
		    hashy[each[0]] = each[1]
		end
	end
	hashy
end
#array_to_test = [ ["Husker","Adama"], ["DrRobotmck"], [] ]
#hasher(array_to_test)  # => {"Husker" => "Adama", "DrRobotmck" => nil}

# Round 3
def hash_switcher(ary)
	hashy = {}
	if ary.length == 1
        hashy[ary[ary.keys[0]]] = ary.keys[0]
    else
    	for each in ary
    		hashy[each[each.keys[0]]] = each.keys[0]
    	end	
	end
	hashy
end
#hash_switcher({"hello" => "world"})
# => {"world" => "hello"}
#hash_switcher([ {"hello" => "world"}, {"yo" => "lo"} ])
# => [{"world" => "hello"}, {"lo" => "yo"}]

# Round 4
def convert_hash(aryOne,  aryTwo)
	if aryOne.is_a?(Array) == false || aryTwo.is_a?(Array) == false
		nil
	elsif aryOne.length != aryTwo.length
	 	puts "Your input is bad and you should feel bad"
	elsif aryOne.length == aryTwo.length
	    hashy = {}
		hashy[aryOne[0]] = aryTwo[0]
		hashy[aryOne[1]] = aryTwo[1]
	    hashy
    end
end

#convert_hash(["happy", "sad"], ["joy", "sorrow"])
# => {"happy" => "joy", "sad" => "sorrow"}
#convert_hash(["happy", "sad"], ["joy"])
# => "Your input is bad and you should feel bad"
#convert_hash(["happy happy"], 5)
# => nil

# Round 5
def word_reverse(sentence)
  return sentence.split().reverse().join(" ")
end

# Round 6
def letter_reverse(sentence)
  return sentence.split().map do |word|
    word.reverse()
  end.join(" ")
end

# Round 7
def maximus(words)
  longest_word = ""
  words.each do |word|
    if word.length() > longest_word.length()
      longest_word = word
    end
  end
  return longest_word
end










