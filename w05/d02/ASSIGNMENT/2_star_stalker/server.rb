module StarStalker

  class Server < Sinatra::Base
    get '/' do
      erb :index
    end

    get '/stars/:id' do
      # binding.pry

      id = params[:id].to_i
      @star = StarPower::STARS[ id ]

      erb :star
    end

    get '/stars' do

    end
    get '/about'
 do
   erb :about
   
 end
  end # Server

end #StarStalker
