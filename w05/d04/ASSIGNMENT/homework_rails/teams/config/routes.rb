Rails.application.routes.draw do

root 'teams#index'

  get "teams" => "teams#index"

  get 'teams/new' => 'teams#new'

  get "teams/:id" => "teams#show"

  post "teams" => "teams#create"

  delete "teams/id"

  end
