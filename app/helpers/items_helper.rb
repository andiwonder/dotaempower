# module ItemsHelper
#   require 'json'
#   @@items = JSON.load $redis.get("items")
  
#   def self.fetch_items
#     items =  $redis.get("items")
#     if items.nil?
#       items = Item.all.to_json
#       $redis.set("items", items)
#     end
#     @items = JSON.load items
#   end
  
#   def self.return_image(id)
#     if (id != 0)
#       begin
#         "https://d10bybrdwoa4y6.cloudfront.net/test" + @@items.find {|item| item["id"] == id}["img_url"]
#       rescue
#         "https://d10bybrdwoa4y6.cloudfront.net/test/assets/items_bg2.png"
#       end
#     else
#       "https://d10bybrdwoa4y6.cloudfront.net/test/assets/items_bg2.png"
#     end
#   end

# end

