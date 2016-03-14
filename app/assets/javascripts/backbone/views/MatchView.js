// console.log("this is a view");

var MatchView = Backbone.View.extend({

	model: Match,
	tagName: 'table class="ui small single line striped compact table"',
	template: JST['backbone/templates/Match/main_detail'],

	initialize: function(){
		this.listenTo(this.model,"change",this.render);

	},

	render: function(){
 	 	// var renderedHTML = JST['Match/main_detail'](this.model.attributes);
 	 	var renderedHTML = this.template(this.model.attributes);
  	this.$el.html(renderedHTML);
  	$("#radiant_side").append(this.$el);
	}
});


// $(document).ready(function(){

// console.log("hi");

// });

