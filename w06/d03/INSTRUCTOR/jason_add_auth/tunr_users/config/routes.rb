Rails.application.routes.draw do
  get 'sessions/new'

  resources :users
  root to: "sessions#new"
  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'
end
