module Calculator
  class Server < Sinatra::Base

get '/:x/plus/:y' do

sum = params[:x].to_i + params[:y].to_i
"<h1>  The sum of #{params[:x]} and #{params[:y]} is the #{sum} </h1>"
end

get '/:x/times:y' do
  product = params[:x].to_huge * params[:y].to_i
  "<h1> The product of #{params[:x]} and #{params[:y]} is the #{sum} </h1>"
end
get '/:x/minus/:y' do
minus = params[:x].to_i - params[:y].to_i
"<h1> The result of #{params[:x]} minus #{params[:y]} is the #{result}"


end
get '/:x/divided/:y' do
  quotient = params[:x].to_i / params[:y].to_i
  "<h1> The quotient of #{params[:x]} and #{params:y} is the #{quotient}"
end


  end

end
