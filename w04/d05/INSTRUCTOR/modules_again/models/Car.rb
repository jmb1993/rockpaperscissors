require_relative 'Automobile'

# Car inherits from Automobile
class Car < Automobile
  def initialize
    super
    p "I'm a Car" 
  end
end
