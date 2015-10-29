module Calculator

  class Server < Sinatra::Base

      #/x/plus/y
      get '/:x/plus/:y' do
        # binding.pry
        sum = params[:x].to_i + params[:y].to_i
        "<h1>The sum of #{params[:x]} and #{params[:y]} is #{sum}</h1>"
      end

      # minus
      get "/:x/minus/:y" do
        diff = params[:x] - params[:y]
        "<h1>The diff of #{params[:x]} and #{params[:y]} is #{diff}</h1>"
      end
      # times
      # divide

  end

end
