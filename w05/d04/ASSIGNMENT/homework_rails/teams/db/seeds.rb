# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Teams.create(
[
{name: "browns", photo_url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTqWp7qyMCx_wBeD4qHyBNb1f0C5npWj9BPaoM012x5FDGlpxn6MSXML77mWA' hometown: "Cleveland", number_of_championships: 4 }
{name: 'patriots', photo_url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTk3LMNief6YUHO8iUZrvnkkQ4UsREb6nPfQhrJyUWcoVOS-RZENkSbG3t' , location: 'new england', number_of_championships: 5 }
{name: 'steelers', photo_url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTnP0PppUmW2l8xAq5XxWzWKDYQInhnet8SV7pd7lSIUWXwjOGPTa_Kzw', location: 'hell', number_of_championships: 1}
{name: 'colts', photo_url:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRVl4Z-_heNJElFL1ne0-y1SOmuGLSBqULJ1OS4svLVukYVas9hZ1SuBvg' , location: "indianaopolis", number_of_championships: 4}
]
)
