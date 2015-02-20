define(['backbone', 'models/person'], function(Backbone, PersonModel) {

  'use strict';

  return Backbone.Collection.extend({

    initialize: function(models, options) {
      // When the user scrolls, update the offset on all child models
      var self = this;
      $(window).on('resize', _.debounce(function() {
        self.trigger('resize');
      }, 300));

      // Store the photos collection so we can access it from the child models
      this.photos = options.photos;
    },

    model: PersonModel,

    /*
     * Sort the collection by descending order of the offset
     */
    comparator: function(model) {
      return -model.get('offset');
    },

    /*
     * Get the person model that is active at the passed pixel depth
     */
    getByDepth: function(depth) {
      return this.find(function(person) {
        return depth > person.get('offset');
      });
    },

    /*
     * Set the active photo; the map view listens for this event; also updates
     * first and last boolean properties
     */
    setActive: function(person) {
      // Pluck the new active model from the collection
      this.active = this.get(person);

      // Set first and last flags
      var i = this.indexOf(this.active);
      if(i === (this.length - 1)) {
        this.first = true;
      }
      else {
        this.first = false;
      }
      if(i === 0) {
        this.last = true;
      }
      else {
        this.last = false;
      }

      // Fire an event to update views
      this.trigger('personChange', this.active);
    },

    /*
     * Move forward/back through the collection by firing an event that sets
     * off the router
     */
    prevPerson: function() {
      if(this.first) {
        return;
      }
      var i = this.indexOf(this.active);
      this.trigger('manualPersonChange', this.at(i + 1));
    },
    nextPerson: function() {
      if(this.last) {
        return;
      }
      var i = this.indexOf(this.active);
      this.trigger('manualPersonChange', this.at(i - 1));
    }

  });

});
