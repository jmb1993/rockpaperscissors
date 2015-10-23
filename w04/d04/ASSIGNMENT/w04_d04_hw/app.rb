require "pry"
require_relative "./animal.rb"
require_relative "./client.rb"
require_relative "./shelter.rb"
require_relative "./seeds.rb"
puts Shelter.new
def creator
puts "Create a new animal or client"
choice = gets.chomp
  if choice == "animal"
 Animal.new
puts "enter animal name and age"
Animal.name = gets.chomp
Animal.age = gets.chomp
  end
  elsif choice == "client"
  Client.new
  puts "enter client name and age"
  Client.name = gets.chomp
  Client.age = gets.chomp
  end
  else puts "invalid choice"
  end
puts "Enter display animal or client to view list"
choice2 = gets.chomp
if choice2 = "animal"
  puts Animal
  elsif choice2 = "client"
  puts Client
  end
  else
  end
def adopt
 puts "which client wants to adopt? "
    adoptor = gets.chomp
    if adoptor != Client.name
      return "invalid choice"
    end
end
puts "which animal is being adopted"
adoptee = gets.chomp
if adoptee != Animal.name
  return "invalid choice"
end
end
return
adopter.push(adoptee)
end


end



end
