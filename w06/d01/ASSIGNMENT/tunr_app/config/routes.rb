Rails.application.routes.draw do
<<<<<<< HEAD
  
=======

  get 'login' => "sessions#new"
  post 'login' => "sessions#create"
  delete 'logout' => "sessions#destroy"
  root to: "sessions#new"
  resources :users
>>>>>>> ff38cf10060af6a8de225975401fe987cd1f0e9d
end
