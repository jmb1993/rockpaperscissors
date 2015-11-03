class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.string :album
      t.text :preview_url
      t.string :artwork
      t.integer :price
      t.references :artist
    end
  end
end
