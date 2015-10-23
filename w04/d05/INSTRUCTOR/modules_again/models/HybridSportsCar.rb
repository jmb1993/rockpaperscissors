require_relative 'Car'
require_relative '../modules/ElectricAuto'

class HybridSportsCar < Car
  include Electric
  def initialize
    super
    p "I'm a Hybrid" 
  end
end