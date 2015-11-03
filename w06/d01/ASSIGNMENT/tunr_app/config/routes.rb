Rails.application.routes.draw do
<<<<<<< HEAD


  get 'playlists/index'

  get 'playlists/show'

  get 'playlists/new'

  get 'playlists/edit'

=======
>>>>>>> eb608d0103fe5cfb50e954268c151c3383a88279
  get 'login' => "sessions#new"
  post 'login' => "sessions#create"
  delete 'logout' => "sessions#destroy"
  root to: "sessions#new"
  resources :users, :songs, :artists
<<<<<<< HEAD
resources :playlists do
  member do
    put 'add_song'
    put 'reomve_song'
  end
end
=======

  resources :playlists do
    member do
      put 'add_song'
      put 'remove_song'
    end
  end
>>>>>>> eb608d0103fe5cfb50e954268c151c3383a88279

end
