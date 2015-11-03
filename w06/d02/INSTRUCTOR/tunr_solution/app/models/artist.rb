class Artist < ActiveRecord::Base
  has_many :songs, dependent: :destroy

  validates :name, :presence => {:message => "Name can not be blank"}
  validates :nationality, :presence => {:message => "Nationality can not be blank"}
  validates :genre, inclusion: { in: ["Electronic", "House", "Jazz", "Indie", "Hip Hop"] }
  validates :img_url, :presence => {:message => "Photo can not be blank"}
  
end