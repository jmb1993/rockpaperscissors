require 'sinatra/base'
require_relative 'calculator'
require "pry"

run Calculator::Server
