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
    }

  });

});
