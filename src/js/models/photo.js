define(['backbone'], function(Backbone) {

  'use strict';

  return Backbone.Model.extend({

    // TODO: Derive this and .w() based on the image
    h: function() {
      return this.get('h');
    },
    w: function() {
      return this.get('w');
    },

    // TODO: Intelligently choose an appropriately-sized image here
    url: function() {
      return 'assets/crash/' + this.get('id') + '.jpg';
    },

    /*
     * Returns an array with pixel coordinates for a point when passed decimal
     * values for the relative position of that point
     */
    xy: function(x, y) {
      return [x * this.w(), y * this.h()];
    }

  });

});
