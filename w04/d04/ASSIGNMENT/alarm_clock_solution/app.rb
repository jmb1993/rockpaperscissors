require_relative './models/alarm.rb'

puts "What time would you like to wake up in the morning, military time please(HH:MM)?"
print "> "
wake_time = gets.chomp
puts "Thanks, I will wake you up at #{wake_time}!"

alarm = Alarm.new(wake_time)
alarm.wait
