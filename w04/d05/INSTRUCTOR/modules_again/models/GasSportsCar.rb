require_relative 'Car'

class GasSportsCar < Car
  def initialize
    super
    p "I'm a Guzzler" 
  end

end