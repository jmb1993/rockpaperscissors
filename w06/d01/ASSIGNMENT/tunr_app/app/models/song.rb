class Song < ActiveRecord::Base

 belongs_to :artist
 has_and_belongs_to_many :playlists

 before_save {self.title = title.downcase, self.album = album.downcase, self.artwork = artwork.downcase}
 validates :title, :album, :preview_url, :artwork, presence: true
 validates :price, presence: true, numericality: true, inclusion: { in: 1..99}
end
