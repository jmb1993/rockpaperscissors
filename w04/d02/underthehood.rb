
require 'pry'

cars = {
  "ford" => ["mustang", "escort", "taurus"],
  mazda: ["MPV", "RX-7", "6"],
  honda: ["Civic", "CRV", "Accord"]
}


cars["ford"]

cars[:bmw] = []

cars[:bmw].push("3-series")

binding.pry

cars.delete(:mazda)
