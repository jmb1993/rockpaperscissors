Rails.application.routes.draw do
  get 'login' => "sessions#new"
  post 'login' => "sessions#create"
  delete 'logout' => "sessions#destroy"
  root to: "sessions#new"
  resources :users, :songs, :artists

  resources :playlists do
    member do
      put 'add_song'
      put 'remove_song'
    end
  end

end
