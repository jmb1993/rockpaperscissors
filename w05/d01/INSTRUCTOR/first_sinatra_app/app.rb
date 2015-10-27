class FirstSinatraApp < Sinatra::Base
  
  get "/" do
    # assemble a view
    "<h1>Hello World!</h1>" 
  end

  get "/photos/dogs" do
    "<u>WOOF!</u>"
  end
	
  get "/photos" do
    @photos = ['dogs','cats']
    "You've reached PHOTOS"
  end

end
