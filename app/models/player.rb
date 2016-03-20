class Player < ActiveRecord::Base
	belongs_to :match
	belongs_to :user 

  def player_exists(user_id)
    
  end

end