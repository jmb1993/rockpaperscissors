require_relative 'Automobile'

# Car inherits from Automobile
class Car < Automobile
  def initialize
    # super
    p "From Car: I'm a Car" 
  end
end
