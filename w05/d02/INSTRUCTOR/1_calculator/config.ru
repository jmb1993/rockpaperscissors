
require 'sinatra/base'
require 'pry'

require_relative 'calculator'

run Calculator::Server
