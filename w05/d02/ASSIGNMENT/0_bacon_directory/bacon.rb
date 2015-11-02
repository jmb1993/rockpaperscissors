module Bacon
  class Server < Sinatra:: Base
get '/' do
  "<h1> ehllo bacon </h1>"
  end
get "/instructors/:name" do
  "Hello #{params['name']}!"
end

  end # Server
end # Bacon
