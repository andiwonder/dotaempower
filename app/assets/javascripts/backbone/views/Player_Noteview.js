console.log("this is Player_NoteView");
var Player_NoteView = Backbone.View.extend({

  model: Player_Note,
  template: _.template( $('#twitch_notes_display_template').html() ),

  initialize: function(){
    this.listenTo(this.model,"change",this.render);
  },

  render: function(){
    this.model.fetch();
    var renderedHTML = this.template(this.model.attributes);
    this.$el.html(renderedHTML);
    // console.log(renderedHTML);
    $("#twitch_video_notes_container").append(this.$el);
    $('.description a').click(function(){
      console.log($(this).data("time"));
      console.log("note bookmark clicked");
      player.currentTime($(this).data("time"));
    });
  }
});