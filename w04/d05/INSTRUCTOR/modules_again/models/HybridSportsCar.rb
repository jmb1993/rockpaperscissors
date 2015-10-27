require_relative 'Car'
require_relative '../modules/ElectricAuto'

class HybridSportsCar < Car
  include Electric

  def initialize
    # super
    p "From Hybrid: I'm a Hybrid" 
  end

  def drive howmuch
  	super drive howmuch
    puts "bla blah blah"
  end
end