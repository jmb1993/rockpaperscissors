require_relative './models/GasSportsCar'
require_relative './models/HybridSportsCar'

my_ford = GasSportsCar.new
my_ford.drive(5)
puts my_ford.class.ancestors
puts "------------------"


my_tesla = HybridSportsCar.new
my_tesla.drive(5)
puts my_tesla.class.ancestors