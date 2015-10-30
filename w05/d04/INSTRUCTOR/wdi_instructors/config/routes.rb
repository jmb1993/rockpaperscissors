Rails.application.routes.draw do

  get "/instructors" => "instructors#index"
  # VERB "/route" => "controller#action"

  post "/instructors" => "instructors#create"
  # '/students' => "students#index"

  get "/instructors/jason" => "instructors#jason"
  get "/instructors/adam" => "instructors#adam"
  get "/instructors/zhen" => "instructors#zhen"
  get "/instructors/will" => "instructors#will"

end












