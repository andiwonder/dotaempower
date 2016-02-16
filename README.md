# dotaempower

Improving at DOTA is one of the most challenging feats in life. DOTA empower aims to help users improve by allowing them to see their current progress, track their mistakes, and interact with other users to gain help. Accomplished by utilizing the **Steam API** , **Twitch API**, and **Amazon AWS**.  

  # features: 
    ## retrieve and display stats from Steam API (100,000 calls per day limit)
      seed application with necessary info
        retrieve heros - name , img , role , and type
        retrieve items - name , img , cost , lore
      retrive stats  
        first get user-info by having the user sign up and provide the information (steamid)
        then retrieve user-match history
        then retrieve individual match details
      display stats
        use d3js to create playstyle graph
        
        Matches
          use slick js and ruby embed rendering to create a card carousel
          use d3js to create a minimap like view
        Heros
          use d3js to create a quick graph overview of last 20 games
          sql queries to calculate the average and best performances
    Create Notes from twitch vods
      Oauth 2.0 login into twitch
        access past broadcasts
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

