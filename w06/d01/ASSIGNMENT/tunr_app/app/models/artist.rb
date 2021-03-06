class Artist < ActiveRecord::Base
  has_many :songs, dependent: :destroy
  # before_save {self.name = name.downcase, self.nationality = nationality.downcase, self.genre = genre.downcase.gsub(/\s+/, "")}
  validates :name, :nationality, :img_url, presence: true
  validates :genre, inclusion: { in: ["Electronic", "House", "Jazz", "Indie", "Hip Hop"]}
end
