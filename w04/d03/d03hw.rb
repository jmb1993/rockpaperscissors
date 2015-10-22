class Clock
  def turn_on
  loop do
puts Time.new
end
end

class Alarm
  initialize(hours,minutes,seconds)
  @hours = hours
  @minutes = minutes
  @seconds = seconds
  def set_Alarm
    "How long"
interval = gets.chomp
 puts sleep interval.to_i
puts "BEEEEP"
puts Time.new
end
end
