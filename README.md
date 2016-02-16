#DotaEmpower


Improving at **DOTA** is one of the most challenging feats in life. DotaEmpower aims to help users improve by allowing them to see their current progress, track their mistakes, and interact with other users to gain help. Accomplished by utilizing the **Steam API** , **Twitch API**, and **Amazon AWS**.  

#Setup: 
* seed application with necessary info
    * retrieve heros - name , img , role , and type.<br>
    <!-- ```fo.write open("http://cdn.dota2.com/apps/dota2/images/heroes/" + hero['name'] + "_full.png").read``` -->
    * retrieve items - name , img , cost , lore.<br>
    <!-- ```fo.write open("http://cdn.dota2.com/apps/dota2/images/items/" + a).read``` -->

* retrieve and display stats from Steam API (100,000 calls per day limit)<br>
    * Using (steamid) retrieve user-match history - 100 games per call.<br>
    * then retrieve individual match details - 100 different calls. 

* Acess twitch vods
    * login into twitch using Oauth 2.0 
    * access past broadcasts

<!--         ```HTTParty.get("https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?key=" + Rails.application.secrets.steam_api_key +  "&account_id=" + actual_user.steam_id)``` -->
    
<!--          ```@recent_matches['result']['matches'].each do |game|
         begin
          @match_in_arr = game['match_id'].to_s
          @match = HTTParty.get('https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=' + @match_in_arr + '&key=' + Rails.application.secrets.steam_api_key)``` -->

#Features:


    display stats (currently static , need to write queries)
      use d3js to create playstyle graph
        (https://github.com/andiwonder/dotaempower/public/assets/readme/pic1.png)
      Matches
        use slick js and ruby embed rendering to create a card carousel
        use d3js to create a minimap like view
      Heros
        use d3js to create a quick graph overview of last 20 games
        sql queries to calculate the average and best performances
    Create Notes using form
      specify time interval i.e: 14:35 - 18:21 (14 mins 35 seconds to 18 mins 21 seconds)
      specify category - Deaths , Highlight , PSA , Shoutout
        specify subcategory - Mechanical , Game , Mindset
    Is saved to Amazon s3 and hosted from cloudfront cdn


Needed fixes:
  Add Tests to improve and fine tune the code
  Make routes restful
  Add caching via redis and move static assets to CDN
  Create background processing for long process - i.e save videos from Twitch

In-development features:
  Create social layer to allow users to follow each other
  Create brief notes version

