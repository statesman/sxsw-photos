define(['backbone'], function(Backbone) {

  'use strict';

  return Backbone.Model.extend({

    initialize: function() {
      this.$el = $(this.get('el'));

      // Grab the associated PhotoModel, based on the ID in the DOM
      this.photo = this.collection.photos.get(this.$el.data('photo'));

      // Store the coordinates from the DOM
      this.set('ne', this._parseCoord(this.$el.data('ne')));
      this.set('sw', this._parseCoord(this.$el.data('sw')));

      // Calculate the offset for each item and recalculate it every time
      // there's a resize
      this._calcOffset();
      this.collection.on('resize', this._calcOffset, this);
    },

    /*
     * Internal method to update the photo offset
     */
    _calcOffset: function() {
      this.set('offset', this.$el.offset().top);
    },

    /*
     * Parse a string representation of a coordinate into an array of integers
     */
    _parseCoord: function(c) {
      return c.split(',').map(function(c) {
        return parseInt(c, 10) / 100;
      });
    },

    /*
     * Methods that return the corner coordinates of the person, within the photo
     */
    ne: function(bounds) {
      var ne = this.get('ne'),
          size = this._getSize(bounds);
      return [ne[0] * size.w, ne[1] * size.h];
    },
    sw: function(bounds) {
      var sw = this.get('sw'),
          size = this._getSize(bounds);
      return [sw[0] * size.w, sw[1] * size.h];
    },

    /*
     * Get the width and length of the map, based on its bounds
     */
    _getSize: function(bounds) {
      return {
        w: bounds.getEast() - bounds.getWest(),
        h: bounds.getNorth() - bounds.getSouth()
      };
    }

  });

});
