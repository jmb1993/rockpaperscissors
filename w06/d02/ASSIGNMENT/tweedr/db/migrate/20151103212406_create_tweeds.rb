class CreateTweeds < ActiveRecord::Migration
  def change
    create_table :tweeds do |t|

      t.timestamps null: false
    end
  end
end
