# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user Connie = user.create([{animal_type: "California Condor", image_url: "http://animals.sandiegozoo.org/animals/california-condor"}])
user Paul = user.create([{animal_type: "Giant Panda", image_url: "http://animals.sandiegozoo.org/animals/giant-panda"}])
user Elsa =  user.create([{animal_type: "African Elephant", image_url: "http://animals.sandiegozoo.org/animals/elephant"}])
