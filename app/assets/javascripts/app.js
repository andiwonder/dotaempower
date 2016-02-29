
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree ./backbone/routers

$(document).ready(function(){
	console.log("this is app.js");
  console.log("hi");
	swap = new Match({id:1});
	swap.fetch();
	swapview = new MatchView({model:swap});
	swapview.render();

  hero_stats_model = new hero_stats({id:1});
  hero_stats_model.fetch();
  hero_stat_view = new Hero_Statview ({model:hero_stats_model});

  hero_stats_avg_model = new hero_avg_stats({id:1});
  hero_stats_avg_model.fetch();
  hero_stats_avg_view = new Hero_Avgview ({model:hero_stats_avg_model});
  
  note_player = new Note({id:92});
  note_player.fetch();
  note_player_view = new NoteView({model:note_player});

  note_display_note = new Player_Note({id:92});
  note_display_note.fetch();
  note_display_note_view = new Player_NoteView({model:note_display_note});


  $('.minimap_hero_icon_img').click(function(event){
    console.log("hero_potrait clicked" + event.target);
    var match_id = $(this).attr('value');
    swap.set({id:match_id});
    swap.fetch();
    hero_stats_model.set({id:match_id});
    hero_stats_avg_model.set({id:match_id});
    $('html, body').animate({
      scrollTop: $("#match_details_main").offset().top
    }, 1000);
  });

  $('.image.hero_potrait').click(function(event ){
    console.log("hero_potrait clicked" + event.target);
    var match_id = $(this).attr('value').replace('match_','');
    swap.set({id:match_id});
    hero_stats_model.set({id:match_id});
    hero_stats_avg_model.set({id:match_id});
    swap.fetch();
  });
});



// $(document).ready(function(){
//   console.log($("#chart").length);
// })


 
<!--   // <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  // <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js"></script>
  // <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone.js"></script>
  // <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.8/slick.js"></script>
  // <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"></script> -->
