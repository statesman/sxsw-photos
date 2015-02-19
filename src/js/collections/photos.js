define(['backbone', 'models/photo'], function(Backbone, PhotoModel) {

  'use strict';

  return Backbone.Collection.extend({

    model: PhotoModel

  });

});
