module StarStalker

  class Server < Sinatra::Base

    get '/' do
      erb :index
      # erb(:index, { :layout => :star_stalker_layout} )
    end


    get '/stars/:id' do
      # binding.pry

      id = params[:id].to_i
      @star = StarPower::STARS[ id ]
        erb :star
      # erb :star, layout: :star_stalker_layout
    end

    # SHOW ALL STARS
    get '/stars' do
      @stars = StarPower::STARS
      erb :stars
    end

    get '/about' do
      erb :about
    end

  end # Server










end #StarStalker
