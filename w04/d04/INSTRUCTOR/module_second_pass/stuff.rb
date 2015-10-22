require_relative './banana_boat_module.rb'

class Stuff

  include BananaBoat
  attr_accessor :stuff
  def initialize stuff
    @stuff = stuff
  end

  def am_i_on_a_boat
    rock_the_peel
  end
end
