class Artist < ActiveRecord::Base
  has_many :songs, dependent: :destroy,
  validates :name,  :nationality, :img_url, presence: true
  validates :genre, inclusion: {in:["Electronic", "House", "Jazz", "Indie", "Hip Hop"]} true
end
