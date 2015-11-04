# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
tweed1 = Tweed.create([{author: 'james', body: "this is tweed 1" comments: "nice tweed bro"}])
tweed2 = Tweed.create([{author: 'steve', body: "this is tweed 2" comments: "sick tweed dude"}])
