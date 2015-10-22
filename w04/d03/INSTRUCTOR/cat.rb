#
# AUTHOR: Jason Seminara 
# DATE: 2015-10-21
#


class Cat
  attr_reader :stripes, :fur, :birth_date, :purr #getters
  attr_writer :tail #setters
  attr_accessor :meow, :weight  #getters/setter
  
  def initialize(stripes,weight,fur='long')
    # nothing
    nothing=false
    @@purr=true
    @stripes=stripes
    @weight=weight
    @fur=fur
    @birth_date=Time.now
  end


  # Speak to me and tell me the lenf of your tail
  def say_tail_length
    "My tail is #@tail long"
  end

  def kewlness(name:, kewl:'yes')
    puts name
    puts kewl
  end


  # talk a bunch
  def talk howmuch=5
    puts "M"+("e"*howmuch)+"oW!"
    puts say_tail_length
  end

  # this is a class method
  def self.say_hello
    puts "heeelo"
  end

  # all instances share @@purr
  def talks?
    @@purr
  end 

end
