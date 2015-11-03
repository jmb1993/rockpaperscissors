Rails.application.routes.draw do


  get 'playlists/index'

  get 'playlists/show'

  get 'playlists/new'

  get 'playlists/edit'

  get 'login' => "sessions#new"
  post 'login' => "sessions#create"
  delete 'logout' => "sessions#destroy"
  root to: "sessions#new"
  resources :users, :songs, :artists
resources :playlists do
  member do
    put 'add_song'
    put 'reomve_song'
  end
end

end
