class Match < ActiveRecord::Base
	
	has_many :players
	# has_many :users, class_name: "Player", foreign_key: "user_id"	
  has_many :users, through: :players

  def self.does_match_exist?(match_id)
    Match.exists? match_id: match_id
  end


end