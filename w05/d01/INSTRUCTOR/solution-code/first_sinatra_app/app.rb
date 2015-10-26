class FirstSinatraApp < Sinatra::Base

  get "/" do
    "<h1>Hello world</h1>"
  end


  get "/photos" do
    "photos here"
  end

  get "/photos/dogs" do 
  	"you've got dogs!"
  end
end
