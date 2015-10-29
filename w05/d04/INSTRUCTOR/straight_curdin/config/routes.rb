Rails.application.routes.draw do

  root 'cheeses#index'

  get "cheeses" => "cheeses#index"

  get "cheeses/new" => "cheeses#new"

  get "cheeses/:id" => "cheeses#show"

  post "cheeses" => "cheeses#create"

  delete "cheeses/:id" => "cheeses#destroy"

end
