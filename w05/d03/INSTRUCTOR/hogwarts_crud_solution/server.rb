module Hogwarts
  class Server < Sinatra::Base

    configure :development do
      $db = PG.connect dbname: "hogwarts_crud", host: ENV["DATABASE_URL"]
    end

    configure :production do
      require 'uri'
      uri = URI.parse ENV["DATABASE_URL"]
      $db = PG.connect dbname: uri.path[1..-1], host: uri.host, port: uri.port, user: uri.user, password: uri.password
    end

    get '/' do
      @houses = $db.exec "SELECT * FROM HOUSES"
      erb :index
    end

    get '/houses' do
      @houses = $db.exec "SELECT * FROM HOUSES"
      erb :houses
    end

    get '/houses/:id' do
      @house = $db.exec_params( "SELECT * FROM houses WHERE id = $1", [ params[:id] ] ).first
      @students = $db.exec_params("SELECT * FROM students WHERE house_id=$1", [ params[:id] ])
      # binding.pry
      erb :house
    end

    get '/students' do
      @students = $db.exec "SELECT students.*, houses.name AS house_name FROM students LEFT JOIN houses ON students.house_id = houses.id"
      erb :students
    end

    get '/students/:id' do
      @student = $db.exec_params("SELECT * FROM students WHERE id=$1", [ params[:id] ]).first
      @house = $db.exec_params("SELECT * FROM houses WHERE id=$1", [ @student["house_id"] ]).first
      erb :student
    end

    post '/students/new' do
      result = $db.exec_params "INSERT INTO students (fname, lname, image, house_id) VALUES ($1, $2, $3, $4) RETURNING id", [ params[:fname], params[:lname], params[:image], params[:house_id] ]
      redirect "/students/#{ result.first["id"] }"
    end

    get '/students/:id/edit' do
      @student = $db.exec_params("SELECT * FROM students WHERE id=$1", [ params[:id] ]).first
      @houses = $db.exec "SELECT * FROM HOUSES"
      erb :edit
    end

    patch '/students/:id' do
      query = "UPDATE students SET fname=$1, lname=$2, image=$3, house_id=$4 WHERE id=$5"
      $db.exec_params query, [ params[:fname], params[:lname], params[:image], params[:house_id], params[:id] ]
      redirect "/students/#{ params[:id] }"
    end

    delete '/students/:id' do
      $db.exec_params "DELETE FROM students WHERE id = $1 ", [ params[:id] ]
      redirect '/students'
    end

  end
end
