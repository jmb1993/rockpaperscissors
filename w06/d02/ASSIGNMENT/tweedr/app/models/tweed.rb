class Tweed < ActiveRecord::Base
  has_many :comments
  validates :author, :body presence: true
end
