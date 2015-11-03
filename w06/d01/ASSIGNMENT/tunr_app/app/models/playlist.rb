class Playlist < ActiveRecord::Base
  has_and_belongs_to_many :songs
  validates :name, uniqueness: true
  def add_song song

  end
  def remove_song song

  end

end
