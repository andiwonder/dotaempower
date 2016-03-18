module SeedHelper

  require "open-uri"
  require 'pry'
  require 'json'


  def get_item_images
    file = File.open("item.json", "r")
    data = file.read
    parsedData = JSON.parse(data)

    parsedData['itemdata'].each do |key, array|
      a =  array['img']
      File.open(a , 'wb') do |fo|
        fo.write open("http://cdn.dota2.com/apps/dota2/images/items/" + a).read 
      end
    end
  end

  def get_hero_images(myheroes)
    myheroes.each do |hero|
      a = hero['name']
      a.to_s.gsub!("npc_dota_hero_", "") 
      puts a

      File.open(a + '.png', 'wb') do |fo|
          fo.write open("http://cdn.dota2.com/apps/dota2/images/heroes/" + a + "_full.png").read 
      end
    end
  end

end
