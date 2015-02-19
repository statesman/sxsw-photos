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
     * Set the active photo; the map view listens for this event; can be
     * passed anything that .get() accepts (id, cid, model, etc.)
     */
    setActive: function(person) {
      this.active = this.get(person);
      this.trigger('personChange', this.active);
    }

  });

});
