class UsersController < ApplicationController

    
    def graphs

      @players = Player.where(user_id: 1)
      @last_match = Match.find(1)






      respond_to do |format|
        format.html
        format.json {render json: @last_match}
      end

    end


    def most_common_value(a)
      a.group_by(&:itself).values.max_by(&:size).first(3)
    end

    def mode
      sort_by {|i| grep(i).length }.last
    end


  	def index
      redirect_to "/users/" + session[:user_id].to_s
    end


    def create
      u = User.create(
        user_name: params[:user_name],
        password: params[:password],
        skype_id: params[:skype_id],
        steam_id: params[:steam_id],
        steam32: params[:steam_id].to_i - 76561197960265728,
        solo_mmr: params[:solo_mmr],
        party_mmr: params[:party_mmr]
        )

      redirect_to "/sessions/new"
    end



    def show
     actual_user = User.find(session[:user_id])
     if logged_in? && check_current_user?
      puts "yoooo"

      User.say_hi
      @current_user = User.find(session[:user_id])
      @last_game = @current_user.matches.order('id desc').first
      # @recent_matches = HTTParty.get("https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key=73626CB2E22E10D9F4AB0D7ECBAF600B&account_id="+ @current_user.steam_id)
      # @steam_32_id = @current_user.steam32
      # @games = @recent_matches['result']['matches']
      # @mygames_list = []
      # @myheroes_list = []


      # @games.each do |game|
      #   @mygames_start = game['start_time']
      #   @mygames_start_time = Time.at(@mygames_start).strftime("%F %I:%M %p")
      #     myObj = {
      #       "match_id" => game['match_id'],
      #       "start_time" => @mygames_start_time,
      #       "lobby_type" => game['lobby_type'],
      #     }

      #   game['players'].each do |player|
      #       if player['account_id'] == @steam_32_id
      #         @myhero = Champion.find(player['hero_id'])
      #         myObj["hero_id"] = player['hero_id']
      #         myObj["hero_pic"] =  @myhero['img_url']    
      #         myObj["hero_name"] = @myhero['hero_name']
      #         myObj["hero_role"] = @myhero['roles']
      #         myObj["hero_type"] = @myhero['char_type']
      #       end
      #   end

      # @myheroes_list.push(myObj['hero_id'])
      # @mygames_list.push(myObj)

      # end

      # @top_3_list = []
      # @freq = @myheroes_list.inject(Hash.new(0)) { |h,v| h[v] += 1; h }
      # @swap = @myheroes_list.max_by { |v| @freq[v] }
      # @test = @freq.sort_by {|_key, value| value}
      # @my_fav_heroes = [@test[-1],@test[-2],@test[-3],@test[-4],@test[-5]]

      # @my_fav_heroes.each do |hero|
      #   @temphero = Champion.find(hero[0])
      #   @frequency = [hero[1]]
      #   top_3_heroes = {
      #   "hero_id" => hero[0],
      #   "frequency" => @frequency,
      #   "hero_pic" =>  @temphero['img_url'],    
      #   "hero_name" => @temphero['hero_name']
      #   }
      #   @top_3_list.push(top_3_heroes)
      # end

      # binding.pry

          # @current_user = User.find(session[:user_id])
    user = User.find(session[:user_id])
    @match_history_icon = []
    user.matches.each do |match|
      player = user.players.find_by(match_id: match.id)   
      my_hash = {
      hero: player.hero_id
      # slot: match['player_slot']
      }
      my_hash[:winner] = player['winner']
      my_hash[:match_id] = match['id']
      my_hash[:unformat_time] = match['start_time']
      my_hash[:time] = Time.at(match['start_time']).strftime("%F %I:%M %p")
      @match_history_icon.push(my_hash)
    end
    # @recent_matches = HTTParty.get("https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key=73626CB2E22E10D9F4AB0D7ECBAF600B&account_id="+ @current_user.steam_id)
    @players = Player.where(user_id: user.id)
    @items = Item.all 
    @heros = Champion.all

    respond_to do |format|
        format.html
        format.json {render json: @match_history_icon}
    end

    else
      redirect_to user_path(actual_user)
    end
  end



  private
  def user_params
    params.require(:user).permit(:user_name, :password)
  end

end






  # "avatarfull":
  # personaname
  # personastate

  # if available

  # loccountrycode": "US",
  # "locstatecode": "WA",
  # "loccityid": 3961

  # grab if appid 570 data
  # playtime_2weeks": 5088,
  # "playtime_forever": 318586,


  # var x = 1442775654*1000
  # undefined
  # var date = new Date(x);

  # On a system that supports up to 64-bit numbers you can do the following:
  # STEAMID64 - 76561197960265728 = STEAMID32
  # STEAMID32 + 76561197960265728 = STEAMID64

  # 76561197981778464 - 76561197960265728




  #           ("http://api.steampowered.com/ISteamEconomy/GetAssetPrices/v0001/?appid=570&key=73626CB2E22E10D9F4AB0D7ECBAF600B")
  #           ("http://api.steampowered.com/IEconItems_570/GetPlayerItems/v0001/?key=73626CB2E22E10D9F4AB0D7ECBAF600B&steamid=76561197981778464")
  #           ("http://api.steampowered.com/ISteamEconomy/GetAssetClassInfo/v0001/?key=73626CB2E22E10D9F4AB0D7ECBAF600B&appid=570&class_count=1&classid0=106611040,92319768")
  #           ("http://steamcommunity-a.akamaihd.net/economy/image/" + imgurl
  #           