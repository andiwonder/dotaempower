#DotaEmpower



Improving at **DOTA** is one of the most challenging feats in life. DotaEmpower aims to help users improve by allowing them to see their current progress, track their mistakes, and interact with other users to gain help. Accomplished by utilizing the **Steam API** , **Twitch API**, and **Amazon AWS**.  

#Setup: 
* seed application with necessary info
    * retrieve heros - name , img , role , and type.<br>
    * retrieve items - name , img , cost , lore.<br>
  

* retrieve and display stats from Steam API (100,000 calls per day limit)<br>
    * Using (steamid) retrieve user-match history - 100 games per call.<br>
    * then retrieve individual match details - 100 different calls. 

* Acess twitch vods
    * login into twitch using Oauth 2.0 
    * access past broadcasts


#Features:
* display stats (currently static , need to write queries)
    * use d3js to create playstyle graph<br>
![Playstyle graph](/public/assets/readme/pic1.png?raw=true "Playstyle graph")        
* Matches
    * use slick js and ruby embed rendering to create a card carousel<br>
![Playstyle graph](/public/assets/readme/pic2.png?raw=true "Playstyle graph")        
    * use d3js to create a minimap like view<br>
![Playstyle graph](/public/assets/readme/pic3.png?raw=true "Playstyle graph")        
* Heros
    * use d3js to create a quick graph overview of last 20 games<br>
![Playstyle graph](/public/assets/readme/pic4.png?raw=true "Playstyle graph")        
    * sql queries to calculate the average and best performances<br>
![Playstyle graph](/public/assets/readme/pic5.png?raw=true "Playstyle graph")        
    * Create Notes using form<br>
      1.specify time interval<br>
       i.e: 14:35 - 18:21 (14 mins 35 seconds to 18 mins 21 seconds)<br>
      2.specify category - Deaths , Highlight , PSA , Shoutout<br>
        specify subcategory - Mechanical , Game , Mindset<br>
      3.Is saved to Amazon s3 and hosted from cloudfront cdn


Needed fixes:
  Add Tests to improve and fine tune the code
  Make routes restful
  Add caching via redis and move static assets to CDN
  Create background processing for long process - i.e save videos from Twitch

In-development features:
  Create social layer to allow users to follow each other
  Create brief notes version

