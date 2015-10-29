require 'sinatra/base'
require 'pry'

require_relative 'server'
require_relative 'star_power.rb'

run StarStalker::Server
