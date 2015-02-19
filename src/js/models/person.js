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
        return parseInt(c, 10);
      });
    },

    /*
     * Methods that return the corner coordinates of the person, within the photo
     */
    ne: function() {
      var ne = this.get('ne');
      return this.photo.xy(ne[0], ne[1]);
    },
    sw: function() {
      var sw = this.get('sw');
      return this.photo.xy(sw[0], sw[1]);
    }

  });


    /*
    // Get new trigger info from the DOM
    $('.person').each(function(i, el) {
      var $el = $(el);
      triggers.push({
        offset: $el.offset().top,
        el: $el,
        tx: $el.data('tx'),
        ty: $el.data('ty'),
        bx: $el.data('bx'),
        by: $el.data('by')
      });
    });
    */

});
