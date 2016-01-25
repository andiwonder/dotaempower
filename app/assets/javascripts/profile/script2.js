
console.log("y1123123o!");

$(document).ready(function(){
  $("#show_friends_list").click(function(){
  	console.log("button clicked");
  	$("#list").toggle();

  });
});


// var ready;
// ready = function (){
//   alert('Hello, world!');
// };

// $(function () { 
//   ready();
// });

// $(function() {
//    alert('Hello, world!');
// })


// $(document).ready(
//   ready()
// );
// $(document).ready(function (){
//   alert('Hello, world!');
//   console.log("asdasdasdasdaksdnlasdknalsdknalksdnaskdnalksdnalskdnasd");
// });
 // <script type="text/template" id="chin-template">
          
 //          <tr>
 //            <th></th>
 //            <th> </th>
 //            <th> </th>
 //            <th>LVL</th> 
 //            <th> </th>
 //            <th>K</th>
 //            <th>D</th>
 //            <th>A</th>
 //            <th> </th>
 //            <th>LH</th>
 //            <th>GPM</th>
 //            <th>XPM</th>
 //            <th>HD</th>
 //            <th>TD</th>
 //            <th></th>
 //            <th></th>
 //            <th></th>
 //            <th></th>
 //            <th></th>
 //            <th></th>
 //          </tr>


          

 //  <%% _.each(this.model.attributes , function (player){ %>
 //    <tr>
 //        <td> <%%= player['account_id'] %></td>
 //        <td> <%%= player['player_slot'] %></td>
 //        <td> </td>


 //        <%% try { %>
 //        <%%  var hero = _.find(heros, function(obj) { return obj.id == player['hero_id'] }) %>
 //        // <%% console.log(hero['img_url']) %>
 //        <td> <img class="match_list_heros" src="<%%= hero['img_url'] %>" > </td>
        
 //        <%% } catch( ex ) { %>
        
 //        <%% } %>



 //        <td> <%%= player['end_level'] %> </td> 
 //        <td> </td>
 //        <td> <%%= player['kills'] %> </td>
 //        <td> <%%= player['deaths'] %> </td>
 //        <td> <%%= player['assists'] %> </td>
 //        <td> </td>
 //        <td> <%%= player['last_hits'] %> </td>
 //        <td> </td>
 //        <td> <%%= player['gold_per_min'] %> </td>
 //        <td> </td>
 //        <td> <%%= player['xp_per_min'] %> </td>
 //        <td> </td>
 //        <td> <%%= player['hero_damage'] %> </td>
 //        <td> </td>
 //        <td> <%%= player['tower_damage'] %> </td>
        
 //        <%% try { %>
 //        <%%  var first_item = _.find(items, function(obj) { return obj.id == player['item_0'] }) %>
 //        // <%% console.log(first_item['img_url']) %>
 //        <td> <img class="match_list_heros" src="<%%= first_item['img_url'] %>" > </td>
        
 //        <%% } catch( ex ) { %>
 //        <td> <img class="match_list_heros" src="/assets/items_bg2.png" > </td>
 //        <%% } %>

 //        <%% try { %>
 //        <%%  var second_item = _.find(items, function(obj) { return obj.id == player['item_1'] }) %>
 //        // <%% console.log(first_item['img_url']) %>
 //        <td> <img class="match_list_heros" src="<%%= second_item['img_url'] %>" > </td>
        
 //        <%% } catch( ex ) { %>
 //        <td> <img class="match_list_heros" src="/assets/items_bg2.png" > </td>
 //        <%% } %>


 //        <%% try { %>
 //        <%%  var third_item = _.find(items, function(obj) { return obj.id == player['item_2'] }) %>
 //        // <%% console.log(third_item['img_url']) %>
 //        <td> <img class="match_list_heros" src="<%%= third_item['img_url'] %>" > </td>
        
 //        <%% } catch( ex ) { %>  
 //        <td> <img class="match_list_heros" src="/assets/items_bg2.png" > </td>
 //        <%% } %>


 //        <%% try { %>
 //        <%%  var fourth_item = _.find(items, function(obj) { return obj.id == player['item_3'] }) %>
 //        // <%% console.log(fourth_item['img_url']) %>
 //        <td> <img class="match_list_heros" src="<%%= fourth_item['img_url'] %>" > </td>
        
 //        <%% } catch( ex ) { %>
 //        <td> <img class="match_list_heros" src="/assets/items_bg2.png" > </td>
 //        <%% } %>


 //        <%% try { %>
 //        <%%  var fifth_item = _.find(items, function(obj) { return obj.id == player['item_4'] }) %>
 //        // <%% console.log(fifth_item['img_url']) %>
 //        <td> <img class="match_list_heros" src="<%%= fifth_item['img_url'] %>" > </td>
        
 //        <%% } catch( ex ) { %>
 //        <td> <img class="match_list_heros" src="/assets/items_bg2.png" > </td>
 //        <%% } %>


 //        <%% try { %>
 //        <%%  var sixth_item = _.find(items, function(obj) { return obj.id == player['item_5'] }) %>
 //        // <%% console.log(sixth_item['img_url']) %>
 //        <td> <img class="match_list_heros" src="<%%= sixth_item['img_url'] %>" > </td>
        
 //        <%% } catch( ex ) { %>
 //        <td> <img class="match_list_heros" src="/assets/items_bg2.png" > </td>
 //        <%% } %>


 //    </tr>
 //  <%% }) %>


      
 //  </script>