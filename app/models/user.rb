class User < ActiveRecord::Base
  validates :password, presence: true
  validates :user_name, uniqueness: true, presence: true
  has_secure_password

  # has_many :matches, foreign_key: "user_id", class_name: "Player"
  has_many :players
  has_many :notes
  has_many :matches, through: :players

  def self.say_hi
    puts "hi"
  end

  def self.extra_stuff
    @player_summary = HTTParty.get('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=73626CB2E22E10D9F4AB0D7ECBAF600B&steamids=' + @current_user.steam_id )
    @recent_game = HTTParty.get("http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=73626CB2E22E10D9F4AB0D7ECBAF600B&steamid=" + @current_user.steam_id + "&format=json")
    # binding.pry
    dota = []
    @offline = []
    @online = []
    @away = []
    begin
      @recent_game['response']['games'].each do |game|
        if game['appid']== 570
          dota.push(game)
        end
      end   
    rescue 
      
    end


    @profile_info_display = {
      "avatar" => @player_summary['response']['players'][0]['avatarfull'],
      "name" => @player_summary['response']['players'][0]['personaname'],
      "state" => @player_summary['response']['players'][0]['personastate'],
      "loc_country" => @player_summary['response']['players'][0]['loccountrycode'],
      "loc_state" => @player_summary['response']['players'][0]['locstatecode'],
      "loc_city_id" => @player_summary['response']['players'][0]['locstatecode'],
      "playtime_2wks" => dota.first['playtime_2weeks']/60 ,
      "playtime_forever" => dota.first['playtime_forever']/60
    }


    @friends = HTTParty.get("http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=73626CB2E22E10D9F4AB0D7ECBAF600B&steamid=" + @current_user.steam_id + "&relationship=friend")
    @friends_list = []
    @friends['friendslist']['friends'].each do |friend|
      steam_64_id = friend['steamid']
      @friends_list.push(steam_64_id)
    end


    @friends_list_string = @friends_list.map(&:inspect).join(', ')
    @friend_summaries = HTTParty.get('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=73626CB2E22E10D9F4AB0D7ECBAF600B&steamids=' + @friends_list_string)


    @friend_summaries_list = []
    @friend_summaries['response']['players'].each do |friend_summary|
      newobj = {
        "name" => friend_summary['personaname'],
        "avatar" => friend_summary['avatarmedium'],
        "state" => friend_summary['personastate'],
        "loc_state" => friend_summary['locstatecode'],
        "loc_city_id" => friend_summary['loccityid']
      }
      @friend_summaries_list.push(newobj)
    end


    @friend_summaries_list.each do |friend|
      if friend['state'] == 0
        @offline.push(friend)
      elsif friend['state'] == 1
        @online.push(friend)
      else
        @away.push(friend) 
      end
    end
  end

end