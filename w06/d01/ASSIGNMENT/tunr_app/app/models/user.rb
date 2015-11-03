class User < ActiveRecord::Base
<<<<<<< HEAD
  before_save {self.email =email.downcase}
  validates :name, presence: true, length: {maximum: 50}
  EMAIL_REGEX = \A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z
  validates :email, presence:true, length: {maximum: 244}, format: {with: EMAIL_REGEX}
   uniqueness: {case_sensitive:false}
   valid :password, presence: true, length: {minimum: 6}
=======
  before_save {self.email = email.downcase}
  validates :username, presence: true, length: {maximum: 50}
  EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: {maximum: 255}, format: {with: EMAIL_REGEX}, uniqueness: {case_sensitive: false}

  validates :password, presence: true, length: {minimum: 6}
  
  has_secure_password
>>>>>>> ff38cf10060af6a8de225975401fe987cd1f0e9d
end
