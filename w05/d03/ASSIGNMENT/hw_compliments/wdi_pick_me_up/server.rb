module Compliments
  configure :development do
    $db = PG.connect dbname: "Compliments", host: ENV["DATABASE_URL"]
  end

  get '/' do
    @compliment = $db.exec("Select from compliments")
    :erb index

get '/:name' do
@personalize = $db.exec('Hello #{:name}')
  :erb index
