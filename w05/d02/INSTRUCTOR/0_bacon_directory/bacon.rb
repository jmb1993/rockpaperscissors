module Bacon

  class Server < Sinatra::Base

    get '/' do
      "<h1>Ehllo Bacon</h1>"
    end

    get '/instructors/:name' do
      "<h1>Hello #{params['name']}!</h1>"
    end



  end # Server

end # Bacon
