console.log("this is NoteView");
var Hero_Statview = Backbone.View.extend({

  model: hero_stats,

  initialize: function(){
    this.listenTo(this.model,"change",this.render);
  },

  render: function(){
    this.model.fetch();
    delete this.model.attributes['id'];
    var final_data = $.map(this.model.attributes, function(value, index) {
      return [value];
    });
    drawherostats(final_data);
  }
});
