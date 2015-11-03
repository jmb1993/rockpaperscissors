class Song < ActiveRecord::Base
  belongs_to :Artist
  has_and_belongs_to_many :Playlists
  validates :title, :album, :preview_url, :artwork, presence: true
  validates :price numericality: { only_integer: true }
  validates :price {>= 1 && <=99}
end
