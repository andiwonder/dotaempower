var Hero_Avgview = Backbone.View.extend({

  model: hero_avg_stats,
  id: "ind_hero_stats_display",
  tagName: "div",
  template: _.template( $('#ind_hero_stats_template').html() ),

  initialize: function(){
    this.listenTo(this.model,"change",this.render);

  },

  render: function(){
    this.model.fetch();
    var renderedHTML = this.template(this.model.attributes);
    this.$el.html(renderedHTML);
    $("#user_hero_ind_stat_main").append(this.$el);
  }
});