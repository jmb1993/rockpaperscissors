Rails.application.routes.draw do

  get 'artists/new'

  get 'artists/edit'

  get 'artists/index'

  get 'artists/show'

  get 'songs/new'

  get 'songs/edit'

  get 'songs/index'

  get 'songs/show'

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
