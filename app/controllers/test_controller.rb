class TestController < ApplicationController

	def flash
	end

	def background
    @notes2 = Note.select('start_time,end_time,main_category,category,player_notes').where(user_id: 1,match_id: params[:id]).order(start_time: :asc)
    @notes = @notes2.as_json
    base_time = @notes[0]['start_time'].to_i

    @notes.each_with_index do |note, index|
      if (index == 0) 
        note[:player_time] = 0
      elsif (index == 1)
        note[:player_time] = (@notes[0]['end_time'].to_i - base_time)*4
      else
        player_time = 0 
        @notes[0..index].each do |note2|
          duration = (note2['end_time'].to_i - note2['start_time'].to_i)
          player_time += duration * 4
        end
        note[:player_time] = player_time
      end
    end

    respond_to do |format|
      format.html
      format.json {render json: @notes}
    end
	end

	def chin2
    actual_user = User.find(session[:user_id])
    hero = Player.select('hero_id').find_by(user_id: actual_user[:id] ,match_id: params[:id])
    @hero_stat = Player.joins('INNER JOIN matches ON matches.id = players.match_id').select('matches.start_time as date,players.match_id,players.winner,players.kills,players.deaths,players.assists,players.gold_per_min,players.xp_per_min').where(user_id: actual_user[:id], hero_id: hero[:hero_id]).order(created_at: :desc).limit(20)
    # binding.pry

    respond_to do |format|
      format.html
      format.json {render json: @hero_stat}
    end
	end

  def chin3
    actual_user = User.find(session[:user_id])
    hero = Player.select('hero_id').find_by(user_id: actual_user[:id],match_id: params[:id])
    hero_name = Champion.select('hero_name').find(hero['hero_id'])
    user_hero_wins = Player.where(user_id: actual_user[:id], hero_id: hero['hero_id']).select('sum(case winner when true then 1 else 0 end) AS wins,sum(case winner when false then 1 else 0 end) AS loss,COUNT(match_id) as total')
    user_hero_avg_stats = Player.where(user_id: actual_user[:id], hero_id: hero['hero_id']).group('hero_id').select('AVG(kills) as avg_kills,AVG(deaths) as avg_deaths,AVG(assists) as avg_assists,AVG(gold_per_min) as avg_gold_per_min,AVG(xp_per_min) as avg_xp_per_min,MAX(kills) as max_kills,MIN(deaths) as max_deaths,MAX(assists) as max_assists,MAX(gold_per_min) as max_gold_per_min,MAX(xp_per_min) as max_xp_per_min')
    # @players2 = Player.select('match_ids,winner, kills, deaths, assists, gold_per_min, xp_per_min').where(user_id: 1, hero_id: 8)
    avg_val = Hash.new
    avg_val[:avg_kills] = user_hero_avg_stats[0]['avg_kills'].truncate(1).to_s('F')
    avg_val[:avg_deaths] = user_hero_avg_stats[0]['avg_deaths'].truncate(1).to_s('F')
    avg_val[:avg_assists] = user_hero_avg_stats[0]['avg_assists'].truncate(1).to_s('F')
    avg_val[:avg_gold_per_min] = user_hero_avg_stats[0]['avg_gold_per_min'].floor
    avg_val[:avg_xp_per_min] = user_hero_avg_stats[0]['avg_xp_per_min'].floor
    max_val = Hash.new
    max_val[:max_kills] = user_hero_avg_stats[0]['max_kills']
    max_val[:max_deaths] = user_hero_avg_stats[0]['max_deaths']
    max_val[:max_assists] = user_hero_avg_stats[0]['max_assists']
    max_val[:max_gold_per_min] = user_hero_avg_stats[0]['max_gold_per_min']
    max_val[:max_xp_per_min] = user_hero_avg_stats[0]['max_xp_per_min']
    # binding.pry
    hero_stats = {name: hero_name['hero_name'],overall: user_hero_wins[0], avg_vals: avg_val, max_vals: max_val}

    respond_to do |format|
      format.html
      format.json {render json: hero_stats}
    end  
  end

	def chin
		myheroes= []
		myroles = []
		@players = Player.where(user_id: 1)
		# binding.pry
		@last_match = Match.find(1)
		@players.each do |player|
			myheroes.push(player['hero_id'])
			champ = Champion.find(player['hero_id'])
			myroles.push(champ['roles'])
		end
		@freq = myheroes.inject(Hash.new(0)) { |h,v| h[v] += 1; h }
      	@test = @freq.sort_by {|_key, value| value}
      	@my_fav_heroes = [@test[-1],@test[-2],@test[-3],@test[-4],@test[-5]]
      	@shmee = params[:swap]

      	
      	@testmatch = Match.find(params[:swap])
		@testplayers = @testmatch.players
		@arr = [] 
       #  @testplayers.each do |player|
       #  	@tempvar =  player['account_id'].to_i + 76561197960265728
       #  	@arr.push(@tempvar.to_s) 
       #  end 
       #  @arr2 = @arr.join(",").to_s
       #  @testplayers_summaries = HTTParty.get("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=73626CB2E22E10D9F4AB0D7ECBAF600B&steamids=" + @arr2 )
       
      	# @items = Item.all 
      	# @heros = Champion.all

      respond_to do |format|
        format.html
        format.json {render json: @testplayers}
      end

	end

 	def cannon



    end

    def twitch

 #    	def logged

	# 	@farm = (params[:code])

	# 	@first_vid = "http://www.twitch.tv/lqt1/v/27732847"
	# 	@second_vid = "http://www.twitch.tv/lqt1/v/27727234"
	# 	@third_vid = "http://www.twitch.tv/lqt1/v/27717222"

		
	# 	@url = @first_vid.split("/")[-1]

	# 	@twitchoauth = HTTParty.post("https://api.twitch.tv/kraken/oauth2/token" ,
	# 		:query => { :client_id => "9n260py2zhrn2hmfol9a62cfuguuhs4" ,
	# 			:client_secret => "kqxdgcamsetrudw3dpspb0d3otm8n3a",
	# 			:grant_type => "authorization_code",
	# 			:redirect_uri => "http://localhost:3000/twitch/logged",
	# 			:code => (params[:code]),
	# 		})

	# 	@twitchsig = HTTParty.get("https://api.twitch.tv/api/vods/" + @url + "/access_token?as3=" + @twitchoauth['access_token'])	
		
	# 	@twitch_q_playlist = HTTParty.get("http://usher.justin.tv/vod/" + @url + "?nauthsig=" + @twitchsig['sig']  + "&nauth=" + @twitchsig['token'])
	# 	@dl_url = @twitch_q_playlist.split("\n").select{|l| l.start_with? "http"}[0]


	# 	@twitch_e_playlist = HTTParty.get(@dl_url)
	# 	@first_part = @twitch_e_playlist.split("\n").select{|l| l.start_with? "index"}[720..735]


	# 	@dl_url_dl =  @dl_url.slice(0..(@dl_url.index('/index'))) + @first_part[0]
	# 	# @dl_url_dl = @dl_url.sub("index-dvr.m3u8","") + @first_part
	# 	puts @dl_url_dl

	# 	binding.pry 


	# end


    end







