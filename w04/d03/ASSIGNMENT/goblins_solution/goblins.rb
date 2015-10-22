# create initial set of uncured goblins in an array
goblins = []
# loop though 100 times and push the goblins into that array
for sick in 0...100
	# using false to represent no cure and true to represent has cure
	# all goblins starts out with no cure
	goblins.push(false)
end

# outer loop, "meet" or loops 100 times as descirbed by the problem
for meet in 0...100
	# inner loop, start with the n-th goblin in line "n" being current time we meet with goblins 
	increment = meet
	until increment >= 100
		# during the meeting with each individual goblin we toggle their state
		if goblins[increment]
		    # takeath those who has
			goblins[increment] = false
		else
		    # giveath those who has not
			goblins[increment] = true
		end
		# we gonna increment as much as "n" but adding 1 because we started at 0
		increment = (increment + meet + 1)
	end
end

# find out who is still alive
cured = []
for gob in 0...100
    if goblins[gob]
        cured.push(gob+1)
    end
end
puts cured