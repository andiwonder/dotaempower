console.log("this is NoteView");
var NoteView = Backbone.View.extend({

  model: Note,

  initialize: function(){
    this.listenTo(this.model,"change",this.render);
  },

  render: function(){
    this.model.fetch();
    var playlist_source = this.model.get("src");
    player.src({type: "application/x-mpegURL", src: playlist_source });
    console.log("noteview rendering and shit");
  }
});
