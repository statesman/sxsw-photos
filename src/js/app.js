require([
  'jquery',
  'collections/photos',
  'collections/people',
  'views/photo',
  'lib/router',
  'data/photos'
], function($, PhotosCollection, PeopleCollection, PhotoView, Router, photosData) {

  'use strict';

  $(function() {

    // Setup the people collection with info from the DOM; marry it up with the
    // bootstrapped photos data
    var triggers = [];
    $('.person').each(function(i, el) {
      triggers.push({
        el: el
      });
    });
    var people = new PeopleCollection(triggers, {
      photos: new PhotosCollection(photosData)
    });

    // Setup the map view ...
    var map = new PhotoView({
      el: '#photo',
      collection: people
    });

    // Fire up the router
    var app = new Router({
      people: people
    });
    
    // Enable hashChange tracking
    Backbone.history.start();

  });

});
