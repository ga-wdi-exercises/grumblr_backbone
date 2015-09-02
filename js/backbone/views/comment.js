App.Views.Comment = Backbone.View.extend({
    className: "comments",
    events: {
        'click .deleteComment': 'deleteComment'
    },
    initialize: function() {
//      this.listenTo(this.model, 'change', this.render);

      this.template = Handlebars.compile($("#commentTemplate").html());
      this.render();
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
   },
   deleteComment: function(){
       event.preventDefault();
       this.model.destroy();
       this.$el.fadeOut();
   }
})
