class User < ActiveRecord::Base
  validates :password, presence: true
  validates :user_name, uniqueness: true, presence: true
  has_secure_password

  # has_many :matches, foreign_key: "user_id", class_name: "Player"
  has_many :players
  has_many :notes
  has_many :matches, through: :players

end