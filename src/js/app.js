require([
  'jquery',
  'collections/photos',
  'collections/people',
  'views/photo',
  'data/photos'
], function($, PhotosCollection, PeopleCollection, PhotoView, photosData) {

  'use strict';

  // Setup the photos collection
  var photos = new PhotosCollection(photosData);

  // Setup the people collection with info from the DOM
  var triggers = [];
  $('.person').each(function(i, el) {
    triggers.push({
      el: el
    });
  });
  var people = new PeopleCollection(triggers, {
    photos: photos
  });

  // Setup the map view ...
  var map = new PhotoView({
    el: '#photo',
    collection: people
  });
  // ... and select the first image
  people.setActive(people.at(0));

  /*
  window.person1 = new L.LatLngBounds(
    map.map.unproject(img.xy(0.8, 0.45)),
    map.map.unproject(img.xy(0.55, 0.7))
  );

  map.map.fitBounds(person1, {
    animate: true,
    pan: {
      duration: 1
    }
  });
  */

});
