class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name
      t.string :image_url
      t.string :location
      t.string :number_of_championships
    end
  end
end
