define(['backbone'], function(Backbone) {

  return Backbone.View.extend({

    initialize: function() {
      // Store next/prev buttons for later
      this.$prev = this.$el.find('#prev');
      this.$next = this.$el.find('#next');
      this.$label = this.$el.find('#photo-label');

      // Move through people collection on click
      var self = this;
      this.$prev.on('click', function(e) {
        e.preventDefault();
        self.prevPerson();
      });
      this.$next.on('click', function(e) {
        e.preventDefault();
        self.nextPerson();
      });

      // Update the controls based on person changes
      this.collection.on('personChange', function() {
        // Add disabled classes where needed
        self.$prev.toggleClass('disabled', self.collection.first);
        self.$next.toggleClass('disabled', self.collection.last);

        // Update the label
        self.$label.text(self.collection.active.photo.get('info'));
      });
    },

    /*
     * Handle moving back/forward through the collection
     */
    nextPerson: function() {
      this.collection.nextPerson();
    },
    prevPerson: function() {
      this.collection.prevPerson();
    }

  });

});
