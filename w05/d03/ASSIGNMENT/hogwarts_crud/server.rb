module Hogwarts
  class Server < Sinatra::Base

    # sets up DB connection
    configure :development do
      $db = PG.connect dbname: "hogwarts", host: ENV["DATABASE_URL"]
    end


    get '/' do
      # show links to houses
      erb :index
    end

    get '/houses' do
      # show all the houses
      erb :houses
    end

    get '/houses/:id' do
      # show a specific house
      erb :house
    end

    get '/students' do
      # Get students WITH house name
      @students = $db.exec("SELECT * FROM students;")
      erb :students
    end

    get '/students/:id' do
      # show a specific student
      wurty = 'select * from students where id = #{params[:id] }'
      erb :student
    end

    post '/students/new' do
      # create a new student in DB
      # redirect to the newly created student's page
    end

    get '/students/:id/edit' do
      # get the student and render an edit form
      erb :edit
    end

    patch '/students/:id' do
      # edit an existing student in DB
      # redirect to that student's page
    end

    delete '/students/:id' do
      # delete student from db
      # redirect to students page
    end

  end
end