# 'https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=2067889905&key=73626CB2E22E10D9F4AB0D7ECBAF600B'










    def test
    	dupparr = []
    	actual_user = User.find(session[:user_id])

        @recent_matches = HTTParty.get("https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key=" + Rails.application.secrets.steam_api_key +  "&account_id=" + actual_user.steam_id)
        
        # @steam_32_id = @current_user.steam_id.to_i - 76561197960265728
        # steam_32_id = 21512736
        @recent_matches['result']['matches'].each do |game|

         begin
      		@match_in_arr = game['match_id'].to_s
      		@match = HTTParty.get('https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=' + @match_in_arr + '&key=' + Rails.application.secrets.steam_api_key)

      		if Match.find_by(match_seq_num: @match['result']['match_seq_num']) != nil
      			x = Match.find_by(match_seq_num: @match['result']['match_seq_num']).players.find_by(account_id: actual_user[:steam32])
      			# binding.pry
      			dupparr.push(x.match_id.to_i)
      			# @players = Player.where(user_id: actual_user[:id])
            if (x.user_id) == actual_user.id
              puts "nothing to do here"
            else
        			x.update(user_id: actual_user[:id].to_i)
        			# Match.find(1).players.where(user_id: 1)
        			puts "this match exists and player has been updated"
            end
      			next

      		else 

      			current_match = Match.create(
      				radiant_win: @match['result']['radiant_win'],
      				duration: @match['result']['duration'],
      				start_time: @match['result']['start_time'],
      				match_id: @match['result']['match_id'],
      				match_seq_num: @match['result']['match_seq_num'],
      				tower_status_radiant: @match['result']['tower_status_radiant'],
      				tower_status_dire: @match['result']['tower_status_dire'],
      				barracks_status_radiant: @match['result']['barracks_status_radiant'],
      				barracks_status_dire: @match['result']['barracks_status_dire'],
      				cluster: @match['result']['cluster'],
      				first_blood_time: @match['result']['first_blood_time'],
      				lobby_type: @match['result']['lobby_type'],
      				human_players: @match['result']['human_players'],
      				leagueid: @match['result']['leagueid'],
      				positive_votes: @match['result']['positive_votes'],
      				negative_votes: @match['result']['negative_votes'],
      				game_mode: @match['result']['game_mode'],
      				engine: @match['result']['engine'],

      				)


  					@match['result']['players'].each do |player|
  						@player = player
  						@myabl = []
  						@mylvl = []
  						@mytime = []
  						@my_id

              # binding.pry
              
              # if (@match['result']['radiant_win'] == true && @player['player_slot'] 
              #   @winner = true
              # else
              #   @winner = false
              # end	

              if @match['result']['radiant_win'] == true && @player['player_slot'] < 6
                  @winner = true
              elsif @match['result']['radiant_win'] == false && @player['player_slot'] > 127
                  @winner = true
              elsif @match['result']['radiant_win'] == false && @player['player_slot'] < 6
                  @winner = false
              elsif @match['result']['radiant_win'] == true && @player['player_slot'] > 127
                  @winner = false
              end

              puts @winner

  						@player['ability_upgrades'].each do |ability|
  							@myabl.push(ability['ability'])
  							@mylvl.push(ability['level'])
  							@mytime.push(ability['time'])
  						end


  						if @player['account_id'] == actual_user[:steam32]
  							# binding.pry
  							puts "found you!"
  							@my_id = actual_user[:id]
  						else
  							@my_id = nil
  						end

  						# binding.pry
  						@current_player = Player.create(


  							account_id: @player['account_id'].to_i,
  							player_slot: @player['player_slot'].to_i ,
                winner: @winner,
  							hero_id: @player['hero_id'].to_i ,
  							item_0: @player['item_0'].to_i ,
  							item_1: @player['item_1'].to_i ,
  							item_2: @player['item_2'].to_i ,
  							item_3: @player['item_3'].to_i ,
  							item_4: @player['item_4'].to_i ,
  							item_5: @player['item_5'].to_i ,
  							kills: @player['kills'].to_i ,
  							deaths: @player['deaths'].to_i ,
  							assists: @player['assists'].to_i ,
  							leaver_st: @player['leaver_st'].to_i ,
  							gold: @player['gold'].to_i ,
  							last_hits: @player['last_hits'].to_i ,
  							denies: @player['denies'].to_i ,
  							gold_per_min: @player['gold_per_min'].to_i ,
  							xp_per_min: @player['xp_per_min'].to_i ,
  							gold_spent: @player['gold_spent'].to_i ,
  							hero_damage: @player['hero_damage'].to_i ,
  							tower_damage: @player['tower_damage'].to_i ,
  							hero_heal: @player['hero_heal'].to_i ,
  							end_level: @player['level'].to_i ,
  							levels: @mylvl ,
  							abilities: @myabl ,
  							time: @mytime ,
  							match_id: current_match.id,
  							user_id: @my_id
  							)
  					end
  				end
      # respond_to do |format|
    #     format.html
    #     format.json {render json: dupparr}
    #   end
      #   end
    rescue Exception => e
      logger.warn "Unable to update matches, will ignore: #{e}" 
    end
  			end

      redirect_to "/users"
		end


end

# myheroes.each do |hero|
# 	a = hero['name']
# 	a.to_s.gsub!("npc_dota_hero_", "") 
# 	puts a

# 	File.open(a + '.png', 'wb') do |fo|
#   		fo.write open("http://cdn.dota2.com/apps/dota2/images/heroes/" + a + "_full.png").read 
# 	end
# end


# ----------------------------------------------------------------

# require "open-uri"
# require 'pry'
# require 'json'


# file = File.open("item.json", "r")
# data = file.read
# parsedData = JSON.parse(data)




# parsedData['itemdata'].each do |key, array|
#   a =  array['img']
#   File.open(a , 'wb') do |fo|
#   	fo.write open("http://cdn.dota2.com/apps/dota2/images/items/" + a).read 
#   end
# end

