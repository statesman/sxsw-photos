require([
  'jquery',
  'backbone',
  'collections/photos',
  'collections/people',
  'views/photo',
  'views/controls',
  'lib/router',
  'data/photos'
], function(
  $, Backbone, PhotosCollection, PeopleCollection, PhotoView, ControlsView, Router, photosData) {

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

    // Setup the map view
    var map = new PhotoView({
      el: '#photo',
      collection: people
    });

    // Setup the controls
    var controls = new ControlsView({
      el: '#controls',
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
