require "pry"
require_relative "./client.rb"
class Shelter
  include Client
  attr_accessor :name, :clients, :pets
  initialize(name, clients, pets)
  @name = name
  @clients = clients
  @pets = pets
  end
binding.pry
